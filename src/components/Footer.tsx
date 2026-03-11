import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#040c17] to-[#09223b] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">aNquest</h2>

          <p className="text-sm text-gray-400 mb-6">
            Building secure & efficient CRM systems to support scalable
            business operations.
          </p>

          <div className="flex gap-3">

            <div className="bg-blue-600 p-2 rounded-full cursor-pointer">
              <Facebook size={18} />
            </div>

            <div className="bg-pink-500 p-2 rounded-full cursor-pointer">
              <Instagram size={18} />
            </div>

            <div className="bg-red-500 p-2 rounded-full cursor-pointer">
              <Youtube size={18} />
            </div>

            <div className="bg-blue-500 p-2 rounded-full cursor-pointer">
              <Linkedin size={18} />
            </div>

            <div className="bg-black p-2 rounded-full cursor-pointer">
              <Twitter size={18} />
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

  <ul className="space-y-2 text-gray-300">

    <li>
      <Link to="/" className="hover:text-blue-400">
        → Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-blue-400">
        → About
      </Link>
    </li>

    <li>
      <Link to="/services" className="hover:text-blue-400">
        → Services
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-blue-400">
        → Contact
      </Link>
    </li>

  </ul>
</div>
        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Information</h3>

          <div className="space-y-3 text-sm">

            <div className="flex gap-2">
              <MapPin size={18} className="text-blue-400" />
              <p>
                431, 4th Floor, Orbit Plaza Crossing Republik,
                Ghaziabad India, 201016
              </p>
            </div>

            <div className="flex gap-2">
              <Mail size={18} className="text-blue-400" />
              <p>info@anquest.in</p>
            </div>

            <div className="flex gap-2">
              <Phone size={18} className="text-blue-400" />
              <p>+91-9266140654</p>
            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Connected</h3>

          <p className="text-sm mb-3">Contact Us</p>

          <div className="flex">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg bg-[#0E2C4F] border border-gray-600 text-sm w-full"
            />

            <button className="bg-blue-600 px-4 rounded-r-lg text-white text-sm">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Bottom bar */}

      <div className="border-t border-gray-700 py-6 text-sm">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">

          <p>© 2026 aNquest. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link
               to="/privacy-policy"
               className="text-gray-400 hover:text-white">
                Privacy Policy
                  </Link>
               <Link to="/terms-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
                  <Link to="/sitemap" className="text-gray-400 hover:text-white" >Sitemap</Link>    
                        </div>

        </div>

      </div>

    </footer>
  )
}