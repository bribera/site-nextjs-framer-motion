'use client'
import Image from 'next/image'
import React from 'react'
import {motion, easeInOut} from "framer-motion"
import {fadeIn} from '@/variants'
const Hero = () => {
  return (
    <div className='container mx-auto h-full xl:pt-10'>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
        <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.6}} 
            className='h1'>Explore the Finest <span className="text-orange-500">Global</span>{' '} 
          Offers
          </motion.h1>
          <motion.p 
            variants={fadeIn('down', 0.4)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.6}} 
            className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-18">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. Rem aliquam numquam iure ab.
          </motion.p>
          <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.8}} 
            className="flex gap-x-3 justify-center xl:justify-start">
            <button className='btn'>Google Play</button>
            <button className='btn1'>App Store</button>
          </motion.div>
        </div>
        <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.6}} 
          className="relative w-full h-full left-[0%] mt-[20px] md:max-h-[70vh] max-h-[50vh] xl:max-w-[960px] xl:w-[600px] xl:left-[150px] xl:max-h-[442px] xl:-right-[140px] min-[1680px] xl:top-[0px] ">
          <Image src='/images/fille2.jpg' fill  alt='' priority style={{objectFit: 'contain'}} />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
