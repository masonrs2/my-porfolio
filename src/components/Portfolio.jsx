import React from 'react'
import { portfolios } from '../constants/constants'

const Portfolio = () => {

  //https://business-card-ecru.vercel.app/

  return (
    <div id="portfolio" name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {
            portfolios.map(({ id, src, site, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="h-48 w-full overflow-hidden">
                  <a href={site} rel="noreferrer" target="_blank">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 object-cover w-full h-full" />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href={site} rel="noreferrer" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                    Site
                    <button href="" target="_blank" >
                    </button>
                  </a>

                  <a href={code} rel="noreferrer" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                    <button >
                    </button>
                  </a>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Portfolio
