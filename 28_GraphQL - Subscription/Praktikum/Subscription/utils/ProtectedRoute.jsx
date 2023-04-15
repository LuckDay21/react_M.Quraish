import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isSignedIn, redirectPath = "/", children }) => {
  if (isSignedIn === false) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
