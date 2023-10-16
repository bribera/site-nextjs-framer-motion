'use client'
import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

const testimonialData = [
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Jane Doe',
        job: "Photographe"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Leader Doe',
        job: "Producteur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Gad Doe',
        job: "Journaliste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Jacques Doe',
        job: "Mechanicien"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Edgard Doe',
        job: "Youtubeur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Blanche Doe',
        job: "Banquière"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Leader Black',
        job: "Coiffeur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Gustave Doe',
        job: "Garagiste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Leader Blanchart',
        job: "Garagiste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Alexandre Doe',
        job: "Producteur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille.jpg',
        name: 'Janette Doe',
        job: "Blogueuse"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/images/fille2.jpg',
        name: 'Pierre Doe',
        job: "Vendeur"
    },
]

const TestimonialSlider = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)} 
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once: false, amount:0.6}} 
    className="container mx-auto">
        <Swiper pagination = {{
            clickable:true,
            dynamicBullets:true,
        }}
        modules={[Pagination]}
        className='h-[450px] xl:h-[400px]'
        >
        {
        testimonialData.map((testi, index) => {
            const {message, avatar, name, job} = testi;
            return (
            <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center text-center">
                    <FaQuoteLeft className='text-7xl text-orange-500 mb-6'/>
                    <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">{message}</div>
                    <Image alt='' src={avatar} width={64} height={64} className='rounded-full mb-4'/>
                    <div className="">{name}</div>
                    <div className="">{job}</div>
                </div>
            </SwiperSlide>)
        })
        }
        </Swiper>
    </motion.div>
  )
}

export default TestimonialSlider
