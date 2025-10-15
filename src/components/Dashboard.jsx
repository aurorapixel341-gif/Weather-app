import React from "react";
import heroImg from "../assets/hero.jpg"; // Replace with your own image
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#1e293b" }}>
      {/* Hero Section */}
      <section
        style={{
          height: "75.8vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          background:
            "linear-gradient(-135deg, #4a6fa1, #6d83b5, #a7b5c9, #d9dbe0, #8a8fa3)",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1 1 450px", padding: "4rem 8%" }}>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            The Lume
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#334155",
              maxWidth: "500px",
            }}
          >
            Where the unpredictable sky meets unshakeable trust. We offer a true
            window into your live altitude and atmosphere — ensuring you're
            never a stranger to the world outside your door.
          </p>

          <button
            style={{
              marginTop: "2rem",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "0.9rem 2rem",
              borderRadius: "50px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            <Link
              style={{
                fontSize: "large",
                color: "white",
                textDecoration: "none",
              }}
              to="/"
            >
              Explore Weather
            </Link>
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={heroImg}
            alt="Weather hero"
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "75.8vh",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease-in-out",
            }}
            img
          />
        </div>
      </section>

      {/* About Us Section */}
      <section
        style={{
          padding: "5rem 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "white",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          About The Lume
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "white",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
            maxWidth: "800px",
            margin: "0 auto 3rem",
            lineHeight: "1.7",
          }}
        >
          At <b>The Lume</b>, we provide live and precise weather updates based
          on your current location. You can instantly access your local weather,
          track your city’s hourly changes, and view detailed metrics like
          longitude, latitude, wind pressure, humidity, and temperature. With
          real-time alerts, we ensure you stay ahead of any weather shift.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1116/1116453.png"
              alt="Location"
              style={{ width: "60px", marginBottom: "1rem" }}
            />
            <h3>Live Location</h3>
            <p style={{ color: "#475569" }}>
              Get instant weather reports using your live GPS location.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2938/2938179.png"
              alt="Analytics"
              style={{ width: "60px", marginBottom: "1rem" }}
            />
            <h3>Detailed Metrics</h3>
            <p style={{ color: "#475569" }}>
              Track wind speed, humidity, pressure, and other vital stats.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt="Alerts"
              style={{ width: "60px", marginBottom: "1rem" }}
            />
            <h3>Weather Alerts</h3>
            <p style={{ color: "#475569" }}>
              Stay updated with timely alerts for sudden weather changes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: "5rem 8%",
          background:
            "linear-gradient(-135deg, #4a6fa1, #6d83b5, #a7b5c9, #d9dbe0, #8a8fa3)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Why Choose Us
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#1e293b",
            lineHeight: "1.8",
          }}
        >
          Because we’re more than just a weather app. <b>The Lume</b> combines
          simplicity, reliability, and speed — ensuring you get accurate weather
          insights without delays or clutter. Our mission is to make sure you
          experience the world through the lens of trust and clarity.
        </p>
      </section>

      {/* Login/Register Section */}
      <section
        style={{
          padding: "4rem 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "white",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          Get Started
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "0.9rem 2rem",
              borderRadius: "50px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Login
            </Link>
          </button>
          <button
            style={{
              backgroundColor: "#1e40af",
              color: "#fff",
              border: "none",
              padding: "0.9rem 2rem",
              borderRadius: "50px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <Link
              to="/register"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Register
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
