'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User, ShoppingBag } from 'lucide-react'
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/studio', label: 'Studio' },
    { href: '/events', label: 'Best Events' },
    { href: '/news', label: 'News' },
    { href: '/pages', label: 'All Pages' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
         <Link href="/" className="flex items-center flex-shrink-0 group">
  <Image
    src="/travel-logo.png"
    alt="TravelMaster Logo"
    width={150}
    height={40}
    className="object-contain"
  />
</Link>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-xs font-bold uppercase tracking-widest hover:text-white/70 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-6 text-white">
            <button className="hover:text-white/70 transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="relative hover:text-white/70 transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 pb-8 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4 px-6 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-bold uppercase tracking-widest py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-6 mt-4">
                 <User className="text-white" size={24} />
                 <ShoppingBag className="text-white" size={24} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}