import React, { useState, useEffect } from "react";

function Hourlyforecast({ searchCity }) {
  const apiKey = "2446aa6befab420ae365c88d4e92c5cf";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&cnt=8&appid=${apiKey}`;

  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    if (!searchCity) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const hourly = data.list.map((item) => ({
          time: new Date(item.dt_txt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          temp: Math.round(item.main.temp),
          weather: item.weather[0].main,
          wind: Math.round(item.wind.speed * 3.6),
          humidity: item.main.humidity,
          icon: item.weather[0].icon,
        }));
        setHourlyData(hourly);
      })
      .catch((err) => console.error("Error fetching hourly forecast:", err));
  }, [searchCity]);

  if (!hourlyData.length) return null;
  return (
    <div
      style={{
        background:
          "linear-gradient(-135deg, #4a6fa1, #6d83b5, #a7b5c9, #d9dbe0, #8a8fa3)",
        padding: "20px",
        borderRadius: "14px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        margin: "20px auto",
        maxWidth: "94%",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}>
        Hourly Forecast
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 120px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              textAlign: "center",
              padding: "15px 10px",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s",
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{hour.time}</div>
            <div style={{ marginBottom: "5px" }}>
              <img
                src={`http://openweathermap.org/img/wn/${hour.icon}.png`}
                alt={hour.weather}
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div style={{ marginBottom: "5px" }}>Temp: {hour.temp}°C</div>
            <div>Wind: {hour.wind} km/h</div>
            <div>Humidity: {hour.humidity}%</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourlyforecast;
