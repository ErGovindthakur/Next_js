import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = Cookies.get("jwt");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>; 
};

export default ProtectedRoute;
