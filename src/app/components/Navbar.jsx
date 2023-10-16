/* eslint-disable react/no-unescaped-entities */
'use client'
// import { Link } from 'react-scroll';
import Link  from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import {BiMenuAltRight, BiX} from 'react-icons/bi'
import {useMediaQuery} from 'react-responsive'
// import { SearchContext } from './search';
// import About from '@/components/About'
// import BackToTop from '@/components/BackToTop'
// import ContactUs from '@/components/ContactUS'
// import Testimonial from '@/components/Testimonial'
// import Product from '@/components/Product'
// import Why from '@/components/Why'


const Navbar = () => {

  // const {setSearchActive}= useContext(SearchContext)
    const [nav, setNav] = useState(false)
    const [header, setHeader] = useState(false)

    const handleClick =() => {
        setNav(!nav)
    }

    const deskMode = useMediaQuery({
      query: '(min-with: 1300px)'
    })

    useEffect(() => {

      const handScroll = () => {
          if (window.scrollY > 40) {
          setHeader(true);
        }else{
          setHeader(false);
        }

        // if(window.scrollY > 800) {
        //   setSearchActive(true)
        // } else {
        //   setSearchActive(false)
        // }
      }

      window.addEventListener('scroll', handScroll)

      return () => { 
        window.removeEventListener('scroll', handScroll)
      }
     
    },[])
    
    console.log(header)

  return (
    <header  className={`${header ? "bg-orange-100 shadow-md py-2"
                                    : 
                                    "bg-transparent shadow-none py-4"}
                                    fixed w-full mx-auto z-20 transition-all duration-300  `}>
      <div className="xl:container flex flex-col mx-auto xl:flex-row xl:justify-between xl:items-center  px-2">
        
        <div className="flex justify-between items-center">
          
          <div className="">
            <Link href='/'>
                <h4 className="text-5xl font-extrabold text-orange-600">Me</h4>
            </Link>
          </div>
          <button className="xl:hidden cursor-pointer" onClick={handleClick}>
            {nav ? 
                <BiX size={50} /> 
                : 
                <BiMenuAltRight size={50} />}
          </button>
        </div>
        <nav className={`${ nav ? 
            'max-h-max py-8 px-4 xl:py-0 bg-white xl:px-0 transition duration-300 text-center' 
            : 
            'max-h-0 xl:max-h-max'
            }
            flex flex-col justify-center items-center font-bold 
            bg-body xl:font-medium w-full uppercase 
            gap-y-6 xl:flex-row xl:w-max overflow-hidden xl:gap-x-8
            xl:h-max xl:pb-0 xl:bg-transparent xl:text-[15px]  xl:normal-case text-sm  xl:text-left transition-all duration-150`}>
             
                  <Link href="/" 
                    spy={true}
                    className="cursor-pointer hover:w-full hover:text-center hover:rounded-lg hover:bg-orange-400 hover:text-white"
                    smooth={deskMode}
                    >
                    Home
                  </Link>
             
                  <Link href='/#about' 
                     spy={true}
                     smooth={deskMode}
                    activeClass="active" 
                    className="cursor-pointer ">
                    About
                  </Link>
               
                  <Link href='/#ContactUS'
                      smooth={deskMode} 
                     spy={true}
                    activeClass="active" 
                    className="cursor-pointer ">
                    Contact us
                  </Link>
                
                  <Link href="/#About" className='cursor-pointer '>
                  BlOG
                  </Link>

                  <Link href='/#ContactUS' 
                     spy={true}
                    activeClass="active" 
                    smooth={deskMode}
                    className="cursor-pointer bg-primary text-white py-2 px-5 rounded-lg hover:bg-slate-800">
                    S ' inscrire
                  </Link>
                  <Link href='/#About' 
                     spy={true}
                    activeClass="active"
                    smooth={deskMode} 
                    className="cursor-pointer border-[3px] border-solid border-primary py-2 px-5 rounded-lg hover:bg-primary hover:text-white">
                    Connecter
                  </Link>
                  
          </nav>
      </div>
    </header>
  )
}

export default Navbar
