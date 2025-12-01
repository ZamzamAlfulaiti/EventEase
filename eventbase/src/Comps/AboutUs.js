import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
  const hero = {
    backgroundColor: "#2CA39C",
    padding: "60px 20px",
    textAlign: "center",
    color: "white",
  };

  const heroTitle = {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "8px",
  };

  const heroSubtitle = {
    fontSize: "16px",
    opacity: 0.9,
  };

  const page = {
    backgroundColor: "#ffffff",
    padding: "40px 40px 80px",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const sectionTitle = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "16px",
  };

  const text = {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "10px",
  };

  const divider = {
    width: "100%",
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "32px 0",
  };

  const teamList = {
    fontSize: "15px",
    lineHeight: "1.8",
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div style={hero}>
        <h1 style={heroTitle}>About EventBase</h1>
        <p style={heroSubtitle}>
          Connecting students, organizers, and events across Oman.
        </p>
      </div>

      {/* PAGE CONTENT */}
      <div style={page}>
        <div style={container}>

          {/* OUR STORY */}
          <h2 style={sectionTitle}>Our Story</h2>

          <p style={text}>
            EventBase was created to make it easier for students and organizers at UTAS and
            other Omani universities to host and join events.
          </p>

          <p style={text}>
            Our goal is to simplify event management while encouraging community
            engagement and participation.
          </p>

          <div style={divider}></div>

          {/* MEET THE TEAM */}
          <h2 style={sectionTitle}>Meet the team</h2>

          <div style={teamList}>
            <p>Shahad Al Harthy</p>
            <p>Zamzam Al Fulaity</p>
          </div>

        </div>
      </div>
    </div>
  );
}
