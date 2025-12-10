// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Comps/Layout/Layout";
import Home from "./Comps/Home";
import EventsList from "./Comps/EventsList";
import Login from "./Comps/Login";
import Register from "./Comps/Register";
import EvDetailsAttendee from "./Comps/EvDetailsAttendee";
import EvDetailsOrganizer from "./Comps/EvDetailsOrganizer";
import AttendeeDashboard from "./Comps/AttendeeDashboard";
import OrganizerDashboard from "./Comps/OrganizerDashboard";
import AboutUs from "./Comps/AboutUs";
import ContactUs from "./Comps/ContactUs";
import CreateEvent from "./Comps/CreateEvent";
import EditEvent from "./Comps/EditEvent";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <EventsList />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/event/:id"
          element={
            <Layout>
              <EvDetailsAttendee />
            </Layout>
          }
        />
        <Route
          path="/event/:id/manage"
          element={
            <Layout>
              <EvDetailsOrganizer />
            </Layout>
          }
        />
        <Route
          path="/dashboard-attendee"
          element={
            <Layout>
              <AttendeeDashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard-organizer"
          element={
            <Layout>
              <OrganizerDashboard />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/create-event"
          element={
            <Layout>
              <CreateEvent />
            </Layout>
          }
        />
        <Route
          path="/edit-event/:id"
          element={
            <Layout>
              <EditEvent />
            </Layout>
          }
        />
      </Routes>
    </Router>
    </>
  );
}
