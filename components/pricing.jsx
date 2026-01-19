"use client"

import { useState, useMemo } from "react"

export default function Pricing() {
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan")
  const [activeTab, setActiveTab] = useState("SMS")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState("")

  // Sample countries list (you can expand this to 195+ countries)
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Australia", "Austria",
    "Bahrain", "Bangladesh", "Belgium", "Brazil", "Bulgaria", "Canada", "China", "Colombia",
    "Denmark", "Egypt", "Finland", "France", "Germany", "Greece", "India", "Indonesia",
    "Ireland", "Italy", "Japan", "Kenya", "Malaysia", "Mexico", "Netherlands", "New Zealand",
    "Nigeria", "Norway", "Pakistan", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
    "Switzerland", "Thailand", "Turkey", "UAE", "UK", "USA", "Vietnam", "Zambia"
  ]

  const filteredCountries = useMemo(() => {
    if (!countrySearch) return countries
    return countries.filter(country =>
      country.toLowerCase().includes(countrySearch.toLowerCase())
    )
  }, [countrySearch])

  // Sample pricing data (you can replace with actual API data)
  const pricingData = {
    SMS: {
      local: "0.2760",
      international: "0.3080"
    },
    Voice: {
      local: "0.1320",
      international: "0.1320"
    },
    WhatsApp: {
      authentication: "0.0120",
      marketing: "0.0700",
      utility: "0.0120",
      service: "2.0000",
      authenticationInternational: "0.0120"
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You can add a toast notification here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing for Global Messaging
            </h1>
            <p className="text-lg text-teal-50 max-w-3xl mx-auto">
              Pay only for what you use. Competitive rates for SMS, Voice, and WhatsApp across 195+ countries with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Country Selection */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-900">Select Your Country</h2>
                </div>
                <p className="text-gray-600 text-sm">View pricing for 195+ countries</p>
              </div>
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="w-full md:w-64 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between hover:border-teal-600 transition cursor-pointer"
                >
                  <span className="text-gray-900">{selectedCountry}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 md:right-auto md:w-64 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden">
                    <div className="p-2 border-b border-gray-200">
                      <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        />
                      </div>
                    </div>
                    <div className="overflow-y-auto max-h-80">
                      {filteredCountries.map((country) => (
                        <button
                          key={country}
                          onClick={() => {
                            setSelectedCountry(country)
                            setIsCountryDropdownOpen(false)
                            setCountrySearch("")
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-teal-50 transition cursor-pointer ${
                            country === selectedCountry ? "bg-teal-100 text-teal-700" : "text-gray-900"
                          }`}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> All prices are in EUR. Rates are updated regularly to reflect current market conditions.
              </p>
            </div>
          </div>

          {/* Pricing Update Notice */}
          <div className="mb-8 bg-gray-100 border-l-4 border-teal-600 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Pricing Update Notice</h3>
            </div>
            <div className="ml-9 mb-4">
              <p className="text-gray-700 mb-2">
                We are currently updating our pricing structure.
              </p>
              <p className="text-gray-700 mb-2">
                The rates displayed may not reflect the latest operator rate charges.
              </p>
              <p className="text-gray-700">
                Please <strong>contact our team</strong> to get the most accurate, destination-specific pricing.
              </p>
            </div>
            <div className="ml-9">
              <a
                href="/contact"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer"
              >
                Contact Our Sales Team
              </a>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="mb-8">
            <div className="flex gap-2 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("SMS")}
                className={`px-6 py-3 flex items-center gap-2 font-semibold transition cursor-pointer ${
                  activeTab === "SMS"
                    ? "bg-teal-600 text-white rounded-t-lg"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                SMS
              </button>
              <button
                onClick={() => setActiveTab("Voice")}
                className={`px-6 py-3 flex items-center gap-2 font-semibold transition cursor-pointer ${
                  activeTab === "Voice"
                    ? "bg-teal-600 text-white rounded-t-lg"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Voice
              </button>
              <button
                onClick={() => setActiveTab("WhatsApp")}
                className={`px-6 py-3 flex items-center gap-2 font-semibold transition cursor-pointer ${
                  activeTab === "WhatsApp"
                    ? "bg-teal-600 text-white rounded-t-lg"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>

          {/* Pricing Content */}
          <div className="mb-12">
            {/* SMS Tab Content */}
            {activeTab === "SMS" && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">SMS</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.SMS.local)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Local</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.SMS.local} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.SMS.international)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">International</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.SMS.international} EUR</div>
                  </div>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-600 rounded-lg p-6 mb-12">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Why SMS Pricing Differs (Local vs International)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A2P SMS prices differ for local and international messages because operators charge varying wholesale fees based on the message origin and destination. Local messages benefit from lower domestic interconnect fees and regulations, making costs more predictable and affordable. International messages face higher termination fees, origin-based surcharges, and extra costs for routing, fraud control, and compliance. NETRIVYA passes these costs on, which causes price differences for the same destination depending on whether the SMS is local or international. To qualify for local SMS pricing, businesses typically need to provide proof of legal registration in the country where the SMS originates.
                  </p>
                </div>
              </div>
            )}

            {/* Voice Tab Content */}
            {activeTab === "Voice" && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Voice</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.Voice.local)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Local</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.Voice.local} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.Voice.international)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">International</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.Voice.international} EUR</div>
                  </div>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-600 rounded-lg p-6 mb-12">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Why Voice Pricing Differs (Local vs International)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Voice product pricing varies due to differing operator charges based on call origin and destination. Local calls benefit from lower domestic termination rates and regulatory norms, making them cheaper and more stable. International calls, however, incur higher termination fees, additional surcharges for cross-border routing, fraud prevention, and compliance costs. NETRIVYA passes these operator- and country-specific costs to customers. It also notes that businesses usually need to provide proof of legal registration in the country where calls originate to qualify for local call pricing.
                  </p>
                </div>
              </div>
            )}

            {/* WhatsApp Tab Content */}
            {activeTab === "WhatsApp" && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">WhatsApp</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.WhatsApp.authentication)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Authentication</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.WhatsApp.authentication} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.WhatsApp.marketing)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Marketing</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.WhatsApp.marketing} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.WhatsApp.utility)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Utility</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.WhatsApp.utility} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.WhatsApp.service)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Service</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.WhatsApp.service} EUR</div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 relative hover:border-teal-600 transition">
                    <button
                      onClick={() => copyToClipboard(pricingData.WhatsApp.authenticationInternational)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <div className="text-gray-600 mb-2">Authentication International</div>
                    <div className="text-3xl font-bold text-gray-900">{pricingData.WhatsApp.authenticationInternational} EUR</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses using NETRIVYA for reliable messaging services. Get started in minutes with our developer-friendly API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition font-semibold cursor-pointer"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

