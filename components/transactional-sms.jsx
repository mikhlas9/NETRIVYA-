"use client"

import { useState } from "react"

export default function TransactionalSMS() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    volume: "Up to 10,000"
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const whyFeatures = [
    "Instant delivery of critical messages",
    "98% open rate within 3 minutes",
    "No app installation required",
    "Works on all mobile devices",
    "Automated workflow integration",
    "Real-time delivery tracking"
  ]

  const mainFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Delivery",
      description: "Messages delivered in under 3 seconds with priority routing and redundant carriers.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "99.8% Delivery Rate",
      description: "Industry-leading delivery rates backed by tier-1 carrier partnerships worldwide.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Developer-Friendly API",
      description: "RESTful API with SDKs for all major languages. Get started in minutes with clear docs.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-Time Analytics",
      description: "Track delivery, opens, and engagement with detailed dashboards and webhooks.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Coverage",
      description: "Send SMS to 190+ countries with local number support and competitive pricing.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and GDPR compliance.",
      iconBg: "bg-gray-800",
      iconColor: "text-white"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter Plan",
      description: "Perfect for startups and small businesses beginning their messaging journey.",
      bestFor: "new businesses testing transactional and promotional campaigns.",
      features: [
        "10,000 SMS credits/month",
        "Global coverage (190+ countries)",
        "REST API access",
        "Email support",
        "Basic analytics & delivery reports"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gray-200 text-gray-700 hover:bg-gray-300",
      highlighted: false
    },
    {
      name: "Professional Plan",
      description: "Ideal for growing businesses with higher message volumes and advanced needs.",
      bestFor: "expanding teams managing multiple regions or large user bases.",
      features: [
        "50,000 SMS credits/month",
        "Everything in Starter",
        "Priority routing",
        "Dedicated support",
        "Advanced analytics",
        "Custom webhooks",
        "Multiple user accounts",
        "Enhanced API rate limit"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-teal-600 hover:bg-teal-700 text-white",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise Plan",
      description: "Custom-built solutions for large-scale communication needs.",
      bestFor: "enterprises requiring maximum reliability, scalability, and control.",
      features: [
        "Unlimited messaging volume",
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone & email support",
        "SLA-backed delivery",
        "Custom integrations",
        "Volume-based discounts",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-200 text-gray-700 hover:bg-gray-300",
      highlighted: false
    }
  ]

  const industries = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      name: "E-Commerce",
      description: "Order confirmations, shipping updates, delivery notifications, and payment alerts.",
      tags: ["Order placed", "Out for delivery", "Payment received", "Return status"],
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      name: "Banking & Finance",
      description: "Transaction alerts, OTPs, balance updates, and security notifications.",
      tags: ["Login OTP", "Transaction alert", "Low balance", "Card blocked"],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      name: "Healthcare",
      description: "Appointment reminders, test results, prescription refills, and emergency alerts.",
      tags: ["Appointment reminder", "Test results ready", "Prescription due", "Check-in alert"],
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      name: "Travel & Hospitality",
      description: "Booking confirmations, check-in reminders, flight updates, and reservation changes.",
      tags: ["Booking confirmed", "Flight delay", "Check-in open", "Reservation modified"],
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ]

  const benefits = [
    "Instant delivery with 99.8% success rate",
    "Works on all mobile phones",
    "Automated and scalable",
    "Cost-effective at scale",
    "No internet required on recipient device",
    "98% open rate within 3 minutes",
    "Real-time delivery tracking",
    "Regulatory compliance built-in"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Demo Form */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-lg px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Trusted by 2,000+ Brands</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transactional SMS That{" "}
                <span className="text-teal-600">Delivers Results</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Send OTPs, alerts, and notifications instantly with 99.8% delivery rate. Enterprise-grade reliability for your critical messages.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Delivery Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">&lt;3s</div>
                  <div className="text-sm text-gray-600">Avg. Speed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer">
                  Start Free Trial
                </button>
                <button className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition font-semibold cursor-pointer">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Right Side - Demo Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Demo</h2>
              <p className="text-gray-600 mb-6">See how NETRIVYA can transform your messaging</p>

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
                      placeholder="+1 (555) 000-0000"
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
                      <option>Up to 10,000</option>
                      <option>10,000 - 50,000</option>
                      <option>50,000 - 100,000</option>
                      <option>100,000 - 500,000</option>
                      <option>500,000+</option>
                    </select>
                  </div>
                </div>

                {showSuccess && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-green-700">Success!</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-300 transition font-semibold cursor-pointer mb-4"
                >
                  Request Demo
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No credit card required. Setup in minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Transactional SMS Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Transactional SMS?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transactional SMS delivers time-sensitive information directly to your customers' phones with unmatched reliability and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex items-start gap-4">
                <svg className="w-6 h-6 text-green-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
              FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Send Transactional SMS
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powerful features built for developers and trusted by enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className={`${feature.iconBg} ${feature.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Messaging Packages
            </h2>
            <p className="text-lg text-teal-50 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-xl relative"
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <p className="text-gray-500 text-xs mb-6 italic">Best for: {plan.bestFor}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.buttonStyle} px-6 py-3 rounded-lg transition font-semibold cursor-pointer`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-teal-50 mt-8 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
              USE CASES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across sectors to deliver critical communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className={`${industry.iconBg} ${industry.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Transactional SMS Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is Transactional SMS?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Transactional SMS refers to automated text messages sent to deliver time-sensitive, critical information related to transactions or account activities. Unlike promotional messages, transactional SMS are essential for business operations and customer communication. These messages include OTPs (One-Time Passwords), order confirmations, shipping updates, payment alerts, and appointment reminders.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transactional SMS have delivery rates exceeding 98% and are typically read within minutes, making them the most reliable channel for critical communications.
          </p>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            How Does Transactional SMS Work?
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Trigger Event",
                description: "Your application triggers an SMS through our API when an event occurs (login, purchase, etc.)"
              },
              {
                step: "2",
                title: "Smart Routing",
                description: "Our platform intelligently routes your message through the best carrier for optimal delivery"
              },
              {
                step: "3",
                title: "Instant Delivery",
                description: "Message reaches the recipient in under 3 seconds with real-time delivery confirmation"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Transactional SMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NETRIVYA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose NETRIVYA for Transactional SMS?
          </h2>
          <div className="bg-teal-50 rounded-lg p-8 border border-teal-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-6">NETRIVYA</h3>
                <ul className="space-y-3">
                  {[
                    "99.8% delivery rate",
                    "Under 3 second delivery",
                    "Global coverage (190+ countries)",
                    "Developer-friendly API",
                    "24/7 support",
                    "Real-time analytics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Traditional Providers</h3>
                <ul className="space-y-3">
                  {[
                    "92-95% delivery rate",
                    "5-10 second delays",
                    "Limited coverage",
                    "Complex integration",
                    "Business hours only",
                    "Basic reporting"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

