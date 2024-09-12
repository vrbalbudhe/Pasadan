import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { AdminUserInfoProvider } from "./Contexts/AdminContext.jsx";
import { SiteSettingContextProvider } from "./Contexts/SiteSettings.jsx";
import { AdvertisementProvider } from "./Contexts/AdvertisementContext.jsx";
import { DriveProvider } from "./Contexts/DriveContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiteSettingContextProvider>
      <AdvertisementProvider>
        <AdminUserInfoProvider>
          <AuthProvider>
            <DriveProvider>
              <App />
            </DriveProvider>
          </AuthProvider>
        </AdminUserInfoProvider>
      </AdvertisementProvider>
    </SiteSettingContextProvider>
  </StrictMode>
);
