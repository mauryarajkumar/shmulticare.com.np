import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
//import "./pages/AdminDashboard";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple check (later connect with Firebase)
//     if (email === "admin@gmail.com" && password === "admin123") {
//       alert("Login successful");
//       window.location.href = "/admin-dashboard";
//     } else {
//       alert("Invalid credentials");
//     }
//   };

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
    // window.location.href = "/admin-dashboard"; 
    navigate("/admin-dashboard");
  } catch (error) {
    alert(error.message);
  }
};

  return (
     
    <div className="login-container">
<Link
  to="/"
  className="home-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Home
</Link>
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Clicnic Admin Panel</h2>

        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;