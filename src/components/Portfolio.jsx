import React from 'react'
import bank from '../assets/bank.jpeg'
import reactWeb from '../assets/reactWeb.png'
import netflix from '../assets/netflix-clone.png'
import moviedb from '../assets/moviedb.jpeg'
import coinSearch from '../assets/coinSearch.png'
import news from '../assets/news.jpeg'
import businessCard from '../assets/business-card.jpeg'
import blog from '../assets/blog.jpeg'


const Portfolio = () => {

    //https://business-card-ecru.vercel.app/

    const portfolios = [
        {
            id: 1,
            src: coinSearch,
            site: "https://coin-search-v2-firebase.vercel.app/",
            code: "https://github.com/masonrs2/coin-search-v2-firebase",
        },
        {
            id: 2,
            src: moviedb,
            site: "https://moviedb-app-one.vercel.app/",
            code: "https://github.com/masonrs2/moviedb-app-nextjs13",
        },
        {
            id: 3,
            src: businessCard,
            site: "https://business-card-ecru.vercel.app/",
            code: "https://github.com/masonrs2/business-card",
        },
        {
            id: 4,
            src: news,
            site: "https://news-api-beige.vercel.app/",
            code: "https://github.com/masonrs2/bloomberg-redesign-nextjs13",
        },
        {
            id: 5,
            src: blog,
            site: "https://blog-supabase-nextjs13.vercel.app/",
            code: "https://github.com/masonrs2/blog-supabase-nextjs13",
        },
        // {
        //     id: 5,
        //     src: netflix,
        //     site: "https://netflix-clone-49185.web.app/",
        //     code: "https://github.com/masonrs2/netflix-clone",
        // },
        

        {
            id: 6,
            src: bank,
            site: "https://lingering-glade-1937.on.fleek.co/",
            code: "https://github.com/masonrs2/modern-bank-app",
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
                portfolios.map(({id, src, site, code}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <div className="">
                            <a href={site} rel="noreferrer" target="_blank">
                                <img src={src} alt=""  className="rounded-md duration-200 hover:scale-105 w-[310px] h-[175px] " />
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