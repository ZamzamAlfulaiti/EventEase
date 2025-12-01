import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateEvent() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    maxParticipants: "",
    visibility: "",
    photo: null,
  });

  const page = {
    backgroundColor: "#ffffff",
    padding: "40px 40px 80px",
  };

  const cardWrap = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "32px 40px 36px",
    textAlign: "center",
  };

  const title = {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "24px",
  };

  const textInput = {
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
  };

  const textarea = {
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    minHeight: "140px",
    resize: "vertical",
  };

  const selectStyle = {
    ...textInput,
    paddingRight: "30px",
  };

  const radioRow = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    fontSize: "14px",
    marginTop: "4px",
  };

  const createBtn = {
    backgroundColor: "#2B7A78",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 24px",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "12px",
  };

  const onChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setForm((f) => ({ ...f, [name]: files[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Create Event:", form);
    alert("Event created (demo).");
  };

  return (
    <div style={page}>
      <div style={cardWrap}>
        <div style={card}>
          <h1 style={title}>Create Event</h1>

          <form onSubmit={onSubmit}>
            {/* EVENT NAME */}
            <div className="mb-3 text-start">
              <input
                type="text"
                name="name"
                placeholder="Event Name"
                className="form-control"
                style={textInput}
                value={form.name}
                onChange={onChange}
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div className="mb-4 text-start">
              <textarea
                name="description"
                placeholder="Description"
                className="form-control"
                style={textarea}
                value={form.description}
                onChange={onChange}
                required
              />
            </div>

            {/* ROW: CATEGORY – DATE – START/END TIME */}
            <div className="row g-3 mb-3 text-start">
              {/* Category */}
              <div className="col-md-3">
                <select
                  name="category"
                  className="form-select"
                  style={selectStyle}
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

              {/* Date */}
              <div className="col-md-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  style={textInput}
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Start Time */}
              <div className="col-md-3">
                <input
                  type="time"
                  name="startTime"
                  className="form-control"
                  style={textInput}
                  value={form.startTime}
                  onChange={onChange}
                  required
                />
              </div>

              {/* End Time */}
              <div className="col-md-3">
                <input
                  type="time"
                  name="endTime"
                  className="form-control"
                  style={textInput}
                  value={form.endTime}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            {/* ROW: LOCATION – MAX PARTICIPANTS – VISIBILITY */}
            <div className="row g-3 mb-3 text-start">
              {/* Location */}
              <div className="col-md-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="form-control"
                  style={textInput}
                  value={form.location}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Max Participants */}
              <div className="col-md-4">
                <input
                  type="number"
                  name="maxParticipants"
                  placeholder="Max Participants"
                  className="form-control"
                  style={textInput}
                  value={form.maxParticipants}
                  onChange={onChange}
                  min="1"
                  required
                />
              </div>

              {/* Visibility */}
              <div className="col-md-4">
                <div style={radioRow}>
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
            </div>

            {/* ROW: PHOTO UPLOAD + CREATE BUTTON */}
            <div className="row g-3 align-items-center text-start">
              <div className="col-md-4">
                <input
                  type="file"
                  name="photo"
                  className="form-control"
                  style={textInput}
                  onChange={onChange}
                  accept="image/*"
                />
              </div>

              <div className="col-md-4"></div>

              <div className="col-md-4 d-flex justify-content-end">
                <button type="submit" style={createBtn}>
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
