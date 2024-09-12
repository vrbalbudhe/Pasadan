import DriveCard from "../Components/DriveCard";
import { useDrive } from "../Contexts/DriveContext";

function ManageDrive() {
  const { drive } = useDrive();
  return (
    <div className="w-full h-full flex justify-start items-center flex-col">
      {/* Header */}
      <div className="w-full h-28 border-b-2 flex justify-center items-end p-5">
        <p className="w-full text-2xl font-semibold text-slate-600">
          Manage Drive
        </p>
      </div>
      <div className="w-full h-full overflow-auto">
        <div className="w-full h-fit flex flex-col justify-center p-5 items-start">
          <h1 className="text-slate-800 font-semibold p-5">Get All Drives</h1>
          <div className="w-full h-fit flex justify-center items-center flex-wrap gap-5">
            {drive.map((driv, index) => (
              <DriveCard driv={driv} key={driv.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDrive;
