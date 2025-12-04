"use client"

import Image from "next/image"

export default function OutOfBoxFeatures() {
  const features = [
    {
      title: "Personalized Sender ID",
      desc: "Make your unique presence using our alphanumeric Sender ID feature.",
      icon: "/images/sender-id.png"
    },
    {
      title: "Two Factor Authentication",
      desc: "Make the process safe and secure by employing 2FA.",
      icon: "/images/two-factor-auth.png"
    },
    {
      title: "Notifications & Alerts",
      desc: "Using our API, you can easily communicate with a large number of customers.",
      icon: "/images/notifications.png"
    },
    {
      title: "Web Panel",
      desc: "Our Easy to use Web Panel allows you to send SMS to contacts in an Excel File – in just few minutes",
      icon: "/images/web-panel.png"
    },
    {
      title: "Real Time Reports",
      desc: "Use our API to check the delivery status of SMS. Else check Analytical reports on our Web Panel.",
      icon: "/images/real-time-reports.png"
    },
    {
      title: "Scheduled Campaigns",
      desc: "Now you can schedule your campaigns without having to worry about their delivery.",
      icon: "/images/scheduled-campaigns.png"
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Our Out of the Box Features
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
<div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-center min-h-40 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}