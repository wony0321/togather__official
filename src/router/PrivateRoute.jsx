import { Navigate } from "react-router";
import useAuthStore from "@/store/authStore";

export default function PrivateRoute({ children }) {
  const token = useAuthStore((state) => state.token);
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}
