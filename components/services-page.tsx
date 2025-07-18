"use client"

import { useEffect, useState } from "react"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      emoji: "🌿",
      title: "Organic Farming & Sustainability",
      description: "Comprehensive organic farming solutions for sustainable agriculture",
      features: [
        "Soil health assessment & fertility planning",
        "Organic input management & sourcing",
        "Non-chemical pest & disease control",
        "Sustainable farming system design",
        "Organic transition planning",
      ],
      delay: "delay-100",
    },
    {
      emoji: "🐓",
      title: "Livestock & Poultry Consultancy",
      description: "Expert guidance for profitable and sustainable livestock operations",
      features: [
        "Farm layout and infrastructure planning",
        "Nutrition and feeding strategies",
        "Health management protocols",
        "Cost-effective operations optimization",
        "Breeding program development",
      ],
      delay: "delay-200",
    },
    {
      emoji: "🌾",
      title: "Crop & Farm Planning",
      description: "Strategic planning for optimal crop production and farm management",
      features: [
        "Seasonal cropping plans & rotations",
        "Smart irrigation system design",
        "Integrated crop-livestock systems",
        "Climate-smart agriculture practices",
        "Yield optimization strategies",
      ],
      delay: "delay-300",
    },
    {
      emoji: "🌼",
      title: "Sustainable Gardening & Agro-Landscaping",
      description: "Creating productive and beautiful agricultural landscapes",
      features: [
        "Urban garden design & implementation",
        "Permaculture principles application",
        "Edible landscape development",
        "Vertical farming solutions",
        "Community garden projects",
      ],
      delay: "delay-400",
    },
    {
      emoji: "📜",
      title: "Organic Certification Support",
      description: "Complete support for organic certification processes",
      features: [
        "USDA Organic certification preparation",
        "EU Organic standards compliance",
        "Audit preparation & documentation",
        "Record keeping system setup",
        "Certification maintenance support",
      ],
      delay: "delay-500",
    },
    {
      emoji: "👨‍🌾",
      title: "Farm Consultations",
      description: "Personalized on-site and virtual farm advisory services",
      features: [
        "Comprehensive farm assessments",
        "Customized advisory reports",
        "Virtual consultation sessions",
        "Problem-solving & troubleshooting",
        "Performance monitoring & evaluation",
      ],
      delay: "delay-600",
    },
    {
      emoji: "🎓",
      title: "Training & Workshops",
      description: "Educational programs for farmers and agricultural professionals",
      features: [
        "Farmer training programs",
        "Youth in agriculture initiatives",
        "Women in agriculture programs",
        "School collaboration projects",
        "Technical skill development workshops",
      ],
      delay: "delay-100",
    },
  ]

  return (
    <div className="py-16 bg-gray-50 ag-pattern">
      {/* Floating Agricultural Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float delay-100">
          <div className="w-12 h-12 text-green-200 opacity-30">🌱</div>
        </div>
        <div className="absolute top-60 right-20 animate-float delay-300">
          <div className="w-16 h-16 text-green-300 opacity-20">🌾</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float delay-500">
          <div className="w-10 h-10 text-green-200 opacity-25">🌿</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Our Services
          </h1>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            Complete, customized solutions for sustainable agriculture. From organic farming to certification support,
            we provide comprehensive consultancy services for modern agricultural success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`premium-card rounded-xl shadow-lg p-8 hover-lift ${isVisible ? `animate-fade-in-up ${service.delay}` : "opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-4 animate-float">
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0 animate-grow"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section with Premium Animation */}
        <div
          className={`mt-16 gradient-green rounded-xl p-8 text-center shadow-xl hover-lift ${isVisible ? "animate-fade-in-up delay-700" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-green-100 mb-6 text-lg">
            Every farm is unique. Let us create a tailored consultancy package that meets your specific needs and goals.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
