import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
import LoginSignupPage from "./Routes/LoginSignupPage";
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
        {
          path: "/auth",
          element: <LoginSignupPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
