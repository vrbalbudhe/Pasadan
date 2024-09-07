import { useAuth } from "../Contexts/AuthContext";

function Homepage() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <h1>
          Welcome <span>{user.userId}</span>
        </h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Homepage;
