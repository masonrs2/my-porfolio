import React from 'react'
import moviedb from '../assets/moviedb.jpeg'
import coinSearch from '../assets/coinSearch.png'
import news from '../assets/news.jpeg'
import businessCard from '../assets/business-card.jpeg'
import ecommerce from '../assets/ecommerce.jpeg'
import nbaStats from '../assets/nbaStats.png'

const Portfolio = () => {

  //https://business-card-ecru.vercel.app/

  const portfolios = [
    {
      id: 1,
      src: nbaStats,
      site: "https://nba-stats-frontend.vercel.app/",
      code: "https://github.com/masonrs2/RESTful-Django-React-NBA-Stats-App",
    },
    {
      id: 2,
      src: ecommerce,
      site: "https://fullstack-ecommerce-app-nextjs.vercel.app/Market",
      code: "https://github.com/masonrs2/fullstack-ecommerce-app-nextjs",
    },
    {
      id: 3,
      src: coinSearch,
      site: "https://coin-search-v2-firebase.vercel.app/",
      code: "https://github.com/masonrs2/coin-search-v2-firebase",
    },
    {
      id: 4,
      src: moviedb,
      site: "https://moviedb-app-one.vercel.app/",
      code: "https://github.com/masonrs2/moviedb-app-nextjs13",
    },
    {
      id: 5,
      src: businessCard,
      site: "https://business-card-ecru.vercel.app/",
      code: "https://github.com/masonrs2/business-card",
    },
    {
      id: 6,
      src: news,
      site: "https://news-api-beige.vercel.app/",
      code: "https://github.com/masonrs2/bloomberg-redesign-nextjs13",
    },

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
            portfolios.map(({ id, src, site, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="">
                  <a href={site} rel="noreferrer" target="_blank">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 w-[310px] h-[175px] " />
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
