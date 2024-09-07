import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    navigate("/auth");
  }
  return (
    <div className="w-full min-h-[100vh]">
      <p>this is the dashboard</p>
    </div>
  );
}

export default Dashboard;
