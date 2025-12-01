import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EvDetailsOrganizer() {
  const hero = {
    height: "180px",
    background:
      "linear-gradient(135deg, #cfd6dd 0%, #dfe4ea 40%, #eef1f5 100%)",
    borderBottom: "1px solid #e5e7eb",
  };

  const page = {
    backgroundColor: "#ffffff",
    padding: "24px 40px 60px",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 2.3fr) minmax(0, 1fr)",
    gap: "24px",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "24px 28px",
  };

  const title = { fontSize: "22px", fontWeight: 700 };

  const label = { fontWeight: 600 };
  const row = { fontSize: "14px", marginBottom: "4px" };

  const progressTrack = {
    height: "10px",
    borderRadius: "999px",
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
    maxWidth: "260px",
  };

  const progressFill = {
    width: "75%",
    height: "100%",
    backgroundColor: "#2B7A78",
  };

  const actions = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "40px",
  };

  const btn = (color, border = "none") => ({
    backgroundColor: color,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: border,
    fontWeight: 600,
    width: "100%",
  });

  return (
    <>
      <div style={hero}></div>

      <div style={page}>
        <div style={container}>
          <div style={card}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <h2 style={title}>Event Title</h2>
              
            </div>

            <p style={row}><span style={label}>Date:</span> 01-Dec-2025</p>
            <p style={row}><span style={label}>Time:</span> 09:00 – 12:00</p>
            <p style={row}><span style={label}>Location:</span> UTAS Auditorium</p>
            <p style={row}><span style={label}>Category:</span> Workshop</p>
            <p style={row}><span style={label}>Status:</span> Published</p>

            <p style={{ marginTop: "10px" }}>
              <span style={label}>Description:</span>  
              <p>A Workshop about … presented by …</p>
            </p>

            <p style={{ marginTop: "14px", fontSize: "14px" }}>
              <span style={label}>Participants:</span> 23 / 30
            </p>

            <div style={progressTrack}>
              <div style={progressFill}></div>
            </div>
          </div>

          <div style={actions}>
            <button style={btn("#1F7A6F")}>Edit Event</button>
            <button style={btn("#2CA39C")}>View Participants</button>
            <button
              style={{
                ...btn("#ffffff", "1px solid #fecaca"),
                color: "#b91c1c",
              }}
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
