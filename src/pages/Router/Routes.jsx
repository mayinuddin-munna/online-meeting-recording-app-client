import { createBrowserRouter } from "react-router-dom";
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
import AboutUs from "../aboutUs/AboutUs";
import MeetingRoom from "../Meetup/MeetingRoom";
import Meetup from "../Meetup/Meetup";
import CommunityPage from "../communityPage/CommunityPage";

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
        element: <CommunityPage />,
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
    path: "/meetup",
    element: (
      <PrivateRoute>
        <Meetup />
      </PrivateRoute>
    ),
  },
  {
    path: "/:name/:room",
    element: (
      <PrivateRoute>
        <MeetingRoom />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/userReviews",
        element: <UserReviews />,
      },
    ],
  },
]);

export default router;
