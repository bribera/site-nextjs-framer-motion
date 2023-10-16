"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const Brand = () => {
  return (
    <div className='xl:pt-16 xl:h-[200px] flex flex-col justify-end'>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 place-items-center
                xl:flex-wrap xl:gap-x-6 xl:justify-between">
            <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
             <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
             <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
            <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
            <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
            <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
            <div className="">
                <Image alt='' src="/brand.png" width={80} height={50}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
