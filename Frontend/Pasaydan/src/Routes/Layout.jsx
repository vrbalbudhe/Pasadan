import { Navigate, Outlet, useNavigate } from "react-router-dom";
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

export const AdminAuth = () => {
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Is Authenticated:", isAuthenticated);
  console.log("User Role:", user?.role);

  if (!isAuthenticated || !user || user.role !== "admin") {
    console.log("not a admin");
    return <Navigate to="/" />;
  }
  console.log("admin");
  return (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      <div className="w-full md:w-[100%] min-h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};
