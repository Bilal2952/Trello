import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import { PrivateRoter } from "./PrivateRoter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../store/slices/authSlice";
import MainPage from "../layout/MainPage";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);
  console.log(role);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || {};

    dispatch(isAuth(data?.role));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoter
              Component={<MainPage />}
              fallBackPath={"/login"}
              isAllowed={!role}
            />
          ),
        },
      ],
    },

    {
      path: "/register",
      element: (
        <PrivateRoter
          Component={<RegisterPage />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <PrivateRoter
          Component={<LoginPage />}
          fallBackPath={"/"}
          isAllowed={role}
        />
      ),
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
