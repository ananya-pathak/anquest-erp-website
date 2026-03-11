import { FileText } from "lucide-react"
import { useState } from "react"
import termsBg from "../assets/terms-bg.png"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the aNquest Real Estate CRM platform Service, you acknowledge that it is purpose-built for real estate agencies, brokers, and property management firms and that you are an authorized representative of your organization. Continued use constitutes agreement to these Terms.",
  },
  {
    title: "2. Use License",
    content:
      "Subject to compliance with these Terms, aNquest grants you a limited, revocable, nonexclusive, nontransferable license to access and use the Service for your internal business operations. You may not sublicense, modify, reverse engineer, or redistribute the Service.",
  },
  {
    title: "3. User Account",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized access.",
  },
  {
    title: "4. User Responsibilities",
    content:
      "Users must provide truthful and accurate information, comply with all applicable real estate laws and regulations when entering client and property data, and refrain from uploading prohibited or misleading content. You agree to use the Service in good faith.",
  },
  {
    title: "5. Access & Billing",
    content:
      "Access to paid features requires a subscription. Fees are billed in advance and are non‑refundable unless otherwise stated. We may suspend access for non‑payment.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "The Service and all content, trademarks, trade secrets and software are owned by aNquest Pvt. Ltd. or its licensors. No rights are granted other than the limited license above.",
  },
  {
    title: "7. Data Ownership",
    content:"You retain ownership of the data you enter into the Service. aNquest claims no rights to your data except as necessary to provide the Service.",
  },
  {
    title:"8. Service Availability",
    content:"We strive to maintain the Service but do not guarantee it will be uninterrupted or error‑free. We may perform maintenance, resulting in temporary outages.",
  },
  {
    title:"9. Suspension & Termination",
    content:"We may suspend or terminate your access if you violate these Terms or for other business reasons. You may also terminate your account by contacting us; account data may be deleted according to our data retention policy.",
  },
  {
    title:"10. Limitation of Liability",
    content:"To the fullest extent permitted by law, aNquest Pvt. Ltd. will not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of the Service.",
  }
]

export default function TermsConditions() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>

      {/* HERO */}
      <div
        className="h-87.5 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${termsBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center">
          <FileText className="mx-auto mb-3" size={40} />
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm">Home / Terms & Conditions</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* QUICK NAVIGATION */}
        <div className="bg-gray-100 rounded-xl p-6 h-fit sticky top-24">
          <h3 className="font-semibold mb-4">Quick Navigation</h3>

          <ul className="space-y-3 text-blue-600 text-sm">
            {sections.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setOpen(index)

                  const el = document.getElementById(`section-${index}`)

                  if (el) {
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* TERMS SECTIONS */}
        <div className="md:col-span-3 space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
              className="border rounded-xl p-6 bg-white shadow-sm"
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                <h3 className="font-semibold">{section.title}</h3>
                <span className="text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </div>

              {open === index && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}