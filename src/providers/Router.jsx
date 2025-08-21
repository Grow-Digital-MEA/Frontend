import { createBrowserRouter, Outlet } from "react-router";

import LandingLayout from "../layouts/LandingLayout";
import LandingPage from "../routes/LandingPage";
import Error from './../routes/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <LandingLayout />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
        ],
      },
    ],
  },
]);
