'use client'
import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import Link from 'next/link'

const BacktoTopBtn = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 400) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return( () => {
      window.removeEventListener('scroll', handleScroll)
    }
    )
  }, [])

  return (
    <div>
      <Link 
      // spy={true}
      activeClass="active"
      smooth={true} 
      href="/" 
      className={`${
        !active && "hidden"
      }
      fixed bg-orange-500 
      hover:bg-orange-400 w-12 h-12 right-10 bottom-10 z-10 
      cursor-pointer flex justify-center items-center 
      text-white border-2 border-white rounded-full`}>
        <FaChevronUp  className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BacktoTopBtn
