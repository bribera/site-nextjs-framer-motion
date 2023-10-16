'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/variants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-20 z-20'>
      <div className="container mx-auto mb-24">
        <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.6}}
            className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div className="">
            <Link href="/">
              <div className="text-orange-500 text-5xl cursor-pointer">Me</div>
            </Link>
          </div>
          <div className="uppercase">
            <Link href="/">
              Home
            </Link>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="">
              Phone
            </div>
            <div className="">
              Email
            </div>
          </div>
          <div className="">3</div>
          <div className="">4</div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
