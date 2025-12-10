import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        {children}
      </div>
    </>
  );
}