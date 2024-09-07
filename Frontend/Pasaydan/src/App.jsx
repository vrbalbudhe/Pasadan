import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routes/Layout";
import Homepage from "./Routes/Homepage";
import LoginSignupPage from "./Routes/LoginSignupPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignupPage/>,
      
      /*path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],*/
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
