/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const AdvertisementContext = createContext();

export const AdvertisementProvider = ({ children }) => {
  const [advImages, setAdvImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvImages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/pasaydan/admin/advUploadImages",
        { withCredentials: true }
      );
      setAdvImages(res.data);
    } catch (err) {
      setError("Failed to fetch images");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadAdvImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/admin/postAdvUploadImages",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setAdvImages((prevImages) => [...prevImages, res.data]);
    } catch (err) {
      setError("Failed to upload image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete an image
  const deleteAdvImage = async (imageId) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:8000/pasaydan/admin/delAdvUploadImages/${imageId}`,
        { withCredentials: true }
      );
      setAdvImages((prevImages) =>
        prevImages.filter((image) => image.id !== imageId)
      );
    } catch (err) {
      setError("Failed to delete image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvImages();
  }, []);

  return (
    <AdvertisementContext.Provider
      value={{
        advImages,
        loading,
        error,
        uploadAdvImage,
        deleteAdvImage,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
