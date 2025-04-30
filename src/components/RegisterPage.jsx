import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Invalid email format");
      return;
    }

    // Validate password length
    if (password.trim().length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password.trim());
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setErrorMessage("Register failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <button>
        {/* <a href="/login">Login</a> */}
        <Link to="/login" style={{textDecoration: "none", color: "inferit"}}>Login</Link>
      </button>
      <br />
      <br />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="email"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="current-password"
      />
      <button onClick={handleRegister}>Register</button>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default RegisterPage;
