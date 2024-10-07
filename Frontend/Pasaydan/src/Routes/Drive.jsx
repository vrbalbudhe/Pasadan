import CommentCard from "../Components/CommentCard";
import DriveCard from "../Components/DriveCard";
import { useComment } from "../Contexts/CommentContext";
import { useDrive } from "../Contexts/DriveContext";
import { FaCaretDown } from "react-icons/fa";
import photo from "../assets/jj.jpg";
import { useState } from "react";

function Drive() {
  const { comment } = useComment();
  const { drive } = useDrive();
  const [showMoreDrive, setShowMoreDrive] = useState(0);
  const [limit, setLimits] = useState(2);
  const [message, setMessage] = useState("");

  const [showMoreComment, setShowMoreComment] = useState(0);
  const [limit1, setLimits1] = useState(4);
  const [message1, setMessage1] = useState("");

  const showMoreDrives = (totalDrives) => {
    if (showMoreDrive + limit < totalDrives) {
      setShowMoreDrive((prev) => prev + limit);
    } else {
      setMessage("No More Drives To Show");
    }
  };

  const showMoreComments = (totalComments) => {
    if (showMoreComment + limit1 < totalComments) {
      setShowMoreComment((prev) => prev + limit1);
    } else {
      setMessage1("No More Comments To Show");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <section
        style={{
          backgroundImage: `url(${photo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: -20,
        }}
        className="w-full h-60 bg-gradient-to-r from-[#061738] to-[#061738] flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl text-zinc-100 font-semibold tracking-tight text-center">
          Checkout the memorable{" "}
          <span className="text-slate-300 font-semibold">Memories</span> from
          Our Different Donation Drives
        </h1>
        <p className="text-white font-semibold text-lg mt-2">
          Explore the beautiful moments captured during our donation events.
        </p>
      </section>

      {drive.length > 0 && (
        <section className="w-full h-fit pt-10 flex justify-center items-center">
          <div className="w-[100%] flex flex-col justify-center items-center">
            <div className="w-full h-[20%] mb-10 p-10 text-center">
              <p className="text-slate-800 text-5xl tracking-tight font-semibold">
                Our Donation Drives & Memories
              </p>
            </div>
            <div className="w-full h-[80%] flex gap-5 justify-center items-center flex-wrap">
              {drive.slice(0, limit + showMoreDrive).map((driv) => (
                <DriveCard driv={driv} key={driv.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      {drive.length > 0 && (
        <div className="w-full h-10 mb-10 flex justify-center items-center cursor-pointer">
          <p
            onClick={() => showMoreDrives(drive.length)}
            className="w-full flex h-fit justify-center items-center"
          >
            <span className="text-2xl mr-1">
              <FaCaretDown />
            </span>
            {message ? (
              <p className="text-sm font-semibold text-slate-500 hover:text-red-500">
                {message}
              </p>
            ) : (
              <p className="text-sm font-semibold text-slate-500 hover:text-red-500">
                Show More
              </p>
            )}
          </p>
        </div>
      )}

      <section className="w-full h-full pb-20 flex flex-col justify-center items-center">
        <div className="w-full h-fit flex flex-col justify-center items-center">
          <div className="relative z-10 w-full p-10 flex justify-center items-center flex-col h-full">
            <p className="text-slate-800 text-6xl p-2 font-semibold">
              Our Pasaydan to Society
            </p>
            <p className="text-indigo-400 text-md font-bold pl-2">
              Watch Out Some Beautiful Stories of Our Contribution to Society
            </p>
          </div>
          <div className="w-[70%] h-full text-center flex justify-center items-center p-2">
            <p className="font-semibold text-slate-600">
              Pasaydan" is a term from Marathi that means "a divine blessing for
              the well-being of all." It originates from Sant Dnyaneshwar’s
              revered text, the Dnyaneshwari, where he prays for the prosperity
              and happiness of humanity. When we think of "Our Pasaydan to
              Society," it reflects a collective responsibility to uplift
              society with kindness, compassion, and positive actions. Just as
              Sant Dnyaneshwar's prayer sought peace and happiness for all
              living beings, our modern interpretation urges us to contribute to
              the greater good by supporting each other, promoting equality, and
              building an environment where everyone can thrive. It embodies a
              selfless dedication to improving lives, fostering harmony, and
              encouraging a sense of unity in society.
            </p>
          </div>
        </div>

        <div className="w-full h-full mt-20 flex justify-center items-center gap-5 flex-wrap">
          {comment.slice(0, limit1 + showMoreComment).map((comm) => (
            <CommentCard comm={comm} key={comm.id} />
          ))}
        </div>

        {comment.length > 0 && (
          <div className="w-full h-10 mb-10 flex justify-center items-center cursor-pointer">
            <p
              onClick={() => showMoreComments(comment.length)}
              className="w-full flex h-fit justify-center items-center"
            >
              <span className="text-2xl mr-1">
                <FaCaretDown />
              </span>
              {message1 ? (
                <p className="text-sm font-semibold text-slate-500 hover:text-red-500">
                  {message1}
                </p>
              ) : (
                <p className="text-sm font-semibold text-slate-500 hover:text-red-500">
                  Show More
                </p>
              )}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Drive;
