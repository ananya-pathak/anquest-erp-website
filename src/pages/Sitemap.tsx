import { Link } from "react-router-dom"
import {
  Home,
  Info,
  Wrench,
  Phone,
  Shield,
  FileText
} from "lucide-react"

import sitemapBg from "../assets/sitemap-bg.jpg"

const pages = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Wrench },
  { name: "Contact", path: "/contact", icon: Phone },
  { name: "Privacy Policy", path: "/privacy-policy", icon: Shield },
  { name: "Terms & Conditions", path: "/terms-conditions", icon: FileText },
]

export default function Sitemap() {
  return (
    <div>

      {/* HERO */}
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${sitemapBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center">
          <h1 className="text-4xl font-bold">Sitemap</h1>
          <p className="mt-2 text-sm">Home / Sitemap</p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {pages.map((page, index) => {
          const Icon = page.icon

          return (
            <Link
              key={index}
              to={page.path}
              className="bg-gray-100 rounded-xl p-10 text-center shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <Icon
                size={40}
                className="mx-auto text-blue-600 mb-4"
              />

              <h3 className="font-semibold text-lg">
                {page.name}
              </h3>
            </Link>
          )
        })}

      </div>

    </div>
  )
}