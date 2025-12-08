"use client"

import { useState } from "react"

export default function AlertSMS() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const features = [
    "Examination Results",
    "Item Sales Details",
    "Due Details, and so forth"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Are The Expert in Bulk SMS Marketing Automation Tool.
              </h1>
              <p className="text-lg text-teal-100 leading-relaxed">
                NETRIVYA Has a User-Friendly Platform with rich Amazing Features to Send Bulk Alert SMS Campaign Service.
              </p>
            </div>

            {/* Right Side - Signup Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer"
                >
                  FREE SIGNUP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex justify-end mb-8">
            <nav className="text-sm text-gray-600">
              <a href="/" className="hover:text-teal-600 transition cursor-pointer">Home</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Alert SMS</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div className="space-y-12">
              {/* Mobile Alert SMS Service */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Mobile Alert SMS Service
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    NETRIVYA provides easy, solid and rapid informing administrations for your business needs. Our Mobile Alert SMS Service enables you to send instant notifications to your customers, employees, or subscribers with high delivery rates and real-time connectivity.
                  </p>
                  <p>
                    With our 'National Message' arrangements, you can reach audiences across multiple regions. Our platform offers simple join and constant network, making it easy for businesses to integrate SMS alerts into their operations.
                  </p>
                  <p>
                    NETRIVYA Mobile SMS Alert Service is trusted by businesses worldwide. As one of the leading Bulk SMS Service Providers, we ensure reliable message delivery and comprehensive support for all your alert messaging needs.
                  </p>
                </div>
              </div>

              {/* Institutional SMS Alert Service */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Institutional SMS Alert Service
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Institutional SMS Alert Service helps educational institutions maintain seamless communication with students, parents, and staff. Whether it's sending examination results, attendance updates, or important announcements, our platform makes it simple and efficient.
                  </p>
                  <p>
                    This service enables educators to contact guardians directly, facilitating better communication for institution/school functions or important notices. Staff can send messages via the Internet from anywhere, ensuring timely delivery of critical information.
                  </p>
                  <p>
                    With real-time mass-reach technology, institutions can send alerts to millions of recipients instantly, ensuring everyone stays informed about important updates and events.
                  </p>
                </div>
              </div>

              {/* Corporate SMS Alert Service */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Corporate SMS Alert Service
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our SMS application empowers companies to send peer-to-group and application-to-group messages efficiently. With scheduled updates and automated alerts, businesses can keep their teams and customers informed without manual intervention.
                  </p>
                  <p>
                    The corporate alert service ensures your messages don't get lost in the crowd. With support for every cell phone and device, you can reach your entire audience regardless of their device type or location.
                  </p>
                  <p>
                    This solution saves time and money for enterprises by automating routine communications, reducing the need for manual follow-ups, and ensuring consistent message delivery across all channels.
                  </p>
                </div>
              </div>

              {/* Auto Reply SMS Alert Service */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Auto Reply SMS Alert Service
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Auto Reply SMS Alert Service allows you to receive SMS via our web interface, mobile app, or directly into your database. This enables seamless integration with your existing systems and workflows.
                  </p>
                  <p>
                    Answers can be stored, categorized, and sent using hotkeys for quick responses. This feature is particularly useful for customer service departments, support teams, and automated notification systems.
                  </p>
                  <p>
                    With automated reply capabilities, you can set up intelligent response systems that handle common queries, send confirmation messages, and provide instant feedback to your customers.
                  </p>
                </div>
              </div>

              {/* Fundamental Features */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Fundamental Features
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  NETRIVYA SMS Service enables you to receive SMS by means of our web interface or on your mobile device or even directly into your database. Our platform supports various use cases including:
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 relative overflow-hidden">
                {/* Smartphone Illustration */}
                <div className="relative z-10">
                  <div className="bg-gray-900 rounded-3xl p-4 w-64 mx-auto shadow-2xl">
                    {/* Phone Screen */}
                    <div className="bg-white rounded-2xl p-4 h-96 flex flex-col">
                      {/* Phone Header */}
                      <div className="flex justify-between items-center mb-4 pb-2 border-b">
                        <span className="text-xs font-semibold text-gray-700">20:34</span>
                        <div className="flex gap-2">
                          <button className="text-xs text-gray-600">Delete All</button>
                          <button className="text-xs text-gray-600">Cancel</button>
                        </div>
                      </div>
                      {/* Profile Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Message Area */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="bg-teal-600 text-white rounded-lg p-3 text-sm">
                            SMS Alerts Service
                          </div>
                          <div className="bg-gray-200 rounded-lg p-3 text-sm text-gray-700">
                            Real-time notifications
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speech Bubble */}
                <div className="absolute top-20 right-8 bg-yellow-400 rounded-lg p-4 shadow-lg z-20 max-w-xs">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    SMS Alerts Service Provides
                  </div>
                  <ul className="text-xs text-gray-800 space-y-1 mb-2">
                    <li>• Real Time mass-reach technology</li>
                    <li>• to Millions of People. Learn More.</li>
                  </ul>
                  <div className="text-xs text-gray-600 mt-2">
                    NETRIVYA - Bulk SMS Provider
                  </div>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                </div>

                {/* Message Icon */}
                <div className="absolute bottom-8 right-12">
                  <div className="bg-yellow-400 rounded-lg p-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

