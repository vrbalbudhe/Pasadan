import { useState } from "react";
import UserInformation from "./UserInformation";
import AdvertisementDash from "./AdvertisementDash";

function AdminDashboard() {
  const [selectedItem, setSelectedItem] = useState("Manage Drive");

  const renderContent = () => {
    switch (selectedItem) {
      case "Manage Drive":
        return <div>Content for Managing Drive</div>;
      case "Advertisement":
        return <AdvertisementDash />;
      case "Manage History":
        return <div>Content for Managing History</div>;
      case "Transactions Logs":
        return <div>Content for Transaction Logs</div>;
      case "User Information":
        return <UserInformation />;
      case "Download CSV Data":
        return <div>Content for Downloading CSV Data</div>;
      case "Logout":
        return <div>Logging out...</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex shadow-sm border-l border-r">
      <div className="w-[20%] h-[100vh] flex justify-center items-center">
        <ul className="w-full h-full flex justify-start pt-10 items-center flex-col gap-2">
          {[
            "Manage Drive",
            "Advertisement",
            "Manage History",
            "Transactions Logs",
            "User Information",
            "Download CSV Data",
            "Logout",
          ].map((item) => (
            <li
              key={item}
              onClick={() => setSelectedItem(item)}
              className={`font-semibold w-[90%] text-center text-slate-600 hover:bg-violet-400 rounded-sm hover:text-white cursor-pointer text-sm p-1 ${
                selectedItem === item ? "text-violet-500" : "text-slate-600"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[80%] border border-slate-200">{renderContent()}</div>
    </div>
  );
}

export default AdminDashboard;
