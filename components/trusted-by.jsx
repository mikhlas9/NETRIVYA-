
"use client"

import Image from "next/image"

export default function TrustedBy() {
  const companies = [
    { name: "Google", logo: "/images/google.png" },
    { name: "Facebook", logo: "/images/facebook.png" },
    { name: "WeChat", logo: "/images/wechat.png" },
    { name: "WhatsApp", logo: "/images/whatsapp.png" },
    { name: "Snapchat", logo: "/images/snapchat.png" },
    { name: "Uber", logo: "/images/uber.png" },
    { name: "DHL", logo: "/images/dhl.png" },
    { name: "PayPal", logo: "/images/paypal.png" },
    { name: "Shark Taxi", logo: "/images/shark-taxi.png" },
    { name: "Xpress Money", logo: "/images/xpress-money.png" },
    { name: "Lloyds Bank Foundation", logo: "/images/lloyds.png" },
    { name: "Oppo", logo: "/images/oppo.png" },
    { name: "Cchat", logo: "/images/cchat.png" },
    { name: "GaragePlug", logo: "/images/garageplug.png" },
    { name: "Kotak", logo: "/images/kotak.png" },
    { name: "Tawseel Food", logo: "/images/tawseel.png" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Trusted By 12,000+ Customers Worldwide</h2>
          <p className="text-gray-600">Delivering Messages in 190+ Countries</p>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`flex items-center justify-center py-12 px-4 bg-white ${
                  (index + 1) % 4 !== 0 ? "border-r" : ""
                } ${Math.floor(index / 4) !== Math.floor(companies.length / 4) ? "border-b" : ""} border-gray-300`}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
