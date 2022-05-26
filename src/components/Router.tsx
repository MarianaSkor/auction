import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { AdminPage } from "src/pages/AdminPage";
import { Authorization } from "src/pages/Authorization";
import { CatalogPage } from "src/pages/CatalogPage";
import { EditProductPage } from "src/pages/EditProductPage";
import { HomePage } from "src/pages/HomePage";
import { Page404 } from "src/pages/Page404";
import { Products } from "src/pages/Products";
import { Registration } from "src/pages/Registration";
import { Success } from "src/pages/Success";

interface Page {
  component: JSX.Element;
  path: string;
  pathName: string;
}

const pages: Page[] = [
  {
    component: <HomePage />,
    path: ROUTES.HOME,
    pathName: "HomePage",
  },
  {
    component: <CatalogPage />,
    path: ROUTES.CATALOG,
    pathName: "CatalogPage",
  },
  {
    component: <AdminPage />,
    path: ROUTES.ADMINPAGE,
    pathName: "UserPage",
  },
  {
    component: <Authorization />,
    path: ROUTES.AUTHORIZATION,
    pathName: "Authorization",
  },
  {
    component: <Registration />,
    path: ROUTES.REGISTER,
    pathName: "Registration",
  },
  {
    component: <Success />,
    path: ROUTES.SUCCESS,
    pathName: "Success",
  },
  {
    component: <Products />,
    path: ROUTES.PRODUCTS,
    pathName: "Products",
  },
  {
    component: <EditProductPage />,
    path: ROUTES.EDITPRODUCT,
    pathName: "EditProduct",
  },
  {
    component: <Page404 />,
    path: "*",
    pathName: "Page404",
  },
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {pages.map(({ component, path, pathName }) => (
        <Route element={component} path={path} key={pathName} />
      ))}
    </Routes>
  </BrowserRouter>
);
