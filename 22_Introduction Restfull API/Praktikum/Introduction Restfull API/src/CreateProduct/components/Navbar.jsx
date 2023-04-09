import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Simple header</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" onClick={() => navigate("/home")}>
              Home
            </a>
            <a className="btn btn-primary" role="button">
              Create Product
            </a>
            <a className="nav-link">Product List</a>
            <a className="nav-link">FAQs</a>
            <a className="nav-link" onClick={() => navigate("/")}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
