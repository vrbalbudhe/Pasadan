// import AdvertisementBar from "../Components/AdvertisementBar";
import { useContext } from "react";
import AdvertisementBar from "../Components/AdvertisementBar";
import ContactUs from "../Components/ContactUs";
import LandingPage from "../Components/LandingPage";
import { siteSettingsContext } from "../Contexts/SiteSettings";
import WhatWeDo from "../Components/Whatwedo";
import Metrics from "../Components/Metrics";

function Homepage() {
  const { advBar } = useContext(siteSettingsContext);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full h-full">{advBar ? <AdvertisementBar /> : ""}</div>
      <div className="w-full h-fit">
        <LandingPage />
        <WhatWeDo/>
        <Metrics/>
      </div>
      <div className="w-full h-fit">
        <ContactUs />
      </div>
    </div>
  );
}

export default Homepage;
