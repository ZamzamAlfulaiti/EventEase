import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AttendeeDashboard() {
  const page = {
    backgroundColor: "#ffffff",
    padding: "24px 40px 60px",
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
    marginBottom: "32px",
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
    marginTop: "16px",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
  };

  const imgPlaceholder = {
    backgroundColor: "#e2e8f0",
    height: "120px",
  };

  const cardBody = {
    padding: "18px 20px 20px",
  };

  const eventTitle = {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const textRow = {
    fontSize: "14px",
    marginBottom: "4px",
  };

  const joinedLabel = {
    fontSize: "14px",
    color: "#2B7A78",
    fontWeight: 700,
    textAlign: "right",
    marginTop: "6px",
    marginBottom: "4px",
  };

  const unregisterBtn = {
    backgroundColor: "#1F7A6F",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: 600,
    width: "100%",
  };

  const joinedEvents = [
    {
      id: 1,
      title: "Event Title",
      date: "01-Dec-2025",
      location: "UTAS Auditorium",
      category: "Workshop",
    },
    {
      id: 2,
      title: "Event Title",
      date: "01-Dec-2025",
      location: "UTAS Auditorium",
      category: "Workshop",
    },
  ];

  return (
    <div style={page}>
      <div style={container}>
        {/* Header */}
        <h1 style={title}>Attendee Dashboard</h1>
        <p style={subtitle}>
          Overview of your joined events and progress.
        </p>

        {/* Stats row */}
        <div style={statRow}>
          <div style={statCard}>
            <div style={statLabel}>Total Joined Events</div>
            <div style={statValue}>8</div>
          </div>
          <div style={statCard}>
            <div style={statLabel}>Upcoming Events</div>
            <div style={statValue}>2</div>
          </div>
          <div style={statCard}>
            <div style={statLabel}>Inquiries sent</div>
            <div style={statValue}>4</div>
          </div>
        </div>

        {/* Joined events */}
        <h2 style={sectionTitle}>Joined Events</h2>

        <div className="row g-4">
          {joinedEvents.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div style={card}>
                <div style={imgPlaceholder}></div>
                <div style={cardBody}>
                  <h5 style={eventTitle}>{event.title}</h5>
                  <p style={textRow}>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p style={textRow}>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p style={textRow}>
                    <strong>Category:</strong> {event.category}
                  </p>

                  <div style={joinedLabel}>JOINED</div>
                  <button style={unregisterBtn}>Unregister</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
