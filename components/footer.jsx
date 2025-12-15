export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          <div>
            <h3 className="font-semibold text-white mb-5 text-base">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  Bulk SMS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  WhatsApp API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  Voice OTP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  Two-Way SMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-base">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  SMS Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  SMS Gateway
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                  DLT Registration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-base">Office Address</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              NETRIVYA Technologies LLC
            </p>
          </div>

  
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© NETRIVYA Technologies LLC. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
