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
    { label: "SIGN UP", href: "/signup" },
  ]

  // Separate menu items for left nav and right auth
  const leftNavItems = menuItems.filter(item => 
    item.label !== "LOGIN" && item.label !== "SIGN UP" && item.label !== "CONTACT US"
  )
  // Order: LOGIN, SIGN UP, CONTACT US (CONTACT US at the right end)
  const rightNavItems = [
    ...menuItems.filter(item => item.label === "LOGIN"),
    ...menuItems.filter(item => item.label === "SIGN UP"),
    ...menuItems.filter(item => item.label === "CONTACT US")
  ]

  return (
    <header className="sticky top-0 z-50 py-4">
      <div className=" px-2 sm:px-4 lg:px-6">
        {/* White Rounded Pill Navbar */}
        <div className="bg-white rounded-full shadow-xl border border-gray-100 px-4 lg:px-6 py-4 relative">
          <div className="flex items-center justify-between w-full">
            {/* Left Navigation */}
            <nav className="hidden xl:flex items-center gap-3 lg:gap-5 flex-1 max-w-[45%] pr-4">
              {leftNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 transition text-xs md:text-sm font-medium flex items-center gap-1 py-2 cursor-pointer"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-200">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 text-xs md:text-sm cursor-pointer"
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

            {/* Logo - Centered on desktop, left on mobile */}
            <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 bg-white px-2">
              <a href="/" className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="/images/logo.jpeg"
                  alt="NETRIVYA Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-lg md:text-xl font-bold text-gray-900 leading-tight">NETRIVYA</span>
              </a>
            </div>

            {/* Mobile Logo - Left side */}
            <div className="xl:hidden flex items-center">
              <a href="/" className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="/images/logo.jpeg"
                  alt="NETRIVYA Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-base font-bold text-gray-900 leading-tight">NETRIVYA</span>
              </a>
            </div>

            {/* Right Navigation - CONTACT US, LOGIN, SIGN UP */}
            <div className="hidden xl:flex items-center gap-3 flex-1 justify-end max-w-[45%] pl-4">
              {rightNavItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.label === "LOGIN" ? (
                    <a 
                      href={item.href} 
                      className="text-gray-700 hover:text-teal-600 font-medium transition text-xs md:text-sm flex items-center gap-1 cursor-pointer"
                      onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {item.label}
                      {item.hasDropdown && (
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                  ) : item.label === "SIGN UP" ? (
                    <a
                      href={item.href}
                      className="bg-teal-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-teal-700 transition text-xs md:text-sm font-medium cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="bg-teal-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-teal-700 transition text-xs md:text-sm font-medium cursor-pointer"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - Right side */}
            <button 
              className="xl:hidden cursor-pointer ml-auto" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Page Style */}
        {isMenuOpen && (
          <nav className="xl:hidden fixed inset-0 h-screen w-full bg-teal-600 text-white p-6 z-40 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              {/* Logo in mobile menu */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.jpeg"
                  alt="NETRIVYA Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-lg font-bold text-white leading-tight">NETRIVYA</span>
              </div>
              
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
                        <svg 
                          className={`w-4 h-4 transition-transform ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
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
          <div className="xl:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}