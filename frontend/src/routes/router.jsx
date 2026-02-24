import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", Component: Home },
      { path: "/login", Component: Login },
      { path: "/sign-up", Component: Signup },
    ],
  },
]);
