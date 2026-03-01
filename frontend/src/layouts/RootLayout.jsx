// layouts/RootLayout.jsx
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";


const RootLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-white loading-sm"></span>
      </div>
    );
  }

  // If at root path, redirect based on auth status
  if (location.pathname === "/") {
    return <Navigate to={user ? "/message" : "/login"} replace />;
  }

  return <Outlet />;
};

export default RootLayout;