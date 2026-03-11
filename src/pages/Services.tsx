import servicesBg from "../assets/services-bg.jpg"
import { Link } from "react-router-dom"
import { Home } from "lucide-react"
import {RefreshCcw} from "lucide-react"
import {CalendarCheck} from "lucide-react"
import {Users}  from "lucide-react"

export default function Services() {

  const services = [
  {
    icon: <Home size={24} className="text-blue-600" />,
    title: "Real Estate CRM Overview",
    points: [
      "Centralized real estate operations dashboard",
      "Leads, properties & agent data in one system",
      "Real-time visibility across all projects & listings"
    ]
  },
  {
    icon: <RefreshCcw size={24} className="text-blue-600" />,
    title: "Lead & Property Management",
    points: [
      "Manage residential, commercial & rental properties",
      "Auto lead assignment with role-based access",
      "Property-wise performance & sales tracking"
    ]
  },
  {
    icon: <CalendarCheck size={24} className="text-blue-600" />,
    title: "Appointment & Site Visit Management",
    points: [
      "Agent-wise site visit scheduling",
      "Reduce delays with smart slot planning",
      "Status tracking: inquiry, visit scheduled, closed"
    ]
  },
  {
    icon: <Users size={24} className="text-blue-600" />,
    title: "Agent & Inventory Management",
    points: [
      "Agent profiles, roles & commission tracking",
      "Property inventory & availability monitoring",
      "Low-availability alerts & deal accountability"
    ]
  }
]

  return (
    <div>

      {/* HERO */}
      <div
        className="h-90 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center max-w-3xl px-6">

          <h1 className="text-4xl font-bold mb-4">
            aNquest Real Estate CRM Services
          </h1>

          <p className="text-gray-200 mb-6">
            Smart internal management solutions designed to streamline real estate
            operations, agent coordination, and property sales workflows.
          </p>

          <Link
  to="/contact"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg inline-block"
>
  Talk to our team
</Link>

        </div>

      </div>

      {/* SERVICES */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
  <div
    key={index}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
  >

    {/* ICON + TITLE */}
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-blue-100 p-2 rounded-lg">
        {service.icon}
      </div>

      <h3 className="font-semibold text-lg">
        {service.title}
      </h3>
    </div>

    {/* POINTS */}
    <ul className="space-y-2 text-gray-600 text-sm">
      {service.points.map((point, i) => (
        <li key={i}>✔ {point}</li>
      ))}
    </ul>

  </div>
))}

        </div>

      </section>

    </div>
  )
}