import { createBrowserRouter } from "react-router-dom";
import { ProductDto } from "./features/products/types";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductsListPage } from "./pages/ProductsListPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { CreateProductPage } from "./pages/CreateProductPage";

type RouteType = Record<
  string,
  {
    path: string;
    title: string;
    dynamicPath?: (id: string) => string;
  }
>;

// const arr1 = ['one', 'two', 'three'];
// const [one, two, three] = arr1; // useState

// const obj1 = {one: 1, two: 2, three: 3};
// const { two } = obj1;

export const Route: RouteType = {
  HOME: {
    path: "/",
    title: "Home",
  },
  PRODUCTS_LIST: {
    path: "/products",
    title: "Products",
  },
  PRODUCTS_DETAILS: {
    path: "/products/:id",
    title: "Products details",
    dynamicPath: (id: ProductDto["id"]) => `/products/${id}`,
  },
  CREATE_PRODUCT: {
    path: "/products/create",
    title: "Create product",
  },
};

// type RouteType = typeof Route;

// browserRouter, memoryRouter, hashRouter (#)
export const router = createBrowserRouter([
  {
    path: Route.HOME.path,
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.PRODUCTS_LIST.path,
        element: <ProductsListPage />,
      },
      {
        path: Route.PRODUCTS_DETAILS.path,
        element: <ProductDetailsPage />,
      },
      {
        path: Route.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
    ],
  },
]);
