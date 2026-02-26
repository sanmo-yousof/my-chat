import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-sm" />
      </div>
    );
  }

  
  if (user) {
    return <Navigate to="/message" replace />;
  }

  return children;
};

export default PublicRoute;