"use client"

export default function SMSTypes() {
  const smsTypes = [
    {
      title: "Transactional SMS",
      desc: "Transaction SMS are for sending important information, such as, Two Factor Authentication, Transaction Alerts and other. There should not be any promotional content in these SMS. SMS can be sent anytime of the day.",
      sampleMessage: "Dear parents, I semester examinations will commence form 25 August 2019. Please collect the Hall ticket. Regards popular sammrat school",
      link: "Read More",
      position: "left",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Promotional SMS",
      desc: "Promotional SMS are meant for the sole purpose of promoting and marketing your services and products as well as for creating your brand value. Can be sent between 9 AM to 9 PM in any Time Zone, SMS are sent to Opti-in Customers only.",
      sampleMessage: "Grab the new iPhone- X with 10% Discount",
      link: "Read More",
      position: "right",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Alert SMS",
      desc: "Alerts SMS routes are used for delivering Time critical information, Two-Factor Authentication, Passwords etc SMS, Using our intelligent redundant routing technology these SMS are Delivered with-in 5-10 secs.",
      sampleMessage: "Your OTP for login is 456789. Valid for 5 minutes. Do not share with anyone.",
      link: "Read More",
      position: "left",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Which One to Pick From Promotional, Transactional & Alert SMS?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Depending upon your requirement you can choose the SMS route which suits your business needs, be it for Bulk
            SMS marketing or engaging your customers, there are various regulatory guidelines concerning your SMS user
            database.
          </p>
        </div>

        <div className="space-y-20">
          {smsTypes.map((smsType, index) => (
            <div 
              key={smsType.title}
              className={`flex flex-col ${
                smsType.position === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 items-center`}
            >
              {/* Message Box Side */}
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Hand-drawn style message box */}
                  <div 
                    className="relative bg-white rounded-2xl p-6 md:p-8 border-4 border-teal-600 shadow-xl"
                    style={{
                      borderStyle: 'solid',
                      transform: 'rotate(-1deg)',
                    }}
                  >
                    {/* Quotation marks - top left */}
                    <div className="absolute -top-4 -left-4 text-teal-600 text-6xl md:text-7xl font-serif leading-none opacity-60" style={{ fontFamily: 'Georgia, serif' }}>
                      "
                    </div>
                    
                    {/* Sample SMS Message */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                          {smsType.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{smsType.title}</span>
                      </div>
                      <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                        {smsType.sampleMessage}
                      </p>
                    </div>

                    {/* Quotation marks - bottom right */}
                    <div className="absolute -bottom-4 -right-4 text-teal-600 text-6xl md:text-7xl font-serif leading-none opacity-60 rotate-180" style={{ fontFamily: 'Georgia, serif' }}>
                      "
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Side */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                    {smsType.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{smsType.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {smsType.desc}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition group"
                >
                  {smsType.link}
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}