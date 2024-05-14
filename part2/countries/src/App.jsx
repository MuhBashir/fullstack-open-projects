import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Country from './components/Country';
import SingleCountry from './components/SingleCountry';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const openWeatherBaseUrl = ``;
const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCountries(response.data);
    });
  }, [search]);

  const returnedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      find countries:{' '}
      <input
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && returnedCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : returnedCountries.length > 1 && returnedCountries.length < 10 ? (
        returnedCountries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))
      ) : returnedCountries.length === 1 ? (
        returnedCountries.map((country) => (
          <SingleCountry country={country} key={country.cca3} />
        ))
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
