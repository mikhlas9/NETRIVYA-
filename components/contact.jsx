"use client"

import { useState } from "react"

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: "24/7",
      label: "Support Available"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: "5",
      label: "Global Offices"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: "1000+",
      label: "Happy Clients"
    }
  ]

  const contactNumbers = [
    {
      countryCode: "AE",
      countryName: "UAE",
      phone: "+971-50-35-95083"
    },
    {
      countryCode: "SG",
      countryName: "Singapore",
      phone: "+65-315-92108"
    },
    {
      countryCode: "ZM",
      countryName: "Zambia",
      phone: "+260-97-8511820"
    },
    {
      countryCode: "US",
      countryName: "USA",
      phone: "+1-302-492-9037"
    },
    {
      countryCode: "AU",
      countryName: "Australia",
      phone: "+61-29-0988360"
    }
  ]

  const offices = [
    {
      company: "NETRIVYA Technologies LLC",
      address: "601, Mai Tower, Al-Nahda First, Dubai, UAE"
    },
    {
      company: "NETRIVYA Pte. Ltd",
      address: "68 Circular Road, #02-01, 049422, Singapore"
    },
    {
      company: "NETRIVYA Technologies Limited",
      address: "6955 Haile Selassie Avenue, Lusaka, Zambia"
    }
  ]

  const faqs = [
    {
      question: "What services does NETRIVYA provide?",
      answer: "NETRIVYA provides comprehensive messaging solutions including Bulk SMS, WhatsApp Business API, Voice OTP, Transactional SMS, Promotional SMS, and Alert SMS services for businesses worldwide."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started within minutes! Simply sign up for an account, complete the verification process, and you'll be ready to send your first message. Our team is available 24/7 to assist with setup."
    },
    {
      question: "Do you provide API documentation?",
      answer: "Yes, we provide comprehensive API documentation with sample codes, integration guides, and SDKs for various programming languages to help you integrate our services seamlessly into your applications."
    },
    {
      question: "What are your support hours?",
      answer: "We provide 24/7 customer support through multiple channels including email, phone, and live chat. Our dedicated support team is always available to assist you with any queries or technical issues."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer competitive volume discounts based on your messaging volume. Contact our sales team to discuss custom pricing plans tailored to your business needs and volume requirements."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-white to-teal-50/30 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help with your messaging needs — Bulk SMS, WhatsApp, or APIs.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-teal-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Global Contact Numbers */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Global Contact Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactNumbers.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 font-bold text-lg">
                        {contact.countryCode}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {contact.countryName}
                    </h3>
                    <div className="flex items-center gap-2 text-teal-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-sm font-medium hover:text-teal-700 transition cursor-pointer"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Offices */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {office.company}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 transition-colors"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-teal-600 shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Email Us Directly */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-teal-50 rounded-lg shadow-md p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Email Us Directly
            </h3>
            <p className="text-gray-600 mb-4">
              For general inquiries and support
            </p>
            <a
              href="mailto:sales@netrivya.com"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sales@netrivya.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

