import { MapPin, Mail, Phone, Clock } from "lucide-react";
import contactBg from "../assets/contact.png";

export default function Contact() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{
          backgroundImage: `url('${contactBg}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-200">
            We'd love to hear from you. Tell us about your project.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Request Services</h2>

            <p className="text-gray-500 mb-6">
              Tell us what service you need and we'll recommend the best plan.
            </p>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-600">Your name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="10 digit number"
                  pattern="[1-9]{1}[0-9]{9}"
                  maxLength={10}
                  required
                  className="w-full mt-1 border rouunded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full">
                Submit Request
              </button>
            </form>
          </div>

          {/* OFFICE INFO */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Office</h3>

              <div className="flex gap-3 text-gray-600 mb-3">
                <MapPin size={20} />
                <p>
                  431, 4th Floor, Orbit Plaza Crossing Republik, Ghaziabad
                  India, 201016
                </p>
              </div>

              <div className="flex gap-3 text-blue-500 mb-2">
                <Mail size={20} />
                <p>info@anquestmedia.com</p>
              </div>

              <div className="flex gap-3 text-gray-600 mb-4">
                <Phone size={20} />
                <p>+91 76782 79151</p>
              </div>

              <div className="flex gap-3 text-gray-600">
                <Clock size={20} />
                <p>Mon – Fri: 09:30 – 18:30 IST</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Where to find us</h3>

              <a
                href="https://maps.google.com"
                className="text-blue-500 font-medium"
              >
                Map & Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
