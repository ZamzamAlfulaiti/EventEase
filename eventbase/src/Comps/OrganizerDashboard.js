// src/Comps/OrganizerDashboard.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OrganizerDashboard() {
  const page = {
    backgroundColor: "#ffffff",
    padding: "24px 40px 80px",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "4px",
  };

  const subtitle = {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "24px",
  };

  const statRow = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "36px",
  };

  const statCard = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
    padding: "16px 20px",
  };

  const statLabel = {
    fontSize: "14px",
    color: "#4b5563",
    marginBottom: "10px",
  };

  const statValue = {
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "right",
  };

  const sectionTitle = {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "16px",
    marginTop: "8px",
  };

  const tableWrapper = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    padding: "22px 26px 24px",
    marginTop: "8px",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const th = {
    textAlign: "left",
    padding: "10px 4px",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: 600,
  };

  const td = {
    padding: "10px 4px",
    borderBottom: "1px solid #f3f4f6",
  };

  const actions = {
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const events = [
    {
      id: 1,
      name: "Tech Fest ‘25",
      date: "25-Nov-2025",
      participants: "42 / 80",
      status: "Open",
    },
    {
      id: 2,
      name: "Poster day",
      date: "23-Nov-2025",
      participants: "11 / 30",
      status: "Open",
    },
    {
      id: 3,
      name: "National day",
      date: "20-Nov-2025",
      participants: "22 / 80",
      status: "Open",
    },
    {
      id: 4,
      name: "Career day",
      date: "3-Nov-2025",
      participants: "38 / 40",
      status: "Open",
    },
    {
      id: 5,
      name: "IEEE Workshop",
      date: "27-Oct-2025",
      participants: "40 / 40",
      status: "Closed",
    },
  ];

  return (
    <div style={page}>
      <div style={container}>
        {/* Header */}
        <h1 style={title}>Organizer Dashboard</h1>
        <p style={subtitle}>
          Overview of your hosted events and participant stats.
        </p>

        {/* Stats */}
        <div style={statRow}>
          <div style={statCard}>
            <div style={statLabel}>Total Events Hosted</div>
            <div style={statValue}>12</div>
          </div>
          <div style={statCard}>
            <div style={statLabel}>Total Participants</div>
            <div style={statValue}>214</div>
          </div>
          <div style={statCard}>
            <div style={statLabel}>Average Rating</div>
            <div style={statValue}>4.8</div>
          </div>
        </div>

        {/* My Events table */}
        <h2 style={sectionTitle}>My Events</h2>

        <div style={tableWrapper}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Event Name</th>
                <th style={th}>Date</th>
                <th style={th}>Participants</th>
                <th style={th}>Status</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td style={td}>{event.name}</td>
                  <td style={td}>{event.date}</td>
                  <td style={td}>{event.participants}</td>
                  <td style={td}>{event.status}</td>
                  <td style={td}>
                    <span style={actions}>
                      EDIT | DELETE
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
