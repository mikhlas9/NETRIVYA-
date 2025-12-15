"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)

  const menuItems = [
    { label: "HOME", href: "/" },
    { 
      label: "SMS", 
      href: "#", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Promotional SMS", href: "/promotional-sms" },
        { label: "Transactional SMS", href: "/transactional-sms" },
        { label: "Alert SMS", href: "/alert-sms" }
      ]
    },
    { 
      label: "VOICE", 
      href: "#", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Voice API", href: "/voice-api" },
        { label: "Voice OTP", href: "/voice-otp" },
        { label: "Promotional Voice Call", href: "/promotional-voice-call" }
      ]
    },
    { label: "WHATSAPP BUSINESS API", href: "/whatsapp-business-api" },
    { label: "PRICING", href: "/pricing" },
    { label: "CONTACT US", href: "/contact" },
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
          <nav className="hidden md:flex gap-6 items-center">
            {menuItems.slice(0, -2).map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-teal-600 transition text-sm font-medium flex items-center gap-1 py-2 cursor-pointer"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                >
                  {item.label}
                  {item.hasDropdown && <span className="text-xs">▼</span>}
                </a>
                
                {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-white shadow-lg rounded-lg py-2 min-w-[220px] border border-gray-200">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 text-sm cursor-pointer"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold transition text-sm cursor-pointer">
              LOGIN
            </a>
            <a
              href="#"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition text-sm cursor-pointer"
            >
              SIGN UP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              
              <button onClick={() => setIsMenuOpen(false)} className="text-white cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1 flex-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown && item.dropdownItems ? (
                    <>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                        className="w-full text-left px-4 py-3 hover:bg-white/10 text-white transition duration-200 text-sm font-medium flex items-center justify-between cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <span className={`text-xs transition-transform ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <div className="bg-white/10 py-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-8 py-2 text-white/90 hover:bg-white/10 text-sm cursor-pointer"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 hover:bg-white/10 text-white transition duration-200 text-sm font-medium cursor-pointer"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
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