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
    <div className="w-[950px] h-[300px] flex duration-300 rounded-sm border-2 border-slate-200 shadow-sm shadow-zinc-300">
      <div className="w-[35%] h-full bg-slate-100"></div>
      <div className="w-[65%] h-full flex justify-start p-5 items-center flex-col">
        <div className="w-full h-[20%] flex justify-start font-semibold text-slate-900 items-center">
          <p className="p-2 text-2xl">{driv.title.slice(0, 40)}</p>
        </div>
        <div className="w-full h-[10%] flex justify-between items-center">
          <p className="w-[40%] px-2 font-semibold flex justify-start items-center rounded-md text-sm text-left p-1 text-slate-600">
            <span className="inline-block mr-1">
              <CiLocationOn />
            </span>
            {driv.location}
          </p>
          <div className="w-[60%] px-3 h-full flex justify-center items-center">
            <p
              className={`cursor-pointer w-fit px-3 rounded-md py-1 text-slate-800 font-semibold text-xs 
                ${status === "Live" ? "bg-green-300" : status === "Upcoming" ? "bg-blue-300" : "bg-red-300"}
              `}
            >
              {status}
            </p>
          </div>
        </div>
        <p className="w-full h-[20%] flex justify-start items-center text-sm text-left p-1 pl-3 font-semibold">
          {driv.dtype}
        </p>
        <p className="w-full h-[40%] text-left font-semibold text-sm text-slate-600 p-1">
          {driv.description.slice(0, 550)}...
        </p>
        <p className="w-full h-[10%] font-semibold flex justify-start items-center text-xs text-slate-500 p-1">
          <span className=" inline-block mr-1 text-slate-900  text-sm">
            <IoTimerOutline />
          </span>
          {driv.timeperiod}
        </p>
      </div>
    </div>
  );
}

export default DriveCard;
