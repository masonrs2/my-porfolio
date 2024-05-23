import React from 'react'
import myPic from '../assets/image0.jpg'
import {BsArrowReturnRight} from 'react-icons/bs'

const Home = () => {
  return (
    <div id="home" name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
        <div className="max-w-screen-lg mx-auto flex flex-col gap-8 items-center justify-center h-full pt-80 md:pt-0 px-4 md:flex-row text-white">
            <div className="flex flex-col justify-center h-full">
            
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
                I have aspirations of obtaining employment as a Full-Stack developer/engineer. Simultaneously I have a very vested interest in blockchain technology and creating decentralized applications that increase trust between the user and software that they manage/use.
             </p>

                <div>
                    <a href="#portfolio" > 
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                                Portfolio 
                            <span className="group-hover:rotate-90 duration-300 ml-2 mt-1 ">
                                <BsArrowReturnRight />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            
            <div>
                <img src={myPic} alt="my profile" className="rounded-3xl mx-auto w-[300px] md:w-1/2 object-contain"  />
            </div>
        </div>
    </div>
  )
}

export default Home