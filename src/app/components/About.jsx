'use client'
import React from 'react'
import CountUp from 'react-countup'
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar
} from 'react-icons/md'
import Image from 'next/image'
import { inView, motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const About = () => {
  return (
    <div >
      <div className="container mx-auto">
        <div className="xl:flex-row xl:justify-between flex flex-col items-center">
          <motion.div 
           variants={fadeIn('up', 0.2)} 
           initial="hidden" 
           whileInView={"show"} 
           viewport={{once: false, amount:0.6}}
          className="flex-1 mb-8 xl:mb-0">
              <Image alt='' 
              className='rounded-[20px]' 
              width={600} 
              height={400}
              src="/images/fille2.jpg"
            />
          </motion.div>
          
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2 
               variants={fadeIn('up', 0.4)} 
               initial="hidden" 
               whileInView={"show"} 
               viewport={{once: false, amount:0.6}}
              className='h2'>Car services simplified
              </motion.h2>
              <motion.p 
               variants={fadeIn('up', 0.6)} 
               initial="hidden" 
               whileInView={"show"} 
               viewport={{once: false, amount:0.6}}
              className="mb-[42px]">
                Lorem ipsum dolor sit amet. Facilis veritatis repellendus odit, distinctio repellat reprehenderit.
              </motion.p>

              <motion.div 
               variants={fadeIn('up', 0.4)} 
               initial="hidden" 
               whileInView={"show"} 
               viewport={{once: false, amount:0.2}}
              className="flex items-center gap-x-8 mb-12">
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className='text-5xl text-orange-500'/>
                  <div className="text-3xl font-black mb-2" >
                    {
                      inView? (
                        <CountUp start={0} end={50} duration={3} delay={1}/>
                      ) : null
                    }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    product <br /> types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className='text-5xl text-orange-500'/>
                  <div className="text-3xl font-black mb-2" >
                    {
                      inView? (
                        <CountUp start={0} end={135} duration={3} delay={1}/>
                      ) : null
                    }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    rental <br /> otliets
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className='text-5xl text-orange-500'/>
                  <div className="text-3xl font-black mb-2" >
                    {
                      inView? (
                        <CountUp start={0} end={25} duration={3} delay={1}/>
                      ) : null
                    }
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              <motion.button 
               variants={fadeIn('up', 1)} 
               initial="hidden" 
               whileInView={"show"} 
               viewport={{once: false, amount:0.6}}
              className='hidden xl:block bg-accent hover:bg-accent-hover 
              rounded-[10px] w-full h-16 font-medium tracking-[2px] text-white text-[13px]
              max-w-[184px]'>
                See all products
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
