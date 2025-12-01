import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "attendee",
  });

  const page = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
    padding: "20px",
  };

  const card = {
    width: "400px",
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

  const registerBtn = {
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

  const roleRow = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    alignItems: "center",
    marginTop: "4px",
    marginBottom: "6px",
    fontSize: "14px",
  };

  const smallText = {
    marginTop: "14px",
    fontSize: "14px",
    color: "#444",
  };

  const loginLink = {
    color: "#2B7A78",
    fontWeight: 600,
    textDecoration: "underline",
    marginLeft: "4px",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // demo: just redirect
    nav("/login");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h3 style={title}>Register</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              style={input}
              className="form-control"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              style={input}
              className="form-control"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              name="password"
              style={input}
              className="form-control"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              style={input}
              className="form-control"
              value={form.confirmPassword}
              onChange={onChange}
              required
            />
          </div>

          {/* Role radio buttons */}
          <div style={roleRow}>
            <label>
              <input
                type="radio"
                name="role"
                value="attendee"
                checked={form.role === "attendee"}
                onChange={onChange}
                style={{ marginRight: "6px" }}
              />
              Attendee
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="organizer"
                checked={form.role === "organizer"}
                onChange={onChange}
                style={{ marginRight: "6px" }}
              />
              Organizer
            </label>
          </div>

          <button type="submit" style={registerBtn}>
            Register
          </button>
        </form>

        <div style={smallText}>
          Already have an account?
          <Link to="/login" style={loginLink}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
