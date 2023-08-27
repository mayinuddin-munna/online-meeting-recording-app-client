import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import app from '../../firebase.config';
import { useEffect } from 'react';
import { loginUser, setLoading } from '../features/userSlice';

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
    }

    const updateUserProfile = (username) => {
        return updateProfile(auth.currentUser, {
            displayName: username
        });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                dispatch(
                    loginUser({
                        uid: authUser.uid,
                        username: authUser.displayName,
                        email: authUser.email,
                    })
                );
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                // console.log("User is not logged in.");
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [dispatch]);


    const authInfo = {
        user,
        isLoading,
        createUser,
        updateUserProfile,
        signIn,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;