import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const navBar = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "10px 40px",
  };

  const wrap = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const brand = {
    color: "#2B7A78",
    fontSize: "22px",
    fontWeight: 700,
    textDecoration: "none",
  };

  const centerNav = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  };

  const navLink = {
    color: "#222222",
    fontWeight: 500,
    textDecoration: "none",
    fontSize: "15px",
  };

  const rightBox = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const search = {
    width: "220px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "8px 12px",
    fontSize: "14px",
  };

  const loginBtn = {
    backgroundColor: "#1F7A6F", // darker teal
    color: "#ffffff",
    borderRadius: "6px",
    padding: "8px 18px",
    fontWeight: 600,
    textDecoration: "none",
    border: "none",
  };

  const registerBtn = {
    backgroundColor: "#2B7A78",
    color: "#ffffff",
    borderRadius: "6px",
    padding: "8px 18px",
    fontWeight: 600,
    textDecoration: "none",
    border: "none",
  };

  return (
    <nav style={navBar}>
      <div style={wrap}>
        {/* Left: Brand */}
        <Link to="/" style={brand}>
          EventBase
        </Link>

        {/* Center: Nav tabs */}
        <div style={centerNav}>
          <Link to="/" style={navLink}>
            Home
          </Link>
          <Link to="/events" style={navLink}>
            Events
          </Link>
          <Link to="/about" style={navLink}>
            About
          </Link>
          <Link to="/contact" style={navLink}>
            Contact
          </Link>
        </div>

        {/* Right: Search + buttons */}
        <div style={rightBox}>
          <input
            type="text"
            placeholder="Search Events..."
            style={search}
          />
          <Link to="/login" style={loginBtn}>
            Login
          </Link>
          <Link to="/register" style={registerBtn}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
