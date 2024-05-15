import { Route } from "react-router-dom";
import { product } from "../MockData/products";
import { ProductsTask6, ProductsDetails6 } from "../components";

const routes = [
  {
    path: "/",
    element: <ProductsTask6 products={product} />,
  },
  {
    path: "/products/:id",
    element: <ProductsDetails6 products={product} />,
  },
];
const renderRoutes = (routes) =>
  routes.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

export { routes, renderRoutes };
