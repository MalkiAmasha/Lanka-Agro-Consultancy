"use client"

import { useEffect, useState } from "react"

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div>
      {/* Hero Section with Enhanced Floating Agricultural Elements */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 py-20 overflow-hidden ag-pattern">
        {/* Enhanced Floating Agricultural Elements with Invisible Circular Boundary */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Outer Circle - Top Quadrant */}
          <div className="absolute top-8 left-1/4 animate-float delay-100">
            <div className="w-14 h-14 text-green-300 opacity-20">🌱</div>
          </div>
          <div className="absolute top-12 left-1/3 animate-float delay-300">
            <div className="w-10 h-10 text-emerald-300 opacity-25">🌿</div>
          </div>
          <div className="absolute top-16 right-1/3 animate-float delay-500">
            <div className="w-12 h-12 text-green-400 opacity-18">🌾</div>
          </div>
          <div className="absolute top-10 right-1/4 animate-float delay-200">
            <div className="w-16 h-16 text-green-300 opacity-15">🍃</div>
          </div>

          {/* Outer Circle - Left Side */}
          <div className="absolute top-1/3 left-8 animate-float delay-400">
            <div className="w-12 h-12 text-green-200 opacity-22">🌿</div>
          </div>
          <div className="absolute top-1/2 left-12 animate-float delay-600">
            <div className="w-10 h-10 text-emerald-300 opacity-20">🌱</div>
          </div>
          <div className="absolute top-2/3 left-16 animate-float delay-800">
            <div className="w-14 h-14 text-green-400 opacity-18">🌾</div>
          </div>

          {/* Outer Circle - Right Side */}
          <div className="absolute top-1/3 right-8 animate-float delay-700">
            <div className="w-16 h-16 text-green-300 opacity-16">🍃</div>
          </div>
          <div className="absolute top-1/2 right-12 animate-float delay-900">
            <div className="w-12 h-12 text-emerald-400 opacity-22">🌿</div>
          </div>
          <div className="absolute top-2/3 right-16 animate-float delay-500">
            <div className="w-10 h-10 text-green-300 opacity-20">🌱</div>
          </div>

          {/* Outer Circle - Bottom Quadrant */}
          <div className="absolute bottom-16 left-1/4 animate-float delay-1000">
            <div className="w-12 h-12 text-green-400 opacity-18">🌾</div>
          </div>
          <div className="absolute bottom-12 left-1/3 animate-float delay-1200">
            <div className="w-14 h-14 text-emerald-300 opacity-20">🌿</div>
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float delay-800">
            <div className="w-10 h-10 text-green-300 opacity-25">🌱</div>
          </div>
          <div className="absolute bottom-14 right-1/4 animate-float delay-1100">
            <div className="w-16 h-16 text-green-400 opacity-15">🍃</div>
          </div>

          {/* Far Outer Elements for Extra Depth */}
          <div className="absolute top-4 left-4 animate-float delay-1300">
            <div className="w-8 h-8 text-green-200 opacity-12">🌿</div>
          </div>
          <div className="absolute top-6 right-4 animate-float delay-1400">
            <div className="w-10 h-10 text-emerald-200 opacity-14">🌱</div>
          </div>
          <div className="absolute bottom-4 left-4 animate-float delay-1500">
            <div className="w-12 h-12 text-green-300 opacity-16">🌾</div>
          </div>
          <div className="absolute bottom-6 right-4 animate-float delay-1600">
            <div className="w-8 h-8 text-green-200 opacity-18">🍃</div>
          </div>

          {/* Corner Accent Elements */}
          <div className="absolute top-20 left-20 animate-float delay-400">
            <div className="w-6 h-6 text-green-200 opacity-20">🌱</div>
          </div>
          <div className="absolute top-24 right-20 animate-float delay-600">
            <div className="w-8 h-8 text-emerald-300 opacity-15">🌿</div>
          </div>
          <div className="absolute bottom-20 left-20 animate-float delay-700">
            <div className="w-10 h-10 text-green-300 opacity-18">🌾</div>
          </div>
          <div className="absolute bottom-24 right-20 animate-float delay-900">
            <div className="w-6 h-6 text-green-200 opacity-22">🍃</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1
            className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <span className="text-green-600 inline-block">Rooted in Knowledge.</span>
            <br />
            <span className={`${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>Growing with Purpose.</span>
          </h1>
          <p
            className={`text-xl text-gray-600 mb-8 max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}
          >
            Lanka Agro Consultancy is a professional agricultural consultancy firm empowering farmers and agribusinesses
            with cutting-edge, eco-conscious, and profitable farming solutions rooted in sustainability and integrity.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}
          >
            <button
              onClick={() => setCurrentPage("booking")}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Book a Free Consultation
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* About Us Snapshot with Animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in-up">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
            Founded in 2025, Lanka Agro Consultancy is a youth-led consultancy firm supporting the next generation of
            farmers and agripreneurs. We promote sustainable farming systems through science, training, and innovation,
            connecting local expertise with global standards to strengthen Sri Lanka's agricultural sector.
          </p>
          <button
            onClick={() => setCurrentPage("about")}
            className="text-green-600 font-semibold hover:text-green-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300"
          >
            Learn More About Our Story →
          </button>
        </div>
      </section>

      {/* Core Services Preview with Staggered Animations */}
      <section className="py-16 bg-gray-50 ag-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Core Services</h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
              Complete, customized solutions for sustainable agriculture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🌿",
                title: "Organic Farming & Sustainability",
                description:
                  "Soil & fertility planning, organic input management, and eco-friendly pest control solutions.",
                delay: "delay-100",
              },
              {
                emoji: "🐓",
                title: "Livestock & Poultry Consultancy",
                description: "Farm layout planning, nutrition strategies, and cost-effective operations management.",
                delay: "delay-200",
              },
              {
                emoji: "🌾",
                title: "Crop & Farm Planning",
                description: "Seasonal cropping plans, smart irrigation systems, and integrated farming approaches.",
                delay: "delay-300",
              },
              {
                emoji: "🌼",
                title: "Sustainable Gardening",
                description: "Urban gardens, permaculture principles, and edible landscape design.",
                delay: "delay-400",
              },
              {
                emoji: "📜",
                title: "Organic Certification Support",
                description: "USDA/EU organic certification preparation, audit support, and documentation.",
                delay: "delay-500",
              },
              {
                emoji: "🎓",
                title: "Training & Workshops",
                description: "Farmer training, youth programs, and women in agriculture initiatives.",
                delay: "delay-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`premium-card p-6 rounded-xl shadow-lg hover-lift cursor-pointer animate-fade-in-up ${service.delay}`}
                onClick={() => setCurrentPage("services")}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Premium Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Why Choose Lanka Agro Consultancy?
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
              Our competitive advantages that set us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Tech-Savvy Approach",
                description:
                  "Youth-led consultancy leveraging modern technology and digital solutions for smart farming.",
                delay: "delay-100",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Certification Expertise",
                description:
                  "Specialized knowledge in organic certification processes and international standards compliance.",
                delay: "delay-200",
              },
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9",
                title: "Full-Spectrum Solutions",
                description:
                  "Complete consultancy services from planning to implementation across all agricultural sectors.",
                delay: "delay-300",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Global Network",
                description:
                  "Strong international connections and partnerships for knowledge exchange and market access.",
                delay: "delay-400",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Sustainability Focus",
                description:
                  "Committed to eco-friendly practices and sustainable agricultural development for future generations.",
                delay: "delay-500",
              },
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                title: "Educational Excellence",
                description:
                  "Comprehensive training programs and knowledge transfer initiatives for capacity building.",
                delay: "delay-600",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className={`text-center p-6 premium-card rounded-xl hover-lift animate-fade-in-up ${advantage.delay}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-grow">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={advantage.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Premium Design */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 ag-pattern">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">What Our Clients Say</h2>
          <div className="premium-card rounded-xl p-8 max-w-2xl mx-auto shadow-xl hover-lift animate-fade-in-up delay-200">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 animate-grow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4 text-lg">
              "Client testimonials and success stories will be featured here as we grow our client base and gather
              feedback from our agricultural consultancy services. We're committed to delivering exceptional results."
            </p>
            <p className="text-gray-500 text-sm">Testimonials coming soon...</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section with Premium Gradient */}
      <section className="relative gradient-green py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 animate-float delay-100">
            <div className="w-12 h-12 text-white opacity-10">🌱</div>
          </div>
          <div className="absolute bottom-10 right-10 animate-float delay-300">
            <div className="w-16 h-16 text-white opacity-10">🌾</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">Ready to Start Your Farm Journey?</h2>
          <p className="text-xl text-green-100 mb-8 animate-fade-in-up delay-200">
            Join the movement towards sustainable agriculture with Lanka Agro Consultancy
          </p>
          <button
            onClick={() => setCurrentPage("booking")}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up delay-300"
          >
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  )
}
