<<<<<<< HEAD
import { useAuth } from "../Contexts/AuthContext";

=======
// import AdvertisementBar from "../Components/AdvertisementBar";
import LandingPage
 from "../Components/LandingPage";
>>>>>>> ed78ecc3151a89fb972e65d12b08e6419cccc441
function Homepage() {
  const { user } = useAuth();

  return (
    <div>
<<<<<<< HEAD
      {user ? (
        <h1>
          Welcome <span>{user.userId}</span>
        </h1>
      ) : (
        <h1>Loading...</h1>
      )}
=======
      <LandingPage/>
      {/* <AdvertisementBar /> */}
>>>>>>> ed78ecc3151a89fb972e65d12b08e6419cccc441
    </div>
  );
}

export default Homepage;
