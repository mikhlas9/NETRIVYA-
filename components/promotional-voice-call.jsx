export default function PromotionalVoiceCall() {
  const featureCards = [
    {
      title: "Send reminders to your client base",
      description: "Is the most effective method to send reminders for EMI payments, insurance premium, bills etc. Improves customer satisfaction through a sense of responsibility projected from the company.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100"
    },
    {
      title: "Broadcast your business message promptly to the right audience",
      description: "Takes a very short time for your business message to be heard by a large mass of audience. You can target your niche demographic and broadcast specific promotional messages to them instantaneously.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100"
    },
    {
      title: "Target specific audience in multiple campaigns",
      description: "Easily segment and target your promotional messages to the audience of your choice. Customize specific messages with well-researched promotional offers, in vernacular languages and more for better business.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconColor: "text-red-600",
      iconBg: "bg-red-100"
    },
    {
      title: "Business messages are heard in their full capacity",
      description: "Voice calls are prompt and reach the receiver with your message in a moment. With prompt message delivery and no other irrelevant words the calls are usually listened to and not hung up midway.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      title: "Market your products or services",
      description: "Promote your products and services without spending huge amounts. Get the word out to the right ears into their very own mobile phones that are with them all the time.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100"
    },
    {
      title: "Excellent call quality",
      description: "With a voice message delivery people who cannot read also receive your business message clearly. The quality of your business message delivery will make sure the message is heard full and clear without any interruption or cracking.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      iconColor: "text-green-600",
      iconBg: "bg-green-100"
    }
  ]

  const enhancedFeatures = [
    "It is fast and sends the message to numerous phones with a single click",
    "Can support multiple languages to help large chunks of users understand",
    "Allows voice call campaigning for targeting specified audiences",
    "It offers prompt delivery of the messages with detailed reports"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              BULK VOICE CALL
            </h1>
            <p className="text-lg md:text-xl text-teal-50 leading-relaxed max-w-3xl mx-auto">
              This is a telephony feature that allows mobile marketers to interact with the clients by calling them and delivering a short and on-point business message. The message is pre-recorded and delivered through an automated Voice SMS application.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                <div className={`${card.iconBg} ${card.iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhanced features of our Voice Call service
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <ul className="space-y-4">
                {enhancedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-pink-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Voice Call Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Promotional Voice Call
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  NETRIVYA helps you reach your target audience in the easiest, fastest and most cost effective way. We enable you to call mobile phones and landlines anywhere within India.
                </p>
                <p className="text-lg">
                  Bulk voice call is a simple communication technology that allows you to take a recorded voice message to hundreds or even thousands of call recipients in a short span of time. These bulk voice calls are most often used for community alerts, notifications, and for business and promotional purposes.
                </p>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-lg p-12 relative overflow-hidden">
                {/* Laptop */}
                <div className="relative z-10 mb-8">
                  <div className="bg-purple-200 rounded-lg p-4 shadow-lg w-64 mx-auto">
                    {/* Laptop Screen */}
                    <div className="bg-white rounded-t-lg p-3">
                      {/* Window Controls */}
                      <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      {/* Shield Icon */}
                      <div className="flex justify-center items-center h-32 bg-teal-50 rounded">
                        <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="bg-purple-300 h-2 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Server Racks */}
                <div className="flex justify-center gap-4 relative z-10">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-200 rounded-lg p-3 shadow-md">
                      {/* Vertical Bars */}
                      <div className="space-y-1 mb-2">
                        {[1, 2, 3, 4].map((bar) => (
                          <div key={bar} className="h-2 bg-orange-500 rounded"></div>
                        ))}
                      </div>
                      {/* Status Icon */}
                      <div className="flex justify-center">
                        <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashed Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Lines from laptop to servers */}
                  <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <line
                      x1="50%"
                      y1="40%"
                      x2="30%"
                      y2="70%"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="40%"
                      x2="50%"
                      y2="70%"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="50%"
                      y1="40%"
                      x2="70%"
                      y2="70%"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    {/* L-shaped line above servers */}
                    <path
                      d="M 20% 60% L 20% 50% L 80% 50%"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

