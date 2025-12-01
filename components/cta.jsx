export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Create Something Big Together.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            START FREE TRIAL
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold">
            TRY VOICE OTP SERVICE
          </button>
        </div>
      </div>
    </section>
  )
}
