/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export const AdminUserInfoProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://localhost:8000/pasaydan/admin/getAllUsers",
          {
            withCredentials: true,
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    }

    fetchUsers();
  }, [users]);

  return (
    <AdminContext.Provider value={users}>{children}</AdminContext.Provider>
  );
};

export const useGetUsers = () => useContext(AdminContext);
