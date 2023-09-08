import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase.config";
import { useEffect } from "react";
import { loginUser, setLoading } from "../features/userSlice";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (username) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        try {
          const response = await axios.post("https://galaxy-meeting.vercel.app/jwt", {
            email: authUser.email,
          });
          const token = response.data.token;
          localStorage.setItem("access-token", token);

          dispatch(
            loginUser({
              uid: authUser.uid,
              username: authUser.displayName,
              email: authUser.email,
              token: token,
            })
          );
          dispatch(setLoading(false));
        } catch (error) {
          console.error("Error fetching JWT token:", error);
          dispatch(setLoading(false));
        }
      } else {
        localStorage.removeItem("access-token");
        dispatch(setLoading(false));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const authInfo = {
    user,
    isLoading,
    createUser,
    updateUserProfile,
    signIn,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
