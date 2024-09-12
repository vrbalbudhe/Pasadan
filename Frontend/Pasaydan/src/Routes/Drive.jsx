import DriveCard from "../Components/DriveCard";
import { useDrive } from "../Contexts/DriveContext";

function Drive() {
  const { drive } = useDrive();
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
      {/* <div className="w-full h-full">{advBar ? <AdvertisementBar /> : ""}</div> */}
      <div className="w-full h-fit pt-10 pb-20 flex justify-center items-center">
        <div className="w-[80%] h-full flex flex-col justify-center items-center">
          <div className="w-full h-[20%] mb-10 flex justify-center items-center p-10">
            <p className="text-[#032d60] text-4xl font-semibold text-center">
              Our Donation Drives & Memories
            </p>
          </div>
          <div className="w-full h-[80%] flex gap-5 justify-center items-center flex-wrap">
            {drive.map((driv, index) => (
              <DriveCard driv={driv} key={driv.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center pb-20 bg-[#eff7f6]">
        <div className="w-full h-full mb-10 flex flex-col justify-center items-center p-10">
          <p className="text-[#032d60] text-4xl font-semibold text-center">
            Our Pasaydan to Society
          </p>
          <p className="text-slate-800 text-md font-semibold text-center">
            Watch Out Some Beautifull Stories of our Contribution to the Society
          </p>
        </div>
        <div className="w-full h-[80%] flex justify-center items-center gap-5">
          {/* Comments Window */}
          <div className="w-[650px] h-[250px] flex bg-white shadow-lg rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
            {/* Image Section */}
            <div className="w-[40%] h-full relative">
              <img
                src="https://via.placeholder.com/250"
                alt="donation item"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="w-[60%] h-full p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Donation Drive Name
                </h2>
                <p className="text-slate-600 text-sm">
                  Type of Donation: Clothes
                </p>
              </div>
              <p className="text-slate-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                at lectus justo. Curabitur eget auctor libero. Nulla facilisi.
              </p>
              <button className="self-start px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* Comments Window */}
        </div>
      </div>
    </div>
  );
}

export default Drive;
