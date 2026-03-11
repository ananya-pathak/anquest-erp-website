import getStartedBg from "../assets/getstarted.png"
import { Users, LayoutGrid, Calendar } from "lucide-react"

export default function GetStarted() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${getStartedBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started with <span className="text-blue-500">aNquest CRM</span>
          </h1>

          <p className="text-gray-200 mb-8">
            Launch your Real Estate CRM today. Manage property listings,
            track leads, automate follow-ups, and monitor your sales team
            performance — all from one powerful dashboard.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
            Request a Demo
          </button>
        </div>
      </section>


      {/* POWERFUL FEATURES */}
      <section className="bg-[#eef5f6] py-20 px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>

          <p className="text-gray-500 mt-3">
            Smart insights and metrics that give real estate agencies
            complete operational clarity
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 flex gap-4  
                transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <div className="bg-blue-100 p-5 rounded-lg transition hover:bg-blue-600">
              <Users className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Lead Management</h3>
              <p className="text-gray-500 text-sm">
                Track inquiries, follow-ups, and conversion stages.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 flex gap-4 
                transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">

             <div className="bg-pink-100 p-5 rounded-lg transition hover:bg-pink-200">
              <LayoutGrid className="text-pink-500" />
               </div>

               <div>
             <h3 className="font-semibold text-lg">Inventory Coordination</h3>
              <p className="text-gray-500 text-sm">
                 Organize residential and commercial listings efficiently.
                  </p>
               </div>

            </div>


          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 flex gap-4
             transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <div className="bg-blue-100 p-5 rounded-lg transition hover:bg-blue-600">
              <Calendar className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Appointment Handling</h3>
              <p className="text-gray-500 text-sm">
                Manage site visits and meetings across company units.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT FORM */}
     <section className="bg-[#eef5f6] py-20 px-6">
  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-10">

    <h2 className="text-2xl font-bold text-gray-800 mb-8">
      Get in touch
    </h2>

    <form className="space-y-6">

      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-gray-600">Your name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>


      {/* Phone */}
      <div>
        <label className="text-sm text-gray-600">Phone</label>
        <input
          type="text"
          placeholder="10 digit number"
          className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      {/* Message */}
      <div>
        <label className="text-sm text-gray-600">Message</label>
        <textarea
          rows={5}
          placeholder="Your message"
          className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>


      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
      >
        Send
      </button>

    </form>

  </div>
</section>

    </div>
  )
}