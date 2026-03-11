import dashboard from "../assets/crm-dashboard.png"

const RealEstateCRM = () => {
  return (
    <section className="w-full bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-10">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={dashboard}
            alt="CRM Dashboard"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            Powerful <span className="text-blue-600">Real Estate CRM</span>
          </h2>

          <ul className="space-y-4 text-gray-600 text-lg">

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-4xl">•</span>
              Manage and organize all property listings from one centralized dashboard.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-4xl">•</span>
              Track leads efficiently and automate follow-ups to increase conversions.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-4xl">•</span>
              Monitor agent performance with real-time reports and analytics.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-4xl">•</span>
              Improve team productivity and close more deals with data-driven insights.
            </li>

          </ul>

        </div>

      </div>

    </section>
  )
}

export default RealEstateCRM