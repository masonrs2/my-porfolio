import React from 'react'
import { technologies } from '../constants/constants' 

const Experience = () => {

  return (
    <div
      name="experience" id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-[600px] md:pt-[400px] flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies that I've worked with</p>
        </div>

        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Experience