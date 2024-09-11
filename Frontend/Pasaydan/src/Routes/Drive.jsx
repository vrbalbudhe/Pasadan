import { useContext } from "react";
import { siteSettingsContext } from "../Contexts/SiteSettings";
import AdvertisementBar from "../Components/AdvertisementBar";

function Drive() {
  const { advBar } = useContext(siteSettingsContext);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-40 flex flex-col justify-center items-center bg-[#f0e6ef]">
        <h1 className="text-2xl text-slate-900 text-center">
          Checkout the memorable{" "}
          <span className="text-indigo-600 font-semibold">Memories</span> from
          Our Different Donation Drives
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          Explore the beautiful moments captured during our donation events.
        </p>
      </div>
      <div className="w-full h-full">{advBar ? <AdvertisementBar /> : ""}</div>
      <div className="w-full h-fit pt-10 pb-20 flex justify-center items-center">
        <div className="w-[80%] h-full flex flex-col justify-center items-center">
          <div className="w-full h-[20%] mb-10 flex justify-center items-center p-10">
            <p className="text-[#032d60] text-4xl font-semibold text-center">
              Our Donation Drives & Memories
            </p>
          </div>
          <div className="w-full h-[80%] flex gap-3 justify-center items-center flex-wrap">
            <div className="w-[340px] h-[500px] border border-slate-200 shadow-sm shadow-slate-300">
              <div className="w-full h-[50%] bg-gradient-to-b from-red-400 via-red-200 to-red-50">
                {/* <img src="" alt="certificate1" /> */}
                <p className=" p-2 text-4xl text-white">
                  Our Cycle Donation Drive In Alandi
                </p>
              </div>
              <div className="w-full h-[50%] flex justify-center items-center flex-col">
                <p className="w-full text-left p-1">Time Period</p>
                <p className="w-full text-left p-1">Location</p>
                <p className="w-full text-left p-1">Name</p>
                <p className="w-full text-left p-1">Description</p>
                <p className="w-full text-left p-1">Donation Type:</p>
                <p className="w-full text-left p-1">Donation Type: Cycles</p>
              </div>
            </div>
            <div className="w-[340px] h-[500px] border rounded-2xl border-slate-200 shadow-sm shadow-slate-300">
              <div className="w-full h-[50%] bg-gradient-to-b rounded-t-2xl from-violet-400 via-violet-200 to-violet-50">
                {/* <img src="" alt="certificate1" /> */}
                <p className=" p-2 text-4xl text-white">
                  Our Cycle Donation Drive In Alandi
                </p>
              </div>
              <div className="w-full h-[50%] flex justify-center items-center flex-col">
                <p className="w-full text-left p-1">Time Period</p>
                <p className="w-full text-left p-1">Location</p>
                <p className="w-full text-left p-1">Name</p>
                <p className="w-full text-left p-1">Description</p>
                <p className="w-full text-left p-1">Donation Type:</p>
                <p className="w-full text-left p-1">Donation Type: Cycles</p>
              </div>
            </div>
            <div className="w-[340px] h-[500px] border border-slate-200 shadow-slate-100 shadow-lg">
              <div className="w-full h-[50%] bg-gradient-to-b from-green-400 via-green-200 to-green-50">
                {/* <img src="" alt="certificate1" /> */}
                <p className=" p-2 text-4xl text-white">
                  Our Cycle Donation Drive In Alandi
                </p>
              </div>
              <div className="w-full h-[50%] flex justify-center items-center flex-col">
                <p className="w-full text-left p-1">Time Period</p>
                <p className="w-full text-left p-1">Location</p>
                <p className="w-full text-left p-1">Name</p>
                <p className="w-full text-left p-1">Description</p>
                <p className="w-full text-left p-1">Donation Type:</p>
                <p className="w-full text-left p-1">Donation Type: Cycles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drive;
