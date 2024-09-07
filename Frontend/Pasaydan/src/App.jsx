import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
