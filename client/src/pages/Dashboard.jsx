import Navbar from "../components/Navbar";

function Dashboard() {
  const recommendedCourses = [
    "React Mastery",
    "AI Fundamentals",
    "Full Stack Development",
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
          background: "#0f172a",
          minHeight: "100vh",
          color: "white",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#7c3aed,#4f46e5)",
            padding: "35px",
            borderRadius: "20px",
            marginBottom: "25px",
            boxShadow:
              "0 10px 30px rgba(124,58,237,0.4)",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "10px",
            }}
          >
            Welcome Back 👋
          </h1>

          <p
            style={{
              opacity: 0.9,
              fontSize: "1.1rem",
            }}
          >
            Continue your learning journey and
            discover new skills today.
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div className="card">
            <h2>8</h2>
            <p>Total Courses</p>
          </div>

          <div className="card">
            <h2>3</h2>
            <p>Recommended Courses</p>
          </div>

          <div className="card">
            <h2>65%</h2>
            <p>Learning Progress</p>
          </div>

          <div className="card">
            <h2>12</h2>
            <p>Skills Learned</p>
          </div>
        </div>

        {/* Progress Section */}
        <div
          className="card"
          style={{
            marginBottom: "25px",
          }}
        >
          <h2>Learning Progress</h2>

          <div
            style={{
              width: "100%",
              background: "#334155",
              borderRadius: "20px",
              height: "15px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: "65%",
                background:
                  "linear-gradient(90deg,#8b5cf6,#6366f1)",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>

          <p style={{ marginTop: "10px" }}>
            65% Completed
          </p>
        </div>

        {/* Recommended Courses */}
        <div className="card">
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Recommended For You
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {recommendedCourses.map(
              (course, index) => (
                <div
                  key={index}
                  style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "15px",
                    border:
                      "1px solid #334155",
                  }}
                >
                  <h3>{course}</h3>

                  <p
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Recommended based on your
                    interests and skills.
                  </p>

                  <button
                    style={{
                      marginTop: "10px",
                      background:
                        "#6366f1",
                      color: "white",
                      border: "none",
                      padding:
                        "10px 15px",
                      borderRadius:
                        "10px",
                    }}
                  >
                    View Course
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;