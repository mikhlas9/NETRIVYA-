export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powering Global Business Communication
            <span className="text-teal-600"> Through Bulk SMS</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          A trusted bulk SMS marketing and alerts platform delivering high-speed, scalable, and affordable messaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-semibold cursor-pointer">
              START FREE TRIAL
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition font-semibold cursor-pointer">
              API DOCUMENTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
