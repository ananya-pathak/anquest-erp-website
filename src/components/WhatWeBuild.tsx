import { Building2, ClipboardList, BarChart3 } from "lucide-react";

export default function WhatWeBuild() {
  const modules = [
    {
      icon: <Building2 size={28} />,
      title: "CRM & Agent Management",
      desc: "Centralized CRM system to assign leads, manage agents, track follow-ups, and streamline internal communication.",
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Lead & Property Pipeline",
      desc: "Manage listings, monitor site visits, track deal stages, and automate follow-ups to improve conversions.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Dashboards & Revenue Insights",
      desc: "Advanced dashboards to monitor sales performance, commission tracking, and business growth.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          What We Build
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Purpose-built modules designed specifically for real estate agencies,
          brokers, and property management teams.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-gray-600">
                {module.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3">
                {module.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {module.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}