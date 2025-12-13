import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Comps/Layout/Layout";
import Home from "./Comps/Home";
import EventsList from "./Comps/EventsList";
import Login from "./Comps/Login";
import Register from "./Comps/Register";
import EvDetailsOrganizer from "./Comps/EvDetailsOrganizer";
import CreateEvent from "./Comps/CreateEvent";
import EditEvent from "./Comps/EditEvent";

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home selectedEvent={setSelectedEvent}/>
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <EventsList selectedEvent={setSelectedEvent} />
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
            path="/event/:id/"
            element={
              <Layout>
                <EvDetailsOrganizer selectedEvent={setSelectedEvent}/>
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
