import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
    const [show, setShow] = useState()
    const handleButtonToggle = () => {
        return setShow(!show)
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <h1><NavLink to='/'><span style={{color:"red"}}>World</span> Atlast</NavLink></h1>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <div className="navbar">
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li><NavLink to='/country'>Country</NavLink></li>

                            <div className="hum_burg">
                                <NavLink>
                                    <button className='btnhumBurger' onClick={handleButtonToggle}><GiHamburgerMenu></GiHamburgerMenu></button>
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                </nav>

            </div>

        </header>
    )
}

export default Header
