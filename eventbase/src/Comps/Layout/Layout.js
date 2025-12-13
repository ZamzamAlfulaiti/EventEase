import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children, isLoggedIn }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        {children}
      </div>
    </>
  );
}