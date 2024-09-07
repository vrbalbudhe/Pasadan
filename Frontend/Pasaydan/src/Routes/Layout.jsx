import Navbar from "../Components/Navbar";

function Layout() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <div className="w-[80%] h-full">
        <Navbar />
      </div>
      {/* Navigation Bar */}
      <div className="w-full h-full"></div>
      <div className="w-full h-full"></div>
    </div>
  );
}

export default Layout;
