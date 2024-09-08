import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { AdminUserInfoProvider } from "./Contexts/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminUserInfoProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AdminUserInfoProvider>
  </StrictMode>
);
