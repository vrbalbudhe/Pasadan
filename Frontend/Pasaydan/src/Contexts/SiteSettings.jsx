/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const siteSettingsContext = createContext();

export const SiteSettingContextProvider = ({ children }) => {
  const [advBar, setAdvBar] = useState(false);

  useEffect(() => {
    const fetchVisibility = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/pasaydan/admin/visibility",
          {
            withCredentials: true,
          }
        );
        console.log(res.data.isVisible);
        setAdvBar(res.data.isVisible);
      } catch (error) {
        console.error("Error fetching visibility:", error);
      }
    };

    fetchVisibility();
  }, []);

  return (
    <siteSettingsContext.Provider value={{ advBar, setAdvBar }}>
      {children}
    </siteSettingsContext.Provider>
  );
};
