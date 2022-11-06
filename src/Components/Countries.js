import React from 'react'
import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom';

const Countries = () => {

    let navigate = useNavigate();
    const [filterParam, setFilterParam] = useState("all")
    const [countries, setCountries] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

      const viewFav = () => {
        navigate("/favourites")
    }

    let url = `https://restcountries.com/v2/${filterParam}`;

    const handleClickAll = () => {
        setFilterParam("all");
    }

    const handleClickAfrica = () => {
        setFilterParam("region/africa");
        console.log("clicked")
    }

    const handleClickAmerica = () => {
        setFilterParam("region/americas");
        console.log("clicked")
    }

    const handleClickAsia = () => {setFilterParam("region/asia")}
    

    const handleClickEurope = () => {
        setFilterParam("region/europe");
        console.log("clicked")
    }

    const handleClickOceania = () => {
        setFilterParam("region/oceania");
        console.log("clicked")
    }

     const fetchCountryData = async() => {
            const response = await fetch(url);
            const countries = await response.json()
            setCountries(countries)
        }
    useEffect(() => {
       fetchCountryData()
    },[])

  return (
    <>
    <section className='filter'>
        <div className="favourites">
            <button className='fav-btn' onClick={viewFav}>Favourites</button>
        </div>
        <form className="form-control">
           Search By Region
         </form>

        <div className='region-filter'>
            <button onClick={handleClickAll}>All</button>
            <button onClick={handleClickAfrica}>Africa</button>
            <button onClick={handleClickAmerica}>America</button>
            <button onClick={handleClickAsia}>Asia</button>
            <button onClick={handleClickEurope}>Europe</button>
            <button onClick={handleClickOceania}>Oceania</button>
        </div>
       
    </section>
 
   <section className='grid'>
    {countries.map((country) => {
        const { numericCode, flag, name, population, region, capital} = country
        return (
            <>
            <Link to={`/countries/${name}`} key={numericCode}>
                <article key={numericCode}>
                    <div>
                        <img src={flag} alt={name} />
                        <div className="details">
                            <h3>{name}</h3>
                            <h5>Population: <span>{population}</span></h5>
                            <h5>region: <span>{region}</span></h5>
                            <h5>Capital: <span>{capital}</span></h5>
                            {/* <button onClick={() => {
                                <Link to={`${name}`}>Learn More</Link>
                            }}></button> */}
                        </div>
                    </div>
                </article>
            </Link>
             </>
        )
    })}
   </section>
   </>
  )
}

export default Countries
