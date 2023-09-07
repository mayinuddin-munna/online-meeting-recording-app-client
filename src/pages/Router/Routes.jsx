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
import Solutions from "../Solutions/Solutions";
import OnlineMeeting from "../OnlineMeeting/OnlineMeeting";
import Feature from "../FeaturePage/Feature";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserReviews from "../Shared/UserReviews/UserReviews";

// Room route
import Join from "../Join";
import Room from "../Room";

// Room Provider don't touch this code my team ⚠️⚠️⚠️
import { RoomProvider } from "../../context/RoomContext";
import CommunityPage from "../communityPage/CommunityPage";
import AboutUs from "../aboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/email-verification",
        element: <EmailVerification />,
      },
      {
        path: "/online-meeting",
        element: <OnlineMeeting />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/features",
        element: <Feature />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/community",
        element: <CommunityPage /> ,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/userReviews",
        element: <UserReviews />,
      },
    ],
  },

  {
    path: "join",
    element: (
      <RoomProvider>
        <Join />
      </RoomProvider>
    ),
  },

  {
    path: "room/:id",
    element: (
      <RoomProvider>
        <Room />
      </RoomProvider>
    ),
  },
]);

export default router;
