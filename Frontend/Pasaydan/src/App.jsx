import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { Layout, RequiredAuth } from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
import LoginSignupPage from "./Routes/LoginSignupPage";
import Dashboard from "./Routes/Dashboard";
import AdminDashboard from "./Admin/AdminDash";
import About from "./Routes/About";

function App() {
  const [advOn, setAdvOn] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage advOn={advOn} uploadedImages={uploadedImages} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/admin/dashboard",
          element: (
            <AdminDashboard
              advOn={advOn}
              setAdvOn={setAdvOn}
              setUploadedImages={setUploadedImages}
            />
          ),
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
