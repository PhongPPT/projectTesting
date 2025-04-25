import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      setErrorMessage("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <button>
        <a href="/login">Login</a>
      </button>
      <br />
      <br />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleRegister}>Register</button>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default RegisterPage;
