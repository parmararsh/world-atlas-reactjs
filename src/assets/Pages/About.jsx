import React from 'react'
import countrys from "../../Api/CountryData.json"

function About() {
  return (
    <section className='About'>
      <div className="about_container">
        <h1 className='about_title'>Here Are The Intresting Facts
          <br /> We're Proud Of </h1>

        <div className="cards_continer">
          {
            countrys.map((country, key) => {
              return (<div className="cards" key={country.id}>
                <div className="card_content">
                  <p className='card_titile' style={{ fontSize: "32px", fontStyle: "normal", fontWeight: 900, marginBottom: 12, lineHeight: "40px" }}>{country.countryName}</p>

                  <p><span className='card_description'>Capital : </span> {country.capital} </p>

                  <p><span className='card_population'>Population : </span> {country.population} </p>
                  
                  <p>
                    <span className='card_interesting_fact'>Interesting Fact : </span>
                    {country.interestingFact}
                  </p>

                </div>
              </div>)
            })}
        </div>
      </div>
    </section>
  )
}

export default About
