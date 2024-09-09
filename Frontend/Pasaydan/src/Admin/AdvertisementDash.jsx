import { RiAdvertisementLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { AdvertisementContext } from "../Contexts/AdvertisementContext"; // Import the AdvertisementContext
import { siteSettingsContext } from "../Contexts/SiteSettings";
import axios from "axios";

function AdvertisementDash() {
  const { advBar, setAdvBar } = useContext(siteSettingsContext);
  const { advImages, uploadAdvImage, deleteAdvImage, loading, error } =
    useContext(AdvertisementContext);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleToggleVisibility = async () => {
    // await setAdvBar(!advBar);
    try {
      const newAdvBarState = !advBar;

      await axios.post(
        "http://localhost:8000/pasaydan/admin/visibility",
        { isVisible: newAdvBarState },
        { withCredentials: true }
      );

      setAdvBar(newAdvBarState);
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleFileUpload = async () => {
    if (selectedFiles) {
      Array.from(selectedFiles).forEach((file) => uploadAdvImage(file));
      setSelectedFiles(null);
    } else {
      alert("No files selected!");
    }
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col">
      {/* Header */}
      <div className="w-full h-28 border-b-2 flex justify-center items-end p-5">
        <p className="w-full text-lg font-semibold text-slate-600">
          <span className="mr-1 inline-block">
            <RiAdvertisementLine />
          </span>
          Advertisement Dashboard
        </p>
        <button className="px-2 py-1 w-60 text-white bg-violet-400 ">
          Advertisement
          <input
            className="ml-2"
            type="checkbox"
            checked={advBar}
            onChange={handleToggleVisibility}
          />
        </button>
      </div>

      <div className="w-full h-14 flex justify-center items-start pl-12 flex-col">
        <h1 className="font-semibold text-xs text-red-400">
          Admin Please Refer that to Upload the Image of dimension or Maintain
          the ratio <span className="text-slate-800">1521 X 403</span>{" "}
        </h1>
        <h1 className="font-semibold text-xs text-red-400">
          Refer This Sites To Create Adv Headers..
          <a
            className="text-blue-400 hover:text-blue-500"
            href="https://www.canva.com/p/templates/EAE91Kz0wsI-blue-yellow-retro-quotes-twitter-header/"
          >
            Link to Canva Template
          </a>
        </h1>
      </div>

      <div
        className={`w-[90%] h-40 border-2 border-dashed ${
          dragActive ? "border-blue-500" : "border-gray-400"
        } flex justify-center items-center mt-4`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          className="hidden"
          id="fileUpload"
          onChange={handleFileChange}
        />
        <label htmlFor="fileUpload" className="text-center">
          {selectedFiles
            ? Array.from(selectedFiles)
                .map((file) => file.name)
                .join(", ")
            : "Drag and drop files here or click to upload"}
        </label>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Upload Button */}
      <div className="w-[90%] flex justify-start items-center mt-4">
        <button
          onClick={handleFileUpload}
          className="px-2 py-1 bg-violet-400 text-white rounded-sm"
        >
          Upload Files
        </button>
      </div>
      {/* 1521 x 403 */}
      {/* Uploaded Images Display */}
      <div className="w-[90%] grid grid-cols-3 gap-4 mt-8">
        {advImages.length > 0 ? (
          advImages.map((image) => (
            <div
              key={image.id}
              className="h-full border border-slate-300 shadow-md p-2 rounded-md relative w-full flex justify-center items-center"
            >
              <img
                src={`http://localhost:8000/uploads/${image.filename}`}
                alt={image.filename}
                className="w-40 h-20 object-contain"
              />
              <button
                onClick={() => deleteAdvImage(image.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-sm text-sm"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdvertisementDash;
