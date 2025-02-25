
import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../../Api/postApi';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Layout/Loader';
import SearchFilter from '../../Components/Ui/SearchFilter';

function Country() {

  const [isPanding, startTransition] = useTransition();
  const [countrys, setCountry] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  // console.log(filter)

  const searchCountry = (Country) => {
    if (search) {
      return Country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return Country
  }

  const filterRegion = (Country) => {
    if (filter === "All") return Country
    return Country.region === filter;
  }

  // console.log(countrys)
  const FilterCountries = countrys.filter((Country) => searchCountry(Country) && filterRegion(Country))

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data)
    })
  }, [])


  if (isPanding) return <Loader></Loader>
  return (

    <section className='country_components'>
      <div className='cards_country'>
        <SearchFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} countrys={countrys} setCountry={setCountry}></SearchFilter>
        {
          FilterCountries.map((curentCountry, index) => {
            const { name, capital, region, flags, population } = curentCountry;
            return (
              <div className="cards_container" key={index}>
                <div className="cards_content_country">
                  <img src={flags.svg} alt={flags.alt} />
                  <h1 className='card-title'>{name.common}</h1>

                  <div className="conutry_info">
                    <p><span className='card_description'>Population : </span> {population.toLocaleString()} </p>
                    <p><span className='card_description'>Region : </span>  {region} </p>
                    <p><span className='card_description'>Capital : </span> {capital} </p>

                    <NavLink to={`/country/${name.common}`}>
                      <button className='btnCountry'>Read More </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


    </section >
  )
}

export default Country
