import Root from "app/Root";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <div>404</div>,
    },
  ]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default Router;
