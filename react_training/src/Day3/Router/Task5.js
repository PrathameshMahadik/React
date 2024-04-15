import { Route } from "react-router-dom";
import { products } from "../Mockdata/products";
import { ProductsTask6, ProductsDetails6 } from "../Components";

const routes = [
  {
    path: "/",
    element: <ProductsTask6 products={products} />,
  },
  {
    path: "/products/:id",
    element: <ProductsDetails6 products={products} />,
  },
];
const renderRoutes = (routes) =>
  routes.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

export { routes, renderRoutes };
