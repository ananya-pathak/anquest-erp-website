import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturesSlider() {

  const features = [
    {
      title: "Lead Management",
      points: [
        "Saare leads ek jagah manage karo",
        "Lead source track (Facebook, Website, WhatsApp)",
        "Lead status manage (New, Follow-up, Closed)"
      ]
    },
    {
      title: "Auto Follow-up & Reminders",
      points: [
        "Automatic reminders system",
        "Follow-up miss na ho notification",
        "Daily task list visible"
      ]
    },
    {
      title: "Team Performance Tracking",
      points: [
        "Leads handling tracking",
        "Conversion rate monitoring",
        "Sales performance dashboard"
      ]
    },
    {
      title: "Client Management",
      points: [
        "Client history tracking",
        "Document storage",
        "Communication tracking"
      ]
    }
  ]

  

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    if (current >= features.length - 3) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(features.length - 3)
    } else {
      setCurrent(current - 1)
    }
  }
  
  

  return (
    <section className="py-20 bg-[#d8f2f5]">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold">
          Powerful <span className="text-blue-600">Features</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Smart, scalable tools crafted to streamline real estate workflows
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>


        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.slice(current, current + 3).map((feature, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-3">
                {feature.title}
              </h3>

              <ul className="text-gray-500 text-sm space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>


        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
        >
          <ChevronRight size={20} />
        </button>

      </div>


      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-10">
  {features.map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrent(index)}
      className={`h-2 rounded-full cursor-pointer transition-all duration-300
        ${current === index ? "bg-blue-600 w-6" : "bg-gray-300 w-2"}`}
    />
  ))}
</div>

    </section>
  )
}