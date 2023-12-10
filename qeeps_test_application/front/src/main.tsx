import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root/root";
import Auth, { loader as authLoader } from "./routes/auth/auth";
import Index from "./routes/root";
import AuthIndex, { action as authIdxAction } from "./routes/auth";
import ErrorPage from "./routes/error/errorPage";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    loader: authLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <AuthIndex />,
            action: authIdxAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
