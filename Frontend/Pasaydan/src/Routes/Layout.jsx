import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const Layout = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      {/* Navigation Bar */}
      <div className="w-full md:w-[80%] h-full">
        <Navbar />
      </div>

      {/* Content */}
      <div className="w-full md:w-[80%] min-h-[100vh]">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="w-full md:w-[80%] h-full py-2 pl-2 pr-2 md:pr-2 md:pl-2">
        <Footer />
      </div>
    </div>
  );
};

export const RequiredAuth = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="w-[100%] h-[100vh] bg-white flex flex-col justify-start items-center">
      {/* Navbar */}
      <div className="md:w-[80%] md:h-[10%] w-full">
        <Navbar />
      </div>

      {/* Content */}
      <div className="md:w-[80%] md:min-h-[100vh] w-full">
        <div className="w-full h-fit">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="w-full h-fit bottom-0 mt-10">
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};
