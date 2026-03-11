import dashboard from "../assets/dashboard.png"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="bg-gray-200 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-10">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl font-bold leading-tight ">
       Smart Enterprise Solutions
        for Real Estate Businesses by <span>a<span className="text-blue-600">N</span>quest</span>
           </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Real Estate CRM is a powerful internal management solution
            designed for real estate agencies and brokerage firms.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
          <Link
           to="/getstarted"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow inline-block">
              Get started
               </Link>

            <Link
            to="/services"
            className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-200 inline-block">
            View services
             </Link>
             </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center ">
          <img
            src={dashboard}
              className="rounded-xl shadow-xl w-137.5"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero