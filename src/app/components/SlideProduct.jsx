'use client'
import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'

const product = [
    {
    type: "Hatchback",
    name: "Ford Focus",
    price: "29",
    image: "/images/fille.jpg",
    info:[ 
        {
            icon:'/images/band.png',
            text:'Manual',
        },
        {
            icon:'/images/band.png',
            text:'3 seat',
        },
        {
            icon:'/images/band.png',
            text:'Manual',
        },
        {
            icon:'/images/band.png',
            text:'Gas',
        },
        {
            icon:'/images/band.png',
            text:'1600 HP',
        },
        {
            icon:'/images/band.png',
            text:'Front',
        },
    ]
    },
    {
    type: "Bathman",
    name: "Fast Ligne",
    price: "40",
    image: "/images/fille2.jpg",
    info:[ 
        {
            icon:'/images/band.png',
            text:'Automate',
        },
        {
            icon:'/images/band.png',
            text:'4 seat',
        },
        {
            icon:'/images/band.png',
            text:'Manual',
        },
        {
            icon:'/images/band.png',
            text:'Gap',
        },
        {
            icon:'/images/band.png',
            text:'2000 HP',
        },
        {
            icon:'/images/band.png',
            text:'back',
        },
    ]
    },
    {
    type: "SoftAir",
    name: "Medium",
    price: "69",
    image: "/images/fille.jpg",
    info:[ 
        {
            icon:'/images/band.png',
            text:'Manual',
        },
        {
            icon:'/images/band.png',
            text:'6 seat',
        },
        {
            icon:'/image/brand.png',
            text:'Pratique',
        },
        {
            icon:'/images/band.png',
            text:'Gasoil',
        },
        {
            icon:'/images/band.png',
            text:'3000 HP',
        },
        {
            icon:'/images/band.png',
            text:'Front',
        },
    ]
    }
]
const SlideProduct = () => {
  return (
    <div className='container mx-0'>
      <Swiper
        breakpoints={{
            350:{slidesPerView:1, spaceBetween:15},
            700:{slidesPerView:2, spaceBetween:32},
            1260:{slidesPerView:3, spaceBetween:32},
        }}
        >
            {
                product.map((car, index) => {
                    return <SwiperSlide key="index">
                            <motion.div 
                            variants={fadeIn('up', 0.4)} 
                            initial="hidden" 
                            whileInView={"show"} 
                            viewport={{once: false, amount:0.6}} 
                            className="max-w-[390px] mx-auto sm:mx-0 bg-white ">
                                <Image src={car.image} alt='' width={580} height={284}/>
                                <div className="flex justify-between p-4">
                                    <div className="">
                                        <div className="text-[13px] text-secondary uppercase">{car.type}</div>
                                        <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                                        <h3 className="mb-5 text-orange-500 font-semibold uppercase">{car.price}/day</h3>
                                    </div>
                                    <div className="flex gap-x-2  text-orange-500 h-max">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-5 ">
                                    {
                                        car.info.map((item, index) => {
                                            return <div className="flex flex-col items-center" key={index}>
                                                    <div className="bg-slate-400 w-5 h-5 rounded-full flex justify-center items-center">
                                                        <Image alt='' src={item.icon} width={24} height={24}/>
                                                    </div>
                                                    <div className="text-[12px] uppercase">
                                                        {item.text}
                                                    </div>
                                            </div>
                                        })
                                    }
                                </div>
                                <button className="btn btn-accent btn-lg mb-5">See details</button>
                            </motion.div> 
                        </SwiperSlide>
                })
            }
      </Swiper>
    </div>
  )
}

export default SlideProduct
