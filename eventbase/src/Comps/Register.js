import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Register() {
  const nav = useNavigate();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  let [message,setMessage]=useState({});
//styles
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


  const onSubmit = async(e) => {
    try{
      let url = "http://localhost:5000/register";
      let newUserInfo = {
        name:name,
        email:email,
        password:password,
      }
      const serverReply = await axios.post(url,newUserInfo);
      setMessage(serverReply.data);
      nav("/login");
    }catch(err){console.log(err);}
    
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
