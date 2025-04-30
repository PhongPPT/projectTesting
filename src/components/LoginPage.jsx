import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      alert("Logged in successfully");
      navigate("/add");
    } catch (err) {
      console.error(err);
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button>
        {/* <a href="/register">Register</a> */}
        <Link to="/register" style={{textDecoration: "none", color: "inferit"}}>Register</Link>
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
      <button onClick={handleLogin}>Login</button>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
}

export default LoginPage;
