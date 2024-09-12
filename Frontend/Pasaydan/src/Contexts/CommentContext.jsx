import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/pasaydan/admin/getComment",
          {
            withCredentials: true,
          }
        );
        if (res.status === 200 && res.data.success) {
          setComment(res.data.data);
        } else {
          setComment([]);
          setError("Failed to fetch comments");
        }
      } catch (error) {
        setError(error.message || "Error fetching comment data");
      } finally {
        setLoading(false);
      }
    };

    fetchCommentData();
  }, []);

  return (
    <CommentContext.Provider
      value={{
        comment,
        setComment,
        error,
        setError,
        loading,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
