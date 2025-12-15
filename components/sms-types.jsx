"use client"

import Image from "next/image"

export default function SMSTypes() {
  const smsTypes = [
    {
      title: "Transactional SMS",
      desc: "Transaction SMS are for sending important information, such as, Two Factor Authentication, Transaction Alerts and other. There should not be any promotional content in these SMS. SMS can be sent anytime of the day.",
      image: "/images/transactional-sms.png",
      link: "Read More",
      position: "left",
    },
    {
      title: "Promotional SMS",
      desc: "Promotional SMS are meant for the sole purpose of promoting and marketing your services and products as well as for creating your brand value. Can be sent between 9 AM to 9 PM in any Time Zone, SMS are sent to Opti-in Customers only.",
      image: "/images/promotional-sms.png",
      link: "Read More",
      position: "right",
    },
    {
      title: "Alert SMS",
      desc: "Alerts SMS routes are used for delivering Time critical information, Two-Factor Authentication, Passwords etc SMS, Using our intelligent redundant routing technology these SMS are Delivered with-in 5-10 secs.",
      image: "/images/alert-sms.png",
      link: "Read More",
      position: "left",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Which One to Pick From Promotional, Transactional & Alert SMS?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Depending upon your requirement you can choose the SMS route which suits your business needs, be it for Bulk
            SMS marketing or engaging your customers, there are various regulatory guidelines concerning your SMS user
            database.
          </p>
        </div>

        <div className="space-y-20">
          {/* Transactional SMS - Image on left */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative">
                <Image
                  src={smsTypes[0].image}
                  alt={smsTypes[0].title}
                  width={500}
                  height={300}
                  className="object-contain w-full"
                  style={{ filter: 'hue-rotate(140deg) saturate(0.9)' }}
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{smsTypes[0].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{smsTypes[0].desc}</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition">
                {smsTypes[0].link} →
              </a>
            </div>
          </div>

          {/* Promotional SMS - Image on right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{smsTypes[1].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{smsTypes[1].desc}</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition">
                {smsTypes[1].link} →
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src={smsTypes[1].image}
                  alt={smsTypes[1].title}
                  width={500}
                  height={300}
                  className="object-contain w-full"
                  style={{ filter: 'hue-rotate(140deg) saturate(0.9)' }}
                />
              </div>
            </div>
          </div>

          {/* Alert SMS - Image on left */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="relative">
                <Image
                  src={smsTypes[2].image}
                  alt={smsTypes[2].title}
                  width={500}
                  height={300}
                  className="object-contain w-full"
                  style={{ filter: 'hue-rotate(140deg) saturate(0.9)' }}
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{smsTypes[2].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{smsTypes[2].desc}</p>
              <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 transition">
                {smsTypes[2].link} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}