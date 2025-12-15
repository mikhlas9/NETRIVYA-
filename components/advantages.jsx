"use client"

import Image from "next/image"

export default function Advantages() {
  const advantages = [
    {
      title: "Developers",
      desc: "Now you can easily integrate any application and start sending SMS. We have Sample codes for PHP, Java, .NET & more. With NETRIVYA SMS APIs you can Send bulk SMS offers, trigger Transactional updates, Verify OTPs, Get inbound SMS, reports, Update contacts and more",
      image: "/images/developers.png",
      position: "right"
    },
    {
      title: "Advertising & Marketing Agencies",
      desc: "With NETRIVYA you can explore the new revenue channel and deliver the ROI to your Client campaigns, Track Campaign metrics. We have Categorized databases of various countries, which will help you target the right audience.",
      image: "/images/marketing-agencies.png",
      position: "left"
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          NETRIVYA Platform Advantage
        </h2>

        <div className="space-y-20">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className={`flex flex-col ${
                advantage.position === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="md:w-1/2">
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    width={100}
                    height={50}
                    className="object-contain mx-auto h-52 sm:h-64 md:h-80 w-auto"
                    style={{ filter: 'hue-rotate(140deg) saturate(0.9)' }}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {advantage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}