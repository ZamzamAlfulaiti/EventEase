// src/Comps/EditEvent.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditEvent() {
  const [form, setForm] = useState({
    title: "Event Title",
    description: "A Workshop about … presented by …",
    category: "Workshop",
    date: "2025-12-01",
    startTime: "09:00",
    endTime: "12:00",
    location: "UTAS Auditorium",
    maxParticipants: "30",
    visibility: "public",
    photo: null,
  });

  const card = {
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    padding: "40px 50px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    maxWidth: "900px",
    margin: "40px auto",
    minHeight: "650px",
  };

  const textInput = {
    height: "42px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
  };

  const textarea = {
    minHeight: "150px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    resize: "vertical",
    fontSize: "14px",
  };

  const selectInput = {
    ...textInput,
    paddingRight: "28px",
  };

  const btnPrimary = {
    backgroundColor: "#2B7A78",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 22px",
    fontWeight: 600,
  };

  const btnCancel = {
    backgroundColor: "#4b5563",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 22px",
    fontWeight: 500,
  };

  function onChange(e) {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("Event updated (demo).");
  }

  function goBack() {
    window.history.back();
  }

  return (
    <div style={{ padding: "40px" }}>
      <div style={card}>
        <h2 className="text-center mb-4" style={{ fontWeight: 700 }}>
          Edit Event
        </h2>

        <form onSubmit={onSubmit}>
          {/* Title */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              style={textInput}
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Event Title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <textarea
              className="form-control"
              style={textarea}
              name="description"
              value={form.description}
              onChange={onChange}
              placeholder="Description"
              required
            />
          </div>

          {/* Category – Date – Time */}
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <select
                className="form-select"
                style={selectInput}
                name="category"
                value={form.category}
                onChange={onChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Workshop">Workshop</option>
                <option value="Conference">Conference</option>
                <option value="Meetup">Meetup</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                style={textInput}
                name="date"
                value={form.date}
                onChange={onChange}
                required
              />
            </div>

            {/* Start + End Time */}
            <div className="col-md-2">
              <input
                type="time"
                className="form-control"
                style={textInput}
                name="startTime"
                value={form.startTime}
                onChange={onChange}
                placeholder="Start Time"
                required
              />
            </div>

            <div className="col-md-2">
              <input
                type="time"
                className="form-control"
                style={textInput}
                name="endTime"
                value={form.endTime}
                onChange={onChange}
                placeholder="End Time"
                required
              />
            </div>
          </div>

          {/* Location – Max Participants – Visibility */}
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                style={textInput}
                name="location"
                value={form.location}
                onChange={onChange}
                placeholder="Location"
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                style={textInput}
                name="maxParticipants"
                value={form.maxParticipants}
                onChange={onChange}
                placeholder="Max Participants"
                required
              />
            </div>

            <div className="col-md-4 d-flex align-items-center gap-3">
              <label>
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={form.visibility === "public"}
                  onChange={onChange}
                />{" "}
                Public
              </label>

              <label>
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={form.visibility === "private"}
                  onChange={onChange}
                />{" "}
                Private
              </label>
            </div>
          </div>

          {/* Photo */}
          <div className="mb-4" style={{ maxWidth: "250px" }}>
            <input
              type="file"
              className="form-control"
              style={textInput}
              name="photo"
              onChange={onChange}
              accept="image/*"
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              style={btnCancel}
              onClick={goBack}
            >
              Cancel
            </button>

            <button type="submit" style={btnPrimary}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
