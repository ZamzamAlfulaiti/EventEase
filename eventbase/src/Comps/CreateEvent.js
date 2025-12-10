import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const page = { backgroundColor: "#ffffff", padding: "40px 40px 80px" };
  const cardWrap = { maxWidth: "900px", margin: "0 auto" };
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "32px 40px 36px",
    textAlign: "center",
  };
  const title = { fontSize: "24px", fontWeight: 700, marginBottom: "24px" };
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
  const selectStyle = { ...textInput, paddingRight: "30px" };
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const url = "http://localhost:5000/createEvent";

      const formData = new FormData();
      formData.append("title", form.name);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("date", form.date);
      formData.append("startTime", form.startTime);
      formData.append("endTime", form.endTime);
      formData.append("location", form.location);
      formData.append("maxParticipants", form.maxParticipants);
      formData.append("visibility", form.visibility);
      if (form.photo) {
        formData.append("photo", form.photo);
      }

      // DO NOT set Content-Type manually — axios/browser will set boundary correctly
      const response = await axios.post(url, formData);

      setMessage("Event created successfully!");
      console.log(response.data);

      setForm({
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
    } catch (error) {
      console.error(error?.response || error);
      setMessage("Error creating event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={page}>
      <div style={cardWrap}>
        <div style={card}>
          <h1 style={title}>Create Event</h1>
          {message && <p>{message}</p>}
          <form onSubmit={onSubmit} encType="multipart/form-data">
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

            <div className="row g-3 mb-3 text-start">
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

            <div className="row g-3 mb-3 text-start">
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
                <button type="submit" style={createBtn} disabled={loading}>
                  {loading ? "Creating..." : "Create Event"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}