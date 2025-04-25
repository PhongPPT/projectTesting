import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(auth);
        alert("You have logged out successfully");
        navigate("/login"); // Redirect to the login page after logging out
      } catch (error) {
        console.error("Logout error: ", error);
        alert("Error during logout");
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
      <h2>Logging out...</h2>
    </div>
  );
}

export default LogoutPage;
