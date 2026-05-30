import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);

    alert("Registration form submitted!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        className="card"
        style={{
          width: "400px",
          padding: "30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, JavaScript)"
            value={formData.skills}
            onChange={handleChange}
          />

          <input
            type="text"
            name="interests"
            placeholder="Interests (AI, Web Development)"
            value={formData.interests}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={{
              marginTop: "15px",
              background: "#6366f1",
              color: "white",
              border: "none",
              padding: "12px",
              width: "100%",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;