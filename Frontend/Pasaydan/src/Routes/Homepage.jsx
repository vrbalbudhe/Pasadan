// import AdvertisementBar from "../Components/AdvertisementBar";
import ContactUs from "../Components/ContactUs";
import LandingPage from "../Components/LandingPage";
function Homepage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-fit">
        <LandingPage />
      </div>
      <div className="w-full h-fit">
        <ContactUs />
      </div>
    </div>
  );
}

export default Homepage;
