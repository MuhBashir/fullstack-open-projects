import { useState } from 'react';
import SingleCountry from './SingleCountry';
const Country = ({ country }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <p>
      {country.name.common}{' '}
      <button onClick={handleShow}>{show ? 'not to show' : 'show'}</button>
      {show && <SingleCountry country={country} />}
    </p>
  );
};

export default Country;
