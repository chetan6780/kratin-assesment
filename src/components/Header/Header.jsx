import React, { useState } from 'react'

const Header = () => {

    const [hamburger, setHamburger] = useState("hidden")

    const handleHamburger = () => {
        if (hamburger === "hidden") {
            setHamburger("visible")
        } else {
            setHamburger("hidden")
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-white ">
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 ">
                <div className="flex justify-center align-middle text-3xl text-green-600 font-bold "><a
                    href="./">Helthify</a> 
                </div>
                {/* <!-- Hamburger --> */}
                <svg onClick={handleHamburger} xmlns="http://www.w3.org/2000/svg" id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block text-green-600" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <div className={`${hamburger} w-full md:flex md:items-center md:w-auto justify-center`} id="menu">
                    <ul className="pt-4 text-base text-green-700 md:flex md:pt-0">
                        <li>
                            <a id="home-btn"
                                className="md:p-4 py-2 mr-2 block hover:text-green-900 " href="/">Home</a>
                        </li>
                        <li>
                            <a id="home-btn"
                                className="md:p-4 py-2 mr-2 block hover:text-green-900 " href="/reminder">Reminder</a>
                        </li>
                        <li>
                            <a id="home-btn"
                                className="md:p-4 py-2 mr-2 block hover:text-green-900 " href="/diet">Diet Tracker</a>
                        </li>
                        <li>
                            <a id="home-btn"
                                className="md:p-4 py-2 mr-2 block hover:text-green-900 " href="exercise">Exercise Tracker</a>
                        </li>
                        <li>
                            <a id="watchlist-btn" className="md:p-4 py-2 mr-4 block hover:text-green-900 "
                                href="bmi">BMI</a>
                        </li>
                        <li className='-ml-3'>
                            <a href="/sos" id="login-btn" className="btn-md">
                                <span
                                    className="relative px-5 py-2 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                    SOS
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header