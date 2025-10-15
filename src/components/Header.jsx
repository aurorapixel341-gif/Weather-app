import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div
      style={{
        position: "relative", // Add this
        zIndex: 10,
        padding: "10px",
        background: "rgba(0, 0, 0, 0.5)",
        color: "white",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            padding: "5px",
            color: "#00bfff",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.target.style.color = "#00bfff")}
        >
          The Lume
        </h1>

        <div
          style={{
            width: "45%",
            padding: "5px",
            display: "flex",
            gap: "5px",
          }}
        >
          <style>
            {`
              input::placeholder {
                color: white;
                opacity: 1;
              }
            `}
          </style>
          <input
            style={{
              width: "90%",
              padding: "8px 10px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => {
              e.target.style.background = "rgba(255,255,255,0.2)";
              e.target.style.border = "1px solid #00bfff";
            }}
            onBlur={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
              e.target.style.border = "1px solid rgba(255,255,255,0.2)";
            }}
            type="text"
            placeholder="Search a City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            style={{
              height: "5.5vh",
              width: "10%",
              background: "#00bfff",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: "pointer",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
            }}
            onClick={handleSearch}
            onMouseEnter={(e) => {
              e.target.style.background = "#009fd9";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#00bfff";
              e.target.style.transform = "scale(1)";
            }}
          >
            🔍
          </button>
        </div>

        <button
          style={{
            padding: "8px 14px",
            fontSize: "1rem",
            background: "#00bfff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#009fd9";
            e.target.style.transform = "scale(1.05)";
          }}
          onClick={handleSearch}
          onMouseLeave={(e) => {
            e.target.style.background = "#00bfff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Current location
        </button>
      </div>

      <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            padding: "5px",
            display: "flex",
            gap: "20px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>

          <Link
            to="/Dashboard"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Dashboard
          </Link>

          <Link
                  to="/services"
                  style={{
                    padding: "8px 12px",
                    textDecoration: "none",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#00bfff";
                    e.target.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "white";
                  }}
                >
                  Services
                </Link>

          <Link
            to="/about"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            About us
          </Link>
          <Link
            to="/contact"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Contact us
          </Link>
        </div>
        <div
          style={{
            padding: "5px",
            display: "flex",
            gap: "20px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Link
            to="/register"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Register
          </Link>
          <Link
            to="/login"
            style={{
              padding: "5px",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00bfff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
