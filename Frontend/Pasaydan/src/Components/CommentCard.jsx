import { CiLocationOn } from "react-icons/ci";

function CommentCard({ comm }) {
  return (
    <div className="w-[650px] h-fit flex bg-white shadow-md rounded-[10px] overflow-hidden duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-[40%] relative">
        <img
          src="https://via.placeholder.com/250"
          alt="donation item"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-[60%] h-full p-5 flex flex-col justify-start items-start">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{comm.title}</h2>
          <p className="text-slate-700 text-md font-semibold">
            {comm.subtitle}
          </p>
          <p className="text-slate-700 text-md pt-2 font-semibold bg-blue-100 w-fit px-2 py-1">
            {comm.dtype}
          </p>
        </div>
        <p className=" text-slate-700 text-sm pt-2">{comm.description}</p>
        <p className="pt-2 w-fit text-sm text-slate-700 font-semibold text-left">
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
