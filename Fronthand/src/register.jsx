import React from "react";
import "./Home.css";

const Register = () => {

  // ⭐ CHANGED FOR BACKEND
  // handleSubmit is now async because we are sending data to server
  const handleSubmit = async (e) => {

    e.preventDefault();

    // ⭐ CHANGED FOR BACKEND
    // Get all form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {

      alert("Passwords do not match");

      return;
    }

    try {

      // ⭐ CHANGED FOR BACKEND
      // Send data from React to Express backend
      const response = await fetch("http://localhost:5001/api/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        // ⭐ CHANGED FOR BACKEND
        // Data being sent to MongoDB through backend
        body: JSON.stringify({
          name,
          email,
          password
        })

      });

      // ⭐ CHANGED FOR BACKEND
      // Get response from backend
      const data = await response.json();

      if (response.ok) {

        alert(data.message);

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Server connection failed");

    }

  };

  return (

    <section className="register-section">

      <div className="register-box">

        <h1>CREATE YOUR ACCOUNT</h1>

        <p>Join us and discover your style.</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"

            // ⭐ CHANGED FOR BACKEND
            // This gives the input the name "name"
            name="name"

            placeholder="Enter your name"
            required
          />


          <label>Email</label>

          <input
            type="email"

            // ⭐ CHANGED FOR BACKEND
            name="email"

            placeholder="Enter your email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />


          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}"
            required
          />


          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />


          <button type="submit">
            CREATE ACCOUNT →
          </button>

        </form>

      </div>

    </section>

  );
};

export default Register;
