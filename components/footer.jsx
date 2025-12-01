export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk SMS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  WhatsApp API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Voice OTP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Two-Way SMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  SMS Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SMS Gateway
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  DLT Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Reseller Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Regions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk SMS USA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk SMS UAE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk SMS Canada
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bulk SMS Global
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>UAE: +971-50-35-95083</li>
              <li>USA: +1-302-492-9037</li>
              <li>SINGAPORE: +65-315-92108</li>
              <li>AUSTRALIA: +61-29-0988360</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© NETRIVYA Technologies LLC. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
