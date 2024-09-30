import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './assets/components/layout/Layout';
import Home from './pages/home/home';
import Project from './pages/project/Project';
import Error from './pages/error/Error';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement:<Error/>,
      children: [
        {
          path: "",
          element:<Home/>,
        },

        {
          path: "project/:id",
          element:<Project/>,
        }
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App
