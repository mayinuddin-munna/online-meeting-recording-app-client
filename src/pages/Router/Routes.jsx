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
<<<<<<< HEAD
=======
import Login from "../Register/Login";
import Register from "../Register/Register";
import EmailVerification from "../Register/EmailVerification";
import ForgotPassword from "../Register/ForgotPassword";
>>>>>>> 0084d01efb25f1635fd531d9564d9bdc8549aaf1

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
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
