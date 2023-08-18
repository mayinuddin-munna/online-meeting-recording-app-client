import { Children } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Error from "../Shared/Error/Error";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Register/Login";
import Register from "../Register/Register";
import EmailVerification from "../Register/EmailVerification";
import ForgotPassword from "../Register/ForgotPassword";
import OnlineMeeting from "../OnlineMeeting/OnlineMeeting";
import NewMeetings from "../NewMeetings/NewMeetings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new-meeting",
        element: <NewMeetings/>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/email-verification",
        element: <EmailVerification></EmailVerification>,
      },
      {
        path: "/online-meeting",
        element: <OnlineMeeting></OnlineMeeting>,
      },
      {
        path: "/forget-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
