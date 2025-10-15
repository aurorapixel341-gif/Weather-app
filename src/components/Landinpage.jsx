import React from 'react';
import '../App.css'; // make sure this import is here
import WeatherCard from './Weathercard';
import Hourlyforecast from './Hourlyforecast';
import Dayforcast from './Dayforecast';


function LandingPage({ searchCity }) {
  return (
    <div style={{minHeight: "100vh"}} className="app"> {/* add the "app" class here to apply your main CSS */}
    <WeatherCard searchCity={searchCity} />
      <Hourlyforecast searchCity={searchCity} />
 <Dayforcast searchCity={searchCity}/>
 
    </div>
  );
}

export default LandingPage;
