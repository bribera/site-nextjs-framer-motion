'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import {MdKey} from 'react-icons/md'

const Why = () => {
  return (
    <div className='container mx-auto'>
        <div className="md:flex-row xl:gap-5 gap-y-3">
            <div className="">
                <motion.h2 
                    variants={fadeIn('up', 0.2)} 
                    initial="hidden" 
                    whileInView={"show"} 
                    viewport={{once: false, amount:0.6}}
                    className="h2 text-center">Exelence and Quality
                 </motion.h2>
                <motion.p 
                 variants={fadeIn('up', 0.4)} 
                 initial="hidden" 
                 whileInView={"show"} 
                 viewport={{once: false, amount:0.6}}
                className="max-w-[680px] text-center mx-auto">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Sunt cupiditate officiis 
                    placeat atque fugit quos itaque voluptate. 
                    Eius asperiores ipsa tenetur repellendus 
                    temporibus quam quia blanditiis sequi,
                </motion.p>
            </div>
            <motion.div 
             variants={fadeIn('up', 0.6)} 
             initial="hidden" 
             whileInView={"show"} 
             viewport={{once: false, amount:0.6}}
             className="hidden md:flex justify-center mt-6 mb-6 xl:mb-2">
                <Image alt="" src="/images/fille.jpg" width={300} height={300}/>
            </motion.div>
            <motion.div 
             variants={fadeIn('up', 0.8)} 
             initial="hidden" 
             whileInView={"show"} 
             viewport={{once: false, amount:0.4}}className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gpa-x-[30px]">
                <div className="flex flex-col items-center text-center max-x-[160px]
                xl:max-w-none p-2 xl:p-0">
                    <MdKey className='text-[38px] text-orange-500 mb-4'/>
                    <h3 className="h3">Aply quickly and efficiently</h3>
                    <p className="hidden xl:flex">
                        Lorem, ipsum dolor sit amet 
                         voluptatem at ea nihil odit quisquam!
                    </p>
                </div>
                <div className="flex flex-col items-center text-center max-x-[160px]
                xl:max-w-none p-2 xl:p-0">
                    <MdKey className='text-[38px] text-orange-500 mb-4'/>
                    <h3 className="h3">Sign quickly with proficience</h3>
                    <p className="hidden xl:flex">
                        Lorem, ipsum dolor sit amet 
                         voluptatem at ea nihil odit quisquam!
                    </p>
                </div>
                <div className="flex flex-col items-center text-center max-x-[160px]
                xl:max-w-none p-2 xl:p-0">
                    <MdKey className='text-[38px] text-orange-500 mb-4'/>
                    <h3 className="h3">Examination quickly and grace</h3>
                    <p className="hidden xl:flex">
                        Lorem, ipsum dolor sit amet 
                         voluptatem at ea nihil odit quisquam!
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Why
