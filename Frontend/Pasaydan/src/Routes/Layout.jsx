import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-center">
      {/* Navigation Bar */}
      <div className="w-[80%] h-full">
        <Navbar />
      </div>
      {/* Navigation Bar */}
      <div className="w-[80%] min-h-[100vh]">
        <Outlet />
      </div>
      <div className="w-[80%] h-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
