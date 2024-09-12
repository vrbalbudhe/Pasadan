/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUserToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/pasaydan/auth/verify-token-auth",
          { withCredentials: true }
        );

        if (response.status === 200 && response.data.success) {
          setUser({ userId: response.data.userId });
          setUser({ email: response.data.email });
          setUser({ name: response.data.name });
          setUser({ role: response.data.role });
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUserToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        loading,
        user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
