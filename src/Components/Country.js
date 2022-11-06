import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cData from './Favourites';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const [favCountries, setFavCountries] = useState([]);

  const url = `https://restcountries.com/v2/name/${name}`;

  const fetchCountryInfo = async () => {
    const response = await fetch(url);
    const country = await response.json();
    setCountry(country);
  };

  useEffect(() => {
    fetchCountryInfo();
  }, []);

  const addCountry = () => {
    if (localStorage.getItem('fav') == null) {
      localStorage.setItem('fav', '[]');
    }

    var nameArray = JSON.parse(localStorage.getItem('fav'));
    nameArray.push(country[0].name);
    localStorage.setItem('fav', JSON.stringify(nameArray));

    console.log(JSON.parse(localStorage.getItem('fav')));
  };

  const removeCountry = () => {
    var newData = JSON.parse(localStorage.getItem('fav'));
    console.log('before', newData);
    newData = newData.filter((item) => item != country[0].name);
    console.log('after', newData);
    localStorage.setItem('fav', JSON.stringify(newData));

    console.log(JSON.parse(localStorage.getItem('fav')));
  };

  return (
    <>
      <button className="back-icon">
        <Link to="/">
          <span>Back</span>
        </Link>
      </button>
      <section className="country">
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            currencies,
            capital,
            borders,
            callingCodes,
            subregion,
            languages,
          } = c;
          return (
            <article key={numericCode} className="flex">
              <div className="flag">
                <img src={flag} alt="flag" />
              </div>
              <div className="country-details">
                <h2>
                  Name: <span>{name}</span>
                </h2>
                <h5>
                  Capital: <span>{capital}</span>
                </h5>
                <h5>
                  Native Name: <span>{nativeName}</span>
                </h5>
                <h5>
                  Population: <span>{population}</span>
                </h5>
                <h5>
                  region: <span>{region}</span>
                </h5>
                <h5>
                  Currencies: <span>{currencies[1]}</span>
                </h5>
                <h5>
                  Region: <span>{subregion}</span>
                </h5>
                <h5>
                  Calling-codes: <span>{callingCodes}</span>
                </h5>
                <h5>Language: {languages[0].name}</h5>
                <div className="fav-section">
                  <button className="add" onClick={addCountry}>
                    Add To Favourites
                  </button>
                  <button className="remove" onClick={removeCountry}>
                    Remove From Favourites
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
