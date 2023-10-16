
import './globals.css'

// import { SearchContextProvider } from '@/components/search'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import BacktoTopBtn from './components/BacktoTopBtn'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className='max-w-[1920px] bg-body mx-auto relative'>
        <Navbar />
        {children}
        <Footer />
        <BacktoTopBtn />
      </body>
    </html>
  )
}