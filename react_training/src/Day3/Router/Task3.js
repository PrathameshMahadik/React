import { Route } from 'react-router-dom';
import { AboutTask3, Home3, Error } from "../Components";

const routes = [
  {
    path: '/',
    element: <Home3 />
  },
  {
    path: '/about',
    element: <AboutTask3 />
  },
  {
    path: '*',
    element: <Error />
  }
];

const renderRoutes = (routes) =>
  routes.map(({ path, element },index) => (
    <Route key={`name_${index}`} path={path} element={element} />
  ));
export {routes,renderRoutes}