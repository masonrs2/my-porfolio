import React from 'react'

const About = () => {
  return (
    <div id="about" name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 pt-80 md:pt-0">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About
                </p>
            </div>
            <p className="text-xl">
            I am a Full-Stack Software Engineer with over three years of experience in developing web applications and backend systems. I have interned as a Software Engineer at Northwestern Mutual and Skyllful, where I focused on backend development. Currently, I am pursuing a degree in Computer Science at the University of Texas at Dallas, with an expected graduation date in Spring 2024.


            </p>

            <br />

            <p>Acquired Skills: 
                <ul className="px-10">
                    <li className="list-disc" >Frontend Development</li>
                    <li className="list-disc">Backend Developement</li>
                    <li className="list-disc">ReactJS/NextJS</li>
                    <li className="list-disc">Agile Methodologies</li>
                    <li className="list-disc">Object Oriented Programming/Development</li>
                    <li className="list-disc">Software Development Life Cycle</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default About