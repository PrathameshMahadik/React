import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("loginState");
  let token;
  if (auth === "true") {
    token = true;
  } else token = false;
  return token ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
