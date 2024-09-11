import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const Layout = () => {
  return (
    <div className="w-full sticky top-0 h-fit flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-full md:w-[100%] min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export const RequiredAuth = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-full md:w-[100%] min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};
