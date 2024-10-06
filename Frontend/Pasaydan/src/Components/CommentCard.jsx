import { CiLocationOn } from "react-icons/ci";

function CommentCard({ comm }) {
  return (
    <div className="w-[650px] h-[250px] flex bg-white shadow-sm border border-slate-300 rounded-md overflow-hidden duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-[40%] relative bg-slate-300">
        <img
          src=""
          alt="donation item"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-[60%] h-full p-5 flex flex-col justify-start items-start">
        <div className="w-full h-full ">
          <div className="w-full h-[20%] flex justify-start items-center">
            <h2 className="text-2xl font-semibold text-slate-800">
              {comm.title}
            </h2>
          </div>
          <div className="w-full h-[20%] flex justify-start items-center">
            <p className="text-slate-700 text-xs font-semibold">
              {comm.subtitle}
            </p>
          </div>
          <div className="w-full h-[10%] flex justify-start items-center mt-3">
            <p className="text-slate-700 text-xs p-2 rounded-full font-semibold bg-blue-100 w-fit px-2 py-1">
              {comm.dtype}
            </p>
          </div>
        </div>
        <div className="w-full h-[40%] flex justify-start items-start">
          <p className=" text-slate-700 text-sm">{comm.description.slice(0,150)}</p>
        </div>
        <p className="pt-2 w-fit text-xs text-slate-700 font-semibold text-left">
          <span className="inline-block mr-1">
            <CiLocationOn />
          </span>
          {comm.location}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
