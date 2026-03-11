import { Shield } from "lucide-react"
import { useState } from "react"
import privacypolicyBg from "../assets/privacypolicy.png"

const sections = [
  {
    title: "1. Introduction",
    content:
      "aNquest Pvt. Ltd. (“aNquest”, “we”, “our”, or “us”) develops and operates the aNquest Real Estate CRM platform for real estate agencies, brokers, and property management firms. This Privacy Policy explains how personal data is collected, used, stored, and protected when users interact with our platform.",
  },
  {
    title: "2. Scope & Applicability",
    content:
      "This Privacy Policy applies to all users of our CRM platform, website, and services. It explains how we process data collected through our services.",
  },
  {
    title: "3. Information We Collect",
    content:
      "We may collect personal data such as name, email address, phone number, business details, and usage information when you interact with our platform.",
  },
  {
    title: "4. Purpose of Processing",
    content:
      "We process personal data to provide CRM services, improve functionality, ensure security, and communicate with users.",
  },
  {
    title: "5. Lawful Basis of Processing",
    content:
      "We process personal data based on contractual necessity, legitimate interests, and legal obligations.",
  },
  {
    title: "6. Data Security",
    content:
      "We implement technical and organizational security measures to protect personal data from unauthorized access, loss, or misuse.",
  },
  {
    title: "7.Data Sharing & Disclosure",
    content:
    "Data is shared strictly within the organization or with trusted vendors under confidentiality agreements, or where legally required."
  },
  {
    title: "8. Data Retention",
    content:
    "Data is retained only as long as required for operational and legal purposes and securely deleted thereafter."
 },
  {
    title: "9.Your Rights",
    content:
    "Users may request access, correction, or deletion of their personal data subject to applicable laws and company policies."
 },
 {
    title: "10. Cookies & Tracking",
    content:
    "Internal systems may use cookies or session tracking for authentication and system performance monitoring."
 },
 {
    title: "11. Third-Party Services",
    content:
    "Our platforms may integrate third-party services for internal operations. We are not responsible for their privacy practices"
 },
 {
    title: "12. Children's Privacy",
    content:
    "Our systems are not intended for use by children and do not knowingly collect children’s personal information."
 },
 {
    title: "13.Updates to This Policy",
    content:
    "This policy may be updated periodically. Any changes will be reflected on this page with an updated effective date."
 },
 {
    title: "14.Grievance Redressal Officer",
    content: "Grievance Officer: aNquest Privacy Email: info@anquest.in Address: 431, 4th Floor, Orbit Plaza Crossing Republik, Ghaziabad India, 201016"
 },
]

export default function PrivacyPolicy() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>

      {/* HERO */}
      <div
        className="h-87.5 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${privacypolicyBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center">
          <Shield className="mx-auto mb-3" size={40} />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm">Home / Privacy Policy</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* QUICK NAV */}
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

        {/* POLICY SECTIONS */}
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