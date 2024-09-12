import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { AdminAuth, Layout, RequiredAuth } from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
import LoginSignupPage from "./Routes/LoginSignupPage";
import Dashboard from "./Routes/Dashboard";
import AdminDashboard from "./Admin/AdminDash";
import About from "./Routes/About";
import Comments from "./Routes/Comments";
import Drive from "./Routes/Drive";
import Partnerships from "./Routes/Partnerships";

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
          path: "about",
          element: <About />,
        },
        {
          path: "comments",
          element: <Comments />,
        },
        {
          path: "drive",
          element: <Drive />,
        },
        {
          path: "partnerships",
          element: <Partnerships />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminAuth />,
      children: [
        {
          path: "dashboard",
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
          path: "dashboard",
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
