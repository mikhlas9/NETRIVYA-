export default function AdvertisingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 rounded-lg p-12 w-full min-h-80 flex items-center justify-center">
              <div className="text-gray-300 text-lg">[ADVERTISING SECTION IMAGE PLACEHOLDER]</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advertising & Marketing Agencies</h2>
            <p className="text-gray-600 mb-4">
              With NETRIVYA you can explore the new revenue channel and deliver the ROI to your Client campaigns, Track
              Campaign metrics. We have Categorized databases of various countries, which will help you target the right
              audience.
            </p>
          </div>
        </div>

        {/* SMS Carrier Services */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SMS Carrier Services</h2>
            <p className="text-gray-600 mb-4">
              We at NETRIVYA provide you with SMPP connectivity for its scalability. For aggregators, we provide you
              with the largest network of direct connectivity across the world. The prices for wholesale and direct
              routes with our high-reliability infrastructure are unmatched in the market.
            </p>
            <p className="text-gray-600">
              As an intermediary between mobile operators and SMS aggregators, our system with all features helps you in
              avoiding any complications.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-gray-100 rounded-lg p-12 w-full min-h-80 flex items-center justify-center">
              <div className="text-gray-300 text-lg">[SMS CARRIER SERVICES IMAGE PLACEHOLDER]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
