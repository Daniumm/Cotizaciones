import { Home, 
  LogIn,
  SignUp,
  PasswordRecovery, 
  ErrorPage,
} from "pages";

import { RouteObject, createBrowserRouter } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import { ROUTES } from "./constants";
import { DynamicTablePage } from "pages/DynamicTablePage";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <AdminRouter />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <ErrorPage /> },
      { path: "login", element: <LogIn/> },
      { path: "signup", element: <SignUp/> },
      { path: "password-recovery", element: <PasswordRecovery/> },    
      { path: "table", element: <DynamicTablePage/> },    ],
  },
];

export const router = createBrowserRouter(routes);
