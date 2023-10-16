import Image from 'next/image'
// import {Link as Scrollink} from 'react-scroll';
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
// import BackToTop from '@/components/BackToTop'
import ContactUs from '@/app/components/ContactUS'
import Testimonial from '@/app/components/Testimonial'
import Product from '@/app/components/Product'
import Why from '@/app/components/Why'

export default function Home() {
  return (
    <main className="">
      <section id='hero' className='h-screen xl:h-[90wh] bg-[#b2b7c2]/10 pt-[10px] xl:pt-0'>
        <Hero />
      </section>
      <section id='product' className='h-screen flex items-center bg-[#b2b7c2]/10'>
        <Product />
      </section>
      <section id='about' className=' flex items-center' >
        <About />
      </section>
      <section id='why' className=' flex items-center' >
        <Why/>
      </section>
      <section id='testi' className="flex items-center">
        <Testimonial />
      </section>
      <section id='contact' className='flex items-center'>
        <ContactUs />
      </section>
       
    </main>
  )
}
