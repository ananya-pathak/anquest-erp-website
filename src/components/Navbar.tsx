import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 h-10">
          <img src={logo} className="h-20" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">

          <Link to="/" className="text-black">
            Home
          </Link>

          <Link to="/about" className="hover:text-black">
            About
          </Link>

          <Link to="/services" className="hover:text-black">
            Services
          </Link>

          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>

        </div>

        {/* Button */}
        <Link to="/getstarted">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            Get started
          </button>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar