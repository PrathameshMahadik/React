import { Route } from "react-router-dom";
import {
  Home4,
  AboutTask4,
  Login4,
  Dashboard4,
  Setting,
  Profile,
} from "../Components";

const routes = [
  {
    path: "/home",
    element: <Home4 />,
  },
  {
    path: "/about",
    element: <AboutTask4 />,
  },
  {
    path: "/dashboard",
    element: <Dashboard4 />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/",
    element: <Login4 />,
  },
];

const renderRoutes = (routes) =>
  routes.map(({ path, element, children, index }) => (
    <Route key={`name_${index}`} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
export { renderRoutes, routes };
