import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import List from "./pages/List";
import Single from "./pages/Single";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/:id",
          element: <Single />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
