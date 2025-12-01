"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "HOME", href: "#" },
    { label: "SMS", href: "#", hasDropdown: true },
    { label: "VOICE", href: "#", hasDropdown: true },
    { label: "WHATSAPP BUSINESS API", href: "#" },
    { label: "PRICING", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "LOGIN", href: "#", hasDropdown: true },
    { label: "SIGN UP", href: "#" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Only */}
          <div className="flex items-center">
            <Image
              src="/images/logo.jpeg"
              alt="NETRIVYA Logo"
              width={40}
              height={40}
              className="rounded"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              Details
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              For Registration
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition">
              Blog
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="text-teal-600 hover:text-teal-700 font-semibold transition">Login</button>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Full Page Style */}
        {isMenuOpen && (
          <nav className="md:hidden fixed inset-0 h-screen w-full bg-teal-600 text-white p-6 z-40 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              {/* Logo in mobile menu */}
              <Image
                src="/images/logo.jpeg"
                alt="NETRIVYA Logo"
                width={40}
                height={40}
                className="rounded"
              />
              
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1 flex-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 hover:bg-white/10 text-white transition duration-200 text-sm font-medium"
                >
                  {item.label}
                  {item.hasDropdown && <span className="ml-2 text-xs">▼</span>}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* Dark Overlay when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}
