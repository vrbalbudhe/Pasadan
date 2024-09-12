import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DriveContext = createContext();

export const DriveProvider = ({ children }) => {
  const [drive, setDrive] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDriveData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/pasaydan/admin/getDrive",
          {
            withCredentials: true,
          }
        );
        if (res.status === 200 && res.data.success) {
          setDrive(res.data.data);
        } else {
          setDrive([]);
        }
      } catch (error) {
        setError(error.message || "Error fetching drive data");
      } finally {
        setLoading(false);
      }
    };

    fetchDriveData();
  }, []);

  return (
    <DriveContext.Provider
      value={{
        drive,
        setDrive,
        error,
        setError,
        loading,
      }}
    >
      {!loading && children} {}
    </DriveContext.Provider>
  );
};

export const useDrive = () => useContext(DriveContext);
