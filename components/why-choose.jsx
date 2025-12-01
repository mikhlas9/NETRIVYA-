export default function WhyChoose() {
  const features = [
    { title: "Two Factor Authentication", desc: "Make the process safe and secure by employing 2FA." },
    {
      title: "Web Panel",
      desc: "Our Easy to use Web Panel allows you to send SMS to contacts in an Excel File in just few minutes",
    },
    {
      title: "Real Time Reports",
      desc: "Use our API to check the delivery status of SMS or check analytical reports on our Web Panel",
    },
    {
      title: "Notifications & Alerts",
      desc: "Using our API, you can easily communicate with a large number of customers",
    },
    {
      title: "Scheduled Campaigns",
      desc: "Now you can schedule your campaigns without having to worry about their delivery.",
    },
    { title: "Personalized Sender ID", desc: "Make your unique presence using our alphanumeric ID feature." },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Out of the Box Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="font-bold text-teal-600 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
