import React from 'react'

const About = () => {
  return (
    <div id="about" name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl">
                Full Stack Engineer, with over 2 years of experience in building web applications and the back-end functionalities of such apps. I have a very vested interest in blockchain technology and creating decentralized applications that increase trust between the user and software that they manage/use. I currently am attending The University of Texas at Dallas pursuing a degree in computer science, with a current GPA of a 3.7. My expected graduation date is the spring of 2024, I am excitedly awaiting for my completion of the degree so I can contribute to the technological progression of society.


            </p>

            <br />

            <p>Acquired Skills: 
                <ul className="px-10">
                    <li className="list-disc" >Frontend Development</li>
                    <li className="list-disc">Backend Developement</li>
                    <li className="list-disc">ReactJS/NextJS</li>
                    <li className="list-disc">Blockchain Technology</li>
                    <li className="list-disc">Object Oriented Programming/Development</li>
                    <li className="list-disc">Web3</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default About