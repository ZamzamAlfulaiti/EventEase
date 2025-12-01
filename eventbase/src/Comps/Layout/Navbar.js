import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm"
        style={{
          position: "sticky",
          padding: "10px 40px",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold"
            style={{ color: "#2B7A78", fontSize: "22px" }}>
            EventBase
          </Link>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav" style={{ gap: "30px" }}>
              <li className="nav-item">
                <Link to="/" className="nav-link fw-medium" style={({ isActive }) =>
                    isActive ? { color: "#2B7A78", fontWeight: 600 }: { color: "#333", fontWeight: 500 }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link fw-medium" style={({ isActive }) =>
                    isActive ? { color: "#2B7A78", fontWeight: 600 } : { color: "#333", fontWeight: 500 }}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link fw-medium"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "#2ca39c", fontWeight: 600 }
                      : { color: "#333", fontWeight: 500 }
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link fw-medium"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "#2ca39c", fontWeight: 600 }
                      : { color: "#333", fontWeight: 500 }
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <input
              type="text"
              placeholder="Search Events..."
              className="form-control"
              style={{
                width: "220px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
              }}
            />
            <Link
              to="/login"
              className="btn"
              style={{
                backgroundColor: "#1f7b75",
                color: "#fff",
                borderRadius: "8px",
                fontWeight: "600",
                padding: "8px 16px",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn"
              style={{
                backgroundColor: "#2ca39c",
                color: "#fff",
                borderRadius: "8px",
                fontWeight: "600",
                padding: "8px 16px",
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/events" element={<div></div>} />
        <Route path="/about" element={<div></div>} />
        <Route path="/contact" element={<div></div>} />
        <Route path="/login" element={<div></div>} />
        <Route path="/register" element={<div></div>} />
      </Routes>
    </Router>
  );
}
