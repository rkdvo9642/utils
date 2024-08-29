import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";

import Main from "../views/index";

function Router() {
  const router = createBrowserRouter([
    { path: "*", element: <Navigate to="/" replace /> },
    {
      element: <App />,
      path: "/",
      children: [
        {
          element: <Main />,
          path: "/",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
