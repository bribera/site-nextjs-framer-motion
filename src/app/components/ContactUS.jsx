'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/variants'

const ContactUS = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex  flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
              variants={fadeIn('right', 0.2)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once: false, amount:0.6}} 
              className="h2">
                Lorem ipsum dolor sit amet, consectetur.
              </motion.h2>
              <motion.p
              variants={fadeIn('right', 0.4)} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once: false, amount:0.8}} 
              className="mb-10 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cupiditate sunt accusamus voluptatum nihil quaerat, 
                consectetur libero tempore natus voluptatem et reiciendis 
                Iure, qui.
              </motion.p>
              <motion.div
                variants={fadeIn('right', 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount:0.6}} 
                className="flex gap-x-3 pb-4 justify-center xl:justify-start"
                >
                <button className='btn'>Google Play</button>
                <button className='btn1'>App Store</button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div 
        variants={fadeIn('up', 0.8)} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount:0.4}} 
        className="flex flex-1 justify-center order-1 md:order-none">
          <Image alt='' src="/images/fille2.jpg" width={400} height={400}/>
        </motion.div>
    </div>
  )
}

export default ContactUS
