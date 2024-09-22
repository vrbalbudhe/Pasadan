import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuBadgeInfo } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";

function DriveCard({ driv }) {
  const [status, setStatus] = useState("Upcoming");

  useEffect(() => {
    const [startDateStr, endDateStr] = driv.timeperiod.split(" - ");
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const currentDate = new Date();

    if (currentDate < startDate) {
      setStatus("Upcoming");
    } else if (currentDate >= startDate && currentDate <= endDate) {
      setStatus("Live");
    } else {
      setStatus("Ended");
    }
  }, [driv.timeperiod]);

  return (
    <div className="w-[320px] h-fit hover:scale-105 duration-300 ease-in-out rounded-[20px] shadow-md border-r border-l border-slate-100 shadow-zinc-300">
      <div className="w-full h-[220px] bg-gradient-to-b rounded-t-[20px] from-violet-400 via-violet-200 to-violet-50">
        <p className="p-2 text-4xl text-white">{driv.title}</p>
      </div>
      <div className="w-full h-[240px] flex justify-start p-5 items-center flex-col">
        <div className="w-full h-[10%] flex justify-between items-center">
          <p className="w-fit px-2 font-semibold rounded-md text-left p-1">
            <span className="inline-block mr-1">
              <CiLocationOn />
            </span>
            {driv.location}
          </p>
          <div className="w-[30%] px-3 h-full flex justify-center items-center">
            <p
              className={`p-1 cursor-pointer w-fit px-3 rounded-sm py-1 text-slate-800 font-semibold 
                ${status === "Live" ? "bg-green-300" : status === "Upcoming" ? "bg-blue-300" : "bg-red-300"}
              `}
            >
              {status}
            </p>
          </div>
        </div>
        <p className="w-full h-[20%] flex justify-start items-center text-sm text-left p-1 pl-1">
          {driv.dtype}
        </p>
        <p className="w-full h-[60%] text-left text-slate-700 p-1">
          <span className="inline-block mr-1">
            <LuBadgeInfo />
          </span>
          {driv.description.slice(0, 150)}...
        </p>
        <p className="w-full h-[10%] text-center text-md text-slate-500 p-1">
          <span className=" inline-block mr-1 text-slate-900  text-md">
            <IoTimerOutline />
          </span>
          {driv.timeperiod}
        </p>
      </div>
    </div>
  );
}

export default DriveCard;
