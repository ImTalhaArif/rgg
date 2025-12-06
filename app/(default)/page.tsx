export const metadata = {
  title: 'Reliance Global Group',
  description: '',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import BookingAlert from '@/components/bookingsAlert'


export default function Home() {
  return (
    <>
    
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
