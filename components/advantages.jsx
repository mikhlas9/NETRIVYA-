"use client"

export default function Advantages() {
  const advantages = [
    {
      title: "Developers",
      desc: "Now you can easily integrate any application and start sending SMS. We have Sample codes for PHP, Java, .NET & more. With NETRIVYA SMS APIs you can Send bulk SMS offers, trigger Transactional updates, Verify OTPs, Get inbound SMS, reports, Update contacts and more",
      boxTitle: "Easy Integration",
      boxSubtitle: "Developer Friendly",
      position: "left",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      boxIcon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["PHP, Java, .NET Support", "REST API Access", "Comprehensive Docs"]
    },
    {
      title: "Advertising & Marketing Agencies",
      desc: "With NETRIVYA you can explore the new revenue channel and deliver the ROI to your Client campaigns, Track Campaign metrics. We have Categorized databases of various countries, which will help you target the right audience.",
      boxTitle: "Campaign Analytics",
      boxSubtitle: "Track & Optimize",
      position: "right",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      boxIcon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["ROI Tracking", "Campaign Metrics", "Targeted Databases"]
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          NETRIVYA Platform Advantage
        </h2>

        <div className="space-y-24 md:space-y-28">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className={`flex flex-col ${
                advantage.position === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 items-center`}
            >
              {/* Text Content Side */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-lg">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {advantage.desc}
                </p>
                
                {/* Key Features */}
                <div className="flex flex-wrap gap-2">
                  {advantage.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Styled Box Side */}
              <div className="md:w-1/2">
                <div 
                  className="bg-teal-600 rounded-3xl shadow-2xl p-10 md:p-12 text-center relative overflow-hidden transition-transform hover:scale-105"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                >
                  {/* Circular Icon Area */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-teal-500/30 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
                      <div className="text-white">
                        {advantage.boxIcon}
                      </div>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {advantage.boxTitle}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-teal-100 text-base md:text-lg font-medium">
                    {advantage.boxSubtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}