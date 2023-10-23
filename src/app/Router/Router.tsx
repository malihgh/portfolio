import Root from "app/Root";
import NotFound from "app/Root/components/NotFound";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
    },
  ]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default Router;
