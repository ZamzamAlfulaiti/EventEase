import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const page = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    padding: "20px",
  };

  const card = {
    width: "380px",
    background: "#ffffff",
    padding: "30px 26px",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  };

  const title = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "20px",
  };

  const input = {
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  };

  const loginBtn = {
    width: "100%",
    background: "#2B7A78",
    color: "#ffffff",
    padding: "10px 0",
    borderRadius: "6px",
    border: "none",
    fontWeight: 600,
    fontSize: "15px",
    marginTop: "10px",
  };

  const smallText = {
    marginTop: "14px",
    fontSize: "14px",
    color: "#444",
  };

  const registerLink = {
    color: "#2B7A78",
    fontWeight: 600,
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "4px",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    nav("/");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h3 style={title}>Login</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              style={input}
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              style={input}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={loginBtn}>
            Login
          </button>
        </form>

        <div style={smallText}>
          Don’t have an account?
          <Link to="/register" style={registerLink}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
