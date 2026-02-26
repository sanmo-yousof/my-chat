import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/not-found/NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },

      {
        path : "message",
        element:(
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        )
      },

      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },

      {
        path: "sign-up",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
]);
