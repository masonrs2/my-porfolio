import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiOutlineMail, HiOUtlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import moviedb from '../assets/moviedb.jpeg'
import coinSearch from '../assets/coinSearch.png'
import news from '../assets/news.jpeg'
import businessCard from '../assets/business-card.jpeg'
import ecommerce from '../assets/ecommerce.jpeg'
import nbaStats from '../assets/nbaStats.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import hardhat from '../assets/hardhat.svg'
import sql from '../assets/sql.png'
import mongodb from '../assets/mongodb.png'
import supabase from '../assets/supabase.png'

export  const technologies = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next JS',
      style: 'shadow-white'
    },
    {
      id: 7,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-400'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 9,
      src: hardhat,
      title: 'Hardhat',
      style: 'shadow-yellow-300'
    },
    {
      id: 10,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-600'
    },
    {
      id: 11,
      src: sql,
      title: 'SQL',
      style: 'shadow-blue-700'
    },
    
    {
      id: 11,
      src: supabase,
      title: 'Supabase',
      style: 'shadow-green-300'
    },
  ]

export const links = [
    {
        id: 1,
        child: (
            <> 
            LinkedIn <FaLinkedin size={30} /> 
            </>
        ),

        href: 'https://www.linkedin.com/in/mason-sepulveda/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <> 
            Github <FaGithub size={30} /> 
            </>
        ),

        href: 'https://github.com/masonrs2',
        
    },
    {
        id: 3,
        child: (
            <> 
            Mail <HiOutlineMail size={30} /> 
            </>
        ),

        href: 'mailto:masonsepulveda@gmail.com',
        
    },
    {
        id: 4,
        child: (
            <> 
            Resume <BsFillPersonLinesFill size={30} /> 
            </>
        ),

        href: '/resume.pdf',
        style: 'rounded-br-md',
        download: true,
        
    },
]

export const portfolios = [
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

  export const navLinks = [
    {
        id: 1,
        link: 'home',
        href: "#home",
    },
    {
        id: 2,
        link: 'about',
        href: "#about",
        
    },
    {
        id: 3,
        link: 'portfolio',
        href: "#portfolio",
    },
    {
        id: 4,
        link: 'experience',
        href: "#experience",
    },
    {
        id: 5,
        link: 'contact',
        href: "#contact",
    },
]