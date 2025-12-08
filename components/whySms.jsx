export default function WhySms() {
  const features = [
    "Send SMS to Any Country",
    "Dynamic Sender ID",
    "Unicode Support",
    "OTP Verification API",
    "Contact List API",
    "Messages over Https API",
    "Wholesale Pricing",
    "10 Sec Delivery",
    "Personalized SMS",
    "100% Handset DLR Report",
    "Bulk Contact Uploads"
  ]

  const benefits = [
    {
      title: "Unbeatable Rates and Delivery Speeds",
      description: "Our direct interconnections with operators around the globe Rate and Route Quality based Automated SMS gateway routing and State of Art infrastructure ensure higher delivery rates, least latencies and Round the clock Support help your Campaigns Deliver the ROI, Delivered the best User experience for your Apps"
    },
    {
      title: "Messaging Quality",
      description: "Sending messages is quite easy, but Delivering them quickly and consistently is more difficult. We use technologies that help us to exceed the benchmarks of messaging quality, regardless of the geographical location of the User. Our platform supports Unicode, delivering your messages with international symbols and emojis."
    },
    {
      title: "Fanatic Customer Support",
      description: "You can reach us round the clock, and we will be happy to assist you. NETRIVYA's customer support team is available 24/7 to assist you with all your queries."
    },
    {
      title: "Smart Tracking",
      description: "Our system gives you choice to keep a track of anything and everything. You can keep a check on sent SMS logs to delivery time to frequently failed numbers and more."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left Column - Features Box */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-white border-b border-gray-300 px-8 py-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">SMS API & Web Panel</h2>
            </div>
            <div className="px-8 py-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Why NETRIVYA?</h2>
            
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}