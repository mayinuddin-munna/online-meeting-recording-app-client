import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { loginUser, setLoading } from "../../features/userSlice";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.config";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import DropDwonMenu from "../Shared/Navbar/DropDwonMenu";

const auth = getAuth(app);

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);


  return (
    <div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* <Navbar /> */}
          <DropDwonMenu/>
          <div className="min-h-[calc(100vh-1rem)]">
            <Outlet />
          </div>
          <Footer />
        </>
      )
      }

    </div>
  );
};

export default Main;
