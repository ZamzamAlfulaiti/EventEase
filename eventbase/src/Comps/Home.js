import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({ setSelectedEvent }) {
  const handleView = (event) => {
    if (typeof setSelectedEvent === "function") {
      setSelectedEvent(event);
    } else {
      console.error("setSelectedEvent not passed!");
    }
  };

  //STYLES
  const hero = {
    backgroundColor: "#2CA39C",
    color: "#ffffff",
    padding: "70px 0 80px",
    textAlign: "center",
  };

  const heroInner = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const heroTitle = {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "10px",
  };

  const heroSub = {
    fontSize: "16px",
    marginBottom: "28px",
  };

  const heroButtons = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  };

  const heroBtnPrimary = {
    backgroundColor: "#205E5B",
    border: "none",
    color: "#ffffff",
    padding: "10px 26px",
    borderRadius: "4px",
    fontWeight: 500,
  };

  const heroBtnSecondary = {
    ...heroBtnPrimary,
  };

  const page = {
    backgroundColor: "#ffffff",
  };

  const featuredSection = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "30px 16px 60px",
  };

  const featuredTitle = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "20px",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    maxWidth: "320px",
    margin: "0 auto",
  };

  const imgPlaceholder = {
    backgroundColor: "#e2e8f0",
    height: "120px",
  };

  const cardBody = {
    padding: "18px 20px 20px",
  };

  const cardTitle = {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const cardText = {
    fontSize: "14px",
    marginBottom: "4px",
  };

  const viewBtn = {
    marginTop: "10px",
    backgroundColor: "#2B7A78",
    border: "none",
    color: "#ffffff",
    padding: "8px 18px",
    borderRadius: "4px",
    fontSize: "14px",
  };

  let [events, setEvents] = useState([]);
  const displayEvents = async () => {
    try {
      const url = "http://localhost:8000/showEvents";
      const res = await axios.get(url);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    displayEvents();
  }, []);
  return (
    <div style={page}>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <h1 style={heroTitle}>
            Discover and Host Events
            <br />
            Effortlessly!
          </h1>
          <p style={heroSub}>Join the community of students and organizers</p>

          <div style={heroButtons}>
            <Link to="/events">
              <button style={heroBtnPrimary}>Explore Events</button>
            </Link>
            <Link to="/create-event">
              <button style={heroBtnSecondary}>Create Event</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section style={featuredSection}>
        <h2 style={featuredTitle}>Featured Events</h2>

        <div className="row g-4">
          {events.slice(0, 3).map((event) => (
            <div className="col-md-4" key={event._id}>
              <div style={card}>
                <div style={imgPlaceholder}><img src={event.imageUrl} style={{ height: "120px", width: "350px" }} /></div>
                <div style={cardBody}>
                  <h5 style={cardTitle}>{event.title}</h5>
                  <p style={cardText}>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p style={cardText}>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p style={cardText}>
                    <strong>Category:</strong> {event.category}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
