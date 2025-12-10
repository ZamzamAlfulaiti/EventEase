import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";


export default function EventsList() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [results, setResults] = useState([]);
  const [eventData, setEventData] = useState([]);

  const filterBar = {
    backgroundColor: "#2CA39C",
    padding: "12px 40px",
  };

  const filterInner = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };

  const searchInput = {
    flex: 1,
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    fontSize: "14px",
  };

  const selectStyle = {
    minWidth: "160px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "8px 30px 8px 10px",
    fontSize: "14px",
    backgroundPosition: "right 10px center",
  };

  const dateInput = {
    minWidth: "150px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    padding: "8px 10px",
    fontSize: "14px",
  };

  const searchBtn = {
    backgroundColor: "#1F7A6F",
    color: "#ffffff",
    borderRadius: "6px",
    border: "none",
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: "14px",
  };

  const resetBtn = {
    backgroundColor: "#ffffff",
    color: "#1F7A6F",
    borderRadius: "6px",
    border: "1px solid #1F7A6F",
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: "14px",
  };

  const page = {
    backgroundColor: "#ffffff",
    padding: "24px 40px 60px",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
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

  const viewBtn = {
    marginTop: "10px",
    backgroundColor: "#2B7A78",
    border: "none",
    color: "#ffffff",
    padding: "8px 18px",
    borderRadius: "4px",
    fontSize: "14px",
    textDecoration: "none",
    display: "inline-block",
  };

  const showEventsData = async () => {
    try {
      let url = "http://localhost:5000/showEvents";
      const response = await axios.get(url);
      setEventData(response.data);
      setResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showEventsData();
  }, []);

  // Filter logic
  const handleSearch = () => {
    let filtered = [...eventData];

    if (search.trim()) {
      filtered = filtered.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((e) => e.category === category);
    }
    if (date) {
      filtered = filtered.filter((e) => e.date === date);
    }

    setResults(filtered);
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setDate("");
    setResults(eventData);
  };

  return (
    <>
      {/* ⭐ FILTER BAR (teal bar at the top) */}
      <div style={filterBar}>
        <div style={filterInner}>
          <input
            type="text"
            placeholder="Search Events..."
            style={searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            style={selectStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
            <option value="Meetup">Meetup</option>
          </select>

          <input
            type="date"
            style={dateInput}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button style={searchBtn} onClick={handleSearch}>
            Search
          </button>

          <button style={resetBtn} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {/* ⭐ EVENTS LIST */}
      <div style={page}>
        <div style={container}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "20px" }}>
            All Events
          </h2>

          <div className="row g-4">
            {results.length ? (
              results.map((event) =>(
              <div className="col-md-3" key={event._id}>
                <div style={card}>
                  <div style={imgPlaceholder}></div>

                  <div style={{ padding: "18px 20px 20px" }}>
                    <h5 style={{ fontSize: "16px", fontWeight: 600 }}>
                      {event.title}
                    </h5>

                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Category:</strong> {event.category}</p>

                    {/* Working Link */}
                    <Link to={`/event/${event._id}`} style={viewBtn}>
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            )) ): (
              <p>No events found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}