import CommentCard from "../Components/CommentCard";
import DriveCard from "../Components/DriveCard";
import { useComment } from "../Contexts/CommentContext";
import { useDrive } from "../Contexts/DriveContext";

function Drive() {
  const { comment } = useComment();
  const { drive } = useDrive();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-full h-40 flex flex-col justify-center items-center bg-[#f0e6ef]">
        <h1 className="text-2xl text-slate-900 text-center">
          Checkout the memorable <span className="text-indigo-600 font-semibold">Memories</span> from Our Different Donation Drives
        </h1>
        <p className="text-slate-600 text-sm mt-2">Explore the beautiful moments captured during our donation events.</p>
      </section>

      {drive.length > 0 && (
        <section className="w-full h-fit pt-10 pb-20 flex justify-center items-center">
          <div className="w-[80%] flex flex-col justify-center items-center">
            <div className="w-full h-[20%] mb-10 p-10 text-center">
              <p className="text-[#032d60] text-4xl font-semibold">Our Donation Drives & Memories</p>
            </div>
            <div className="w-full h-[80%] flex gap-5 justify-center items-center flex-wrap">
              {drive.map((driv) => (
                <DriveCard driv={driv} key={driv.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full h-fit pb-20 flex flex-col justify-center items-center bg-[#eff7f6]">
        <div className="w-full mb-10 p-10 text-center">
          <p className="text-[#032d60] text-4xl font-semibold">Our Pasaydan to Society</p>
          <p className="text-slate-800 text-md font-semibold">Watch Out Some Beautiful Stories of Our Contribution to Society</p>
        </div>
        <div className="w-full h-[80%] flex justify-center items-center gap-5 flex-wrap">
          {comment.slice(0, 6).map((comm) => (
            <CommentCard comm={comm} key={comm.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Drive;
