import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function HeroSection() {
    return (
        <main>
            <div className="heor_section">
                <div className="hero_text">
                    <h1>Exploer The World, One  Country at a time
                    </h1>
                    <p className='paragraph'>
                        Discover the history, culture, and beauty of every nation. sort, search, and filter  through  countries to find the  the detail  you need.
                    </p>
                    <NavLink to={'/country'} style={{ textDecoration: "none" }}>
                        <button className='btn_explore'>
                            Start  Exploring <FaLongArrowAltRight></FaLongArrowAltRight>
                        </button>
                    </NavLink>
                </div>

                <div className='hero_iamge'>
                    <img src="/image/world.png" alt="World Beauty" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection
