"use client"

import { useState } from "react"

export default function PromotionalSMS() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    volume: "1K - 10K messages"
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      label: "HIGH VOLUME",
      title: "Bulk Sending",
      description: "Send thousands of promotional SMS messages in seconds with our high-throughput SMS gateway.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: "BRAND IDENTITY",
      title: "Dedicated Sender ID",
      description: "Increase recognition and response with a custom sender name registered for your brand.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: "REAL-TIME",
      title: "Delivery Reports",
      description: "Real-time DLRs and comprehensive analytics to track campaign performance and message status.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "DEVELOPER FRIENDLY",
      title: "API & Integrations",
      description: "Seamless SMS API integration with your CRM, e-commerce platform, or marketing automation tools.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "READY TO USE",
      title: "Campaign Templates",
      description: "Pre-built SMS templates for retail offers, event promotions, logistics alerts, and more.",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: "COMPLIANT",
      title: "Opt-out Management",
      description: "Built-in compliance tools for opt-out handling, DND lists, and regional SMS regulations.",
      iconBg: "bg-blue-900",
      iconColor: "text-blue-900"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter Plan",
      subtitle: "Perfect for small businesses and startups",
      planName: "Custom",
      features: [
        "Up to 10,000 SMS/month",
        "Basic sender ID",
        "Delivery reports",
        "Email support",
        "REST API access",
        "Campaign templates"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-teal-600 hover:bg-teal-700",
      highlighted: false
    },
    {
      name: "Growth Plan",
      subtitle: "For growing businesses with higher volume",
      planName: "Custom",
      features: [
        "Up to 500,000 SMS/month",
        "Custom sender ID",
        "Advanced analytics & DLRs",
        "Priority support",
        "API & webhook integration",
        "Dedicated account manager",
        "Campaign scheduling",
        "A/B testing tools"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-green-600 hover:bg-green-700",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise Plan",
      subtitle: "Custom solutions for large-scale campaigns",
      planName: "Custom",
      features: [
        "Unlimited SMS volume",
        "Multiple sender IDs",
        "Premium delivery routes",
        "24/7 dedicated support",
        "Custom API solutions",
        "SLA guarantees",
        "White-label options",
        "Advanced security features"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-teal-600 hover:bg-teal-700",
      highlighted: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <div>
              {/* Badge */}
              <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg mb-6 text-sm font-semibold">
                99.8% Average Delivery Rate
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Promotional SMS that reaches customers instantly
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Send targeted bulk SMS campaigns with real-time delivery reports and local sender IDs. Start your free trial or get flexible pricing for high-volume campaigns.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer flex items-center justify-center gap-2">
                  Start Free Trial
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="bg-white border-2 border-teal-600 text-gray-900 px-8 py-3 rounded-lg hover:bg-teal-50 transition font-semibold cursor-pointer">
                  Get Pricing
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trusted by 2,000+ brands</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h2>
              <p className="text-gray-600 mb-6">See how promotional SMS can boost your marketing ROI</p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly SMS Volume*
                    </label>
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                      required
                    >
                      <option>1K - 10K messages</option>
                      <option>10K - 50K messages</option>
                      <option>50K - 100K messages</option>
                      <option>100K - 500K messages</option>
                      <option>500K+ messages</option>
                    </select>
                  </div>
                </div>

                {showSuccess && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-green-700">Success! We'll contact you shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-300 transition font-semibold cursor-pointer mb-4"
                >
                  Request Demo
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your data is secure. We respect your privacy and comply with opt-out regulations.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Promotional SMS Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
              WHY PROMOTIONAL SMS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing that reaches customers instantly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Promotional SMS delivers measurable results for businesses of all sizes. Reach your audience directly with bulk SMS marketing that drives action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Blue */}
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98% Open Rate</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unmatched Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                SMS messages are read within 3 minutes on average, delivering 6x higher engagement than email marketing campaigns.
              </p>
            </div>

            {/* Card 2 - Green */}
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">5x Lower CPA</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce customer acquisition costs with direct, targeted promotional SMS that converts at higher rates than traditional channels.
              </p>
            </div>

            {/* Card 3 - Orange */}
            <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">25% Conversion Uplift</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Track delivery, opens, and conversions in real-time. Optimize campaigns with detailed analytics and delivery reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for promotional SMS campaigns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade bulk SMS platform with tools for campaign management, delivery tracking, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className={`${feature.iconBg} ${feature.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  {feature.label}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent per-SMS pricing with no hidden fees
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pay-as-you-go or volume discounts. Choose the plan that fits your promotional SMS campaign needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 shadow-md ${
                  plan.highlighted ? "bg-teal-600 text-white" : "bg-white"
                } relative`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <p className={`text-sm mb-2 ${plan.highlighted ? "text-teal-100" : "text-gray-600"}`}>
                  {plan.subtitle}
                </p>
                <h3 className={`text-4xl font-bold mb-6 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.planName}
                </h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-green-400" : "text-green-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? "text-teal-50" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full ${plan.buttonStyle} text-white px-6 py-3 rounded-lg transition font-semibold cursor-pointer`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

