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
