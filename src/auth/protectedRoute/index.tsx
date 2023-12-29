import { ReactNode } from "react";
import { UserAuth } from "../../context/authProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/"} />;
  } else return children;
}
