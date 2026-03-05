import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GlobalGrid from '@/components/GlobalGrid'
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Travel Master - The Event Travel Specialist',
  description: 'Book your bus seats for the biggest concerts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white relative">
        {/* Ye hamesha piche rahega */}
        <GlobalGrid />
        
        {/* Content wrapper must be relative and have no background */}
        <div className="relative z-10 bg-transparent">
          {children}
        </div>
      </body>
    </html>
  )
}