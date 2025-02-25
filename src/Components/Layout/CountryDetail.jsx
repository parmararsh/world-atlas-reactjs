import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../Api/postApi';
import Loader from './Loader';

function CountryDetail() {
    const params = useParams()

    const [isPanding, startTransition] = useTransition();
    const [country, setCountry] = useState();


    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        })
    }, [])

    if (isPanding) return <Loader></Loader>

    return (
        <div className='card_detail_container'>
            {
                country && (
                    <div className="card_detail_country">
                        <div className="img_card_detail">
                            <img src={country.flags.svg} />
                        </div>
                        <div className="crad_detail_content">
                            <h1 style={{ fontSize: "34px" }}>{country.name.common}</h1>
                            <p><span className='card_description'>Native Names : </span>
                                {
                                    Object.keys(country.name.nativeName)
                                        .map((key) => country.name.nativeName[key].common)
                                        .join(", ")
                                }
                            </p>
                            <p><span className='card_description'>Population : </span> {country.population.toLocaleString()} </p>
                            <p><span className='card_description'>Region : </span>  {country.region} </p>
                            <p><span className='card_description'>Sub Region : </span>  {country.subregion} </p>
                            <p><span className='card_description'>Capital : </span> {country.capital} </p>
                            <p><span className='card_description'>Top Level Domain : </span> {country.tld[0]} </p>
                            <p><span className='card_description'>Borders : </span> {country.borders.join(", ")} </p>

                            <p><span className='card_description'>Currencies : </span>
                                {
                                    Object.keys(country.currencies)
                                        .map((key) => key + " (" + country.currencies[key].name + ")" + " (" + country.currencies[key].symbol + " )")
                                        .join(", ")
                                }
                            </p>
                        </div>
                    </div>
                )

            }
            <NavLink to={"/country"}>
                <button className='btnBackCounry'>Go Back</button>
            </NavLink>
        </div>
    )
}

export default CountryDetail
