import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants/constants'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4" >
        <div>
            <a href="#home">
                <h1 className="text-5xl font-signature ml-2 cursor-pointer"> 
                    Mason
                </h1>
            </a>
        </div>

        <ul className="hidden md:flex">

            {navLinks.map(({id, link, href}) => (
                <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize"> <a href={href} > {link} </a> 
                </li>
            ))}
        </ul>

        <div  onClick={() => setNav(!nav)} className="cursor-pointer pr-3 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

            {navLinks.map(({id, link, href}) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"><a href={href} > {link} </a>
                </li>
            ))}
        </ul>
        )}

        
    </div>
  )
}

export default Navbar