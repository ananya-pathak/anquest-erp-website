import aboutBg from "../assets/about.png"
import aboutImg from "../assets/about-bg.png"
import { Repeat } from "lucide-react"
import { Puzzle } from "lucide-react"
import { Users } from "lucide-react"
import WhatWeBuild from "../components/WhatWeBuild";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <section
         className="h-90 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${aboutBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

         <div className="relative text-center max-w-3xl px-6">

           <h1 className="text-4xl font-bold mb-4">
            About aNquest Pvt. Ltd.
          </h1>

          <p className="text-gray-200 mb-6">
            aNquest Pvt. Ltd. develops the aNquest Real Estate CRM platform,
            a specialized solution for real estate agencies, property dealers,
            and brokerage firms that manages property listings, client
            interactions, sales pipelines, and commission tracking — all in one
            powerful system.
          </p>
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
           <Users size={20} className="text-blue-600" />
             Internal Team Management
             </h3>

            <p className="text-gray-600">
              Improve collaboration between agents, brokers, and back-office
              teams to streamline communication and boost productivity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
             <Repeat size={20} className="text-blue-600" />
              Lead & Property Management
              </h3>

            <p className="text-gray-600">
              Smart lead assignment, automated follow-ups, and structured
              property listing management to improve coordination and increase
              conversions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Puzzle size={20} className="text-green-600" />
              Client & Inventory Management
                  </h3>

            <p className="text-gray-600">
              Manage client inquiries, site visits, deal progress, and real-time property inventory — all from one centralized dashboard.


            </p>
          </div>

        </div>
      </section>
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={aboutImg}
            alt="Real Estate CRM"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* OUR STORY */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Our Story
            </h3>

            <p className="text-gray-600">
              Real Estate CRM was built to simplify property management,
              lead tracking, and team coordination for modern real estate
              agencies. We noticed agencies struggling with scattered data,
              missed follow-ups, and manual reporting — so we created one
              powerful platform to centralize everything.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Our Mission
            </h3>

            <p className="text-gray-600">
              Our mission is to empower real estate businesses with smart,
              intuitive CRM tools that improve lead conversion, enhance
              team productivity, and provide clear data-driven insights
              to grow revenue and scale operations efficiently.
            </p>
          </div>

        </div>
      </div>
    </section>
    
       <WhatWeBuild />
      
   

    </div>
 

)
}