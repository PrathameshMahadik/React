import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("loginState");
  return (auth === "true") ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
