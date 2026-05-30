import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>LearnHub 🚀</h2>

      <div>
        <Link
          to="/dashboard"
          style={{
            color: "white",
            marginRight: "15px",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/courses"
          style={{ color: "white" }}
        >
          Courses
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;