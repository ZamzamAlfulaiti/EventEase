import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  const cardWrap = {
    maxWidth: "700px",
    margin: "0 auto",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "28px 30px 32px",
    textAlign: "center",
  };

  const input = {
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
  };

  const textarea = {
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    minHeight: "150px",
    resize: "vertical",
  };

  const sendBtn = {
    backgroundColor: "#2B7A78",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 22px",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "8px",
  };

  const smallNote = {
    marginTop: "18px",
    fontSize: "14px",
    color: "#4b5563",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // for now just clear the form
    setForm({ name: "", email: "", message: "" });
    alert("Message sent (demo).");
  };

  return (
    <div>
      {/* HERO */}
      <div style={hero}>
        <h1 style={heroTitle}>Contact Us</h1>
        <p style={heroSubtitle}>
          We’d love to hear from you! Send us your questions or feedback.
        </p>
      </div>

      {/* CONTENT */}
      <div style={page}>
        <div style={cardWrap}>
          <div style={card}>
            <form onSubmit={onSubmit}>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  style={input}
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  style={input}
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3 text-start">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  style={textarea}
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" style={sendBtn}>
                Send Message
              </button>
            </form>

            <div style={smallNote}>
              We’ll get back to you within 1–2 business days.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
