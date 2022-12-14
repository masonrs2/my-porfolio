import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import memeGenerator from '../assets/meme-generator.jpeg'
import defiLottery from '../assets/defi-lottery.jpeg'
import bank from '../assets/modern-bank.jpeg'
import zillow from '../assets/zillow.png'
import aave from '../assets/aave-flashloan.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: defiLottery,
            site: "https://late-sunset-9799.on.fleek.co/",
            code: "https://github.com/masonrs2/frontend-raffle-dApp",
        },
        {
            id: 2,
            src: bank,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
        },
        {
            id: 3,
            src: memeGenerator,
            site: "https://divine-cake-2903.on.fleek.co/",
            code: "https://github.com/masonrs2/random-meme-generator",
        },
        {
            id: 4,
            src: zillow,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/real-estate-dapp",
            
        },
        {
            id: 5,
            src: aave,
            site: "https://github.com/masonrs2/collateralized-borrow-aave",
            code: "https://github.com/masonrs2/collateralized-borrow-aave",
        },
        {
            id: 6,
            src: reactWeather,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
        }
    ]

  return (
    <div id="portfolio" name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id, src, site, code}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <div className="">
                            <img src={src} alt=""  className="rounded-md duration-200 hover:scale-105 w-[310px] h-[175px]" />
                        </div>
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