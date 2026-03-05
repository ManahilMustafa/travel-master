import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FeaturedConcerts from '../components/FeaturedConcerts'
import TabSection from '../components/TabSection'
import NewsletterSection from '../components/NewsletterSection'

export default function Home() {
  // Is variable ko hum style prop mein use karenge
  const fontStyle = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    <div style={fontStyle} className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero, FeaturedConcerts aur TabSection ab is div ke andar hain 
          isliye unpar font apply hona chahiye */}
      <main>
        <Hero />
        <FeaturedConcerts />
        <TabSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}