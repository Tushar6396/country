import React from 'react';
import { useNavigate } from 'react-router-dom';
import Country from './Country';
import favCountries from './Country';

const Favourites = () => {
  var favData = JSON.parse(localStorage.getItem('fav'));
  console.log('favData', favData);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  console.log(favCountries);

  return (
    <div>
      <button className="back-icon" onClick={handleBack}>
        <span>Back</span>
      </button>
      <ul>
        {favData.map((item, i) => (
          <li key={i} className="fav-country-list">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
