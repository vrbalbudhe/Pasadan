import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequiredAuth } from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
import LoginSignupPage from "./Routes/LoginSignupPage";
import Dashboard from "./Routes/Dashboard";
import AdminDashboard from "./Admin/AdminDash";
import About from "./Routes/About";
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
          path: "/about",
          element: <About />,
        },
        {
          path: "/admin/dashboard",
          element: <AdminDashboard />,
        },
      ],
    },
    {
      path: "/",
      element: <RequiredAuth />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/auth",
      element: <LoginSignupPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
