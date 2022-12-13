import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            site: "https://late-sunset-9799.on.fleek.co/",
            code: "https://github.com/masonrs2/frontend-raffle-dApp",
        },
        {
            id: 2,
            src: reactParallax,
            site: "https://divine-cake-2903.on.fleek.co/",
            code: "https://github.com/masonrs2/random-meme-generator",
        },
        {
            id: 3,
            src: navbar,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
        },
        {
            id: 4,
            src: reactSmooth,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
            
        },
        {
            id: 5,
            src: installNode,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
        },
        {
            id: 6,
            src: reactWeather,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
        }
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id, src, site, code}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt=""  className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center ">
                            <button href="" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                <a href={site} rel="noreferrer" target="_blank" >
                                    Site
                                </a>
                            </button>
                            
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                <a href={code} rel="noreferrer" target="_blank">
                                    Code 
                                </a>
                            </button>
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