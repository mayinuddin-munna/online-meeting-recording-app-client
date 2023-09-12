import "./index.css";
import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import router from "./pages/Router/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import reportWebVitals from "./pages/Meetup/reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </Provider>
);

reportWebVitals();
