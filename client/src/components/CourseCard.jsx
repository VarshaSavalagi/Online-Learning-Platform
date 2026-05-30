function CourseCard({ course }) {
  return (
    <div
      className="card"
      style={{
        marginTop: "15px",
      }}
    >
      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <p>
        <strong>{course.category}</strong>
      </p>

      <button
        style={{
          background: "#6366f1",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
        }}
      >
        Enroll
      </button>
    </div>
  );
}

export default CourseCard;