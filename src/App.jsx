import { useState } from 'react';
import { METEO_API_URL } from './api';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import Search from './components/search/search';


function App() {
  const [currentWeather,setCurrentWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const cityCode = searchData.value
    const CurrentWeatherFetch = fetch(`${METEO_API_URL}/places/${cityCode}/forecasts/long-term`)
    Promise.all([CurrentWeatherFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      setCurrentWeather(weatherResponse);
    })
    .catch((err) => console.log(err))
  }
  console.log(currentWeather);
  return (
    
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentWeather && <Forecast data={currentWeather} />}
    </div>

  );
}

export default App;
