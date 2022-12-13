import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies that I've worked with</p>
            </div>

        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3">
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
        </div>
    </div>
  )
}

export default Experience