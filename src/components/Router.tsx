import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { HomePage } from "src/pages/HomePage";
import { Page404 } from "src/pages/Page404";

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
  // {
  //   component: <ProductsCatalog />,
  //   path: ROUTES.CATEGORY,
  //   pathName: "CategoryPage",
  // },
  // {
  //   component: <AdminPage />,
  //   path: ROUTES.ADMINPAGE,
  //   pathName: "UserPage",
  // },
  // {
  //   component: <Authorization />,
  //   path: ROUTES.AUTHORIZATION,
  //   pathName: "Authorization",
  // },
  // {
  //   component: <Registration />,
  //   path: ROUTES.REGISTER,
  //   pathName: "Registration",
  // },
  // {
  //   component: <ShoppingCard />,
  //   path: ROUTES.SHOPPINGCARD,
  //   pathName: "ShoppingCard",
  // },
  // {
  //   component: <Success />,
  //   path: ROUTES.SUCCESS,
  //   pathName: "Success",
  // },
  // {
  //   component: <Products />,
  //   path: ROUTES.PRODUCTS,
  //   pathName: "Products",
  // },
  // {
  //   component: <EditProductPage />,
  //   path: ROUTES.EDITPRODUCT,
  //   pathName: "EditProduct",
  // },
  // {
  //   component: <NewProduct />,
  //   path: ROUTES.NEWPRODUCT,
  //   pathName: "NewProduct",
  // },
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
