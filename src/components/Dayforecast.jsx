import React, { useState, useEffect } from "react";

function Dayforcast({ searchCity }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!searchCity) return;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&cnt=40&appid=2446aa6befab420ae365c88d4e92c5cf`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const daily = data.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .slice(0, 5)
          .map((item) => ({
            date: new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
            }),
            temp: Math.round(item.main.temp),
            weather: item.weather[0].main,
            icon: item.weather[0].icon,
          }));

        setForecast(daily);
      })
      .catch((error) => console.error("Error fetching forecast data:", error));
  }, [searchCity]);

  if (!forecast.length) return null;

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(-135deg, #4a6fa1, #6d83b5, #a7b5c9, #d9dbe0, #8a8fa3)",
          padding: "20px",
          borderRadius: "14px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          width: "100%"
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          5-Day Forecast for {searchCity}
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {forecast.map((day, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 15px rgba(3, 19, 49, 0.5)",
                borderRadius: "12px",
                padding: "15px 20px",
                color: "#fff",
                transition: "transform 0.2s",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{day.date}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.weather}
                  style={{ width: "40px", height: "40px" }}
                />
                <div style={{ textAlign: "right" }}>
                  <div>{day.weather}</div>
                  <div>Temp: {day.temp}°C</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dayforcast;
