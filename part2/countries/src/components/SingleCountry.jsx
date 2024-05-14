import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleCountry = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data: ', error);
      });
  }, [country]);

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />
      <h4>weather in {country.capital}</h4>
      <p>temperature {weatherData.main.temp} Celsius</p>
      <div>
        {weatherData.weather.map((weather) => (
          <div key={weather.id}>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
            />
          </div>
        ))}
      </div>
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default SingleCountry;
