import { FiUsers } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useGetUsers } from "../Contexts/AdminContext";
import axios from "axios";
import { useState } from "react";

function UserInformation() {
  const getUsers = useGetUsers();
  const [users, setUsers] = useState(getUsers.users || []); 

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/pasaydan/admin/deleteUser/${userId}`,
        { withCredentials: true }
      );

      if (response.data.success) {
        setUsers(users.filter((user) => user.id !== userId));
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete the user");
      }
    } catch (error) {
      console.error("Error deleting user", error);
      alert("Error deleting user");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-28 border-b-2 flex justify-center items-end p-5">
        <p className="w-full text-lg font-semibold text-slate-600">
          <span className="mr-1 inline-block">
            <FiUsers />
          </span>
          User Information
        </p>
      </div>
      <div className="w-full h-10 border-b-2 flex border-slate-200">
        <h1 className="w-[5%]  text-sm font-semibold text-slate-800 flex justify-center p-2 items-center border-l-2 ">
          S.No
        </h1>
        <h1 className="w-[25%] text-sm font-semibold text-slate-800 flex justify-center p-2 items-center border-l-2">
          Full Name
        </h1>
        <h1 className="w-[40%] text-sm font-semibold text-slate-800 flex justify-center p-2 items-center border-l-2">
          Email Address
        </h1>
        <h1 className="w-[10%] text-sm font-semibold text-slate-800 flex justify-center p-2 items-center border-l-2">
          Date
        </h1>
        <h1 className="w-[20%] text-sm font-semibold text-slate-800 flex justify-center p-2 items-center border-l-2">
          Options
        </h1>
      </div>
      <div>
        {users.map((user, index) => (
          <div
            key={user.id}
            className="w-full h-10 border-b-2 flex border-slate-200"
          >
            <h1 className="w-[5%]  text-sm font-semibold text-slate-600 flex justify-center p-2 items-center border-l-2 ">
              {index + 1}.
            </h1>
            <h1 className="w-[25%] text-sm font-semibold text-slate-600 flex justify-center p-2 items-center border-l-2">
              {user.name}
            </h1>
            <h1 className="w-[40%] text-sm font-semibold text-slate-600 flex justify-center p-2 items-center border-l-2">
              {user.email}
            </h1>
            <h1 className="w-[10%] text-sm font-semibold text-slate-600 flex justify-center p-2 items-center border-l-2">
              {new Date(user.createdAt).toLocaleDateString()}
            </h1>
            <h1
              className="w-[20%] text-xl hover:text-black font-semibold text-slate-600 flex justify-center p-2 items-center border-l-2 cursor-pointer"
              onClick={() => deleteUser(user.id)}
            >
              <AiTwotoneDelete />
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInformation;
