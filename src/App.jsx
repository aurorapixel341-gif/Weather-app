import React from "react";
import { useState } from "react";
import "../src/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Landinpage from "./components/Landinpage";
import TermCondition from "./components/TermCondition";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/register";

function App() {
  const [searchCity, setSearchCity] = useState("gujrat");
  const handleSearch = (city) => {
    setSearchCity(city);
    console.log("Searched city:", city);
  };

  return (
    <div>
      <Router>
        <Header onSearch={handleSearch} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Landinpage searchCity={searchCity} />}
          />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/services"
            element={<Services searchCity={searchCity} />}
          />
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/termANDconditions" element={<TermCondition />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
