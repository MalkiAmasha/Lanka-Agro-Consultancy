"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Enhanced Floating Agricultural Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-float delay-100">
          <div className="w-16 h-16 text-green-200 opacity-20">🌱</div>
        </div>
        <div className="absolute top-96 right-20 animate-float delay-300">
          <div className="w-20 h-20 text-green-300 opacity-15">🌾</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float delay-500">
          <div className="w-14 h-14 text-green-200 opacity-25">🌿</div>
        </div>
        <div className="absolute top-1/2 right-8 animate-float delay-700">
          <div className="w-12 h-12 text-emerald-300 opacity-18">🍃</div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float delay-900">
          <div className="w-18 h-18 text-green-400 opacity-12">🌾</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Header with Premium Design */}
        <div className="text-center mb-16">
          <div className={`inline-block mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <span className="text-3xl">🌱</span>
            </div>
          </div>
          <h1
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            About <span className="text-green-600">Lanka Agro</span>
          </h1>
          <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            <p className="text-2xl text-green-600 font-semibold mb-4">"Rooted in Knowledge. Growing with Purpose."</p>
            <p className="text-xl text-gray-600">
              Empowering the future of sustainable agriculture through innovation, expertise, and unwavering commitment
              to excellence.
            </p>
          </div>
        </div>

        {/* Mission & Vision with Enhanced Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className={`group ${isVisible ? "animate-fade-in-left delay-400" : "opacity-0"}`}>
            <div className="premium-card rounded-2xl p-8 hover-lift h-full bg-gradient-to-br from-white to-green-50 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower farmers and agribusinesses with cutting-edge, eco-conscious, and profitable farming solutions
                rooted in sustainability and integrity. We bridge the gap between traditional wisdom and modern
                innovation.
              </p>
              <div className="mt-6 flex items-center text-green-600 font-semibold">
                <span>Empowering Agriculture</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className={`group ${isVisible ? "animate-fade-in-right delay-500" : "opacity-0"}`}>
            <div className="premium-card rounded-2xl p-8 hover-lift h-full bg-gradient-to-br from-white to-emerald-50 border border-emerald-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the global leader in sustainable agricultural consultancy, championing organic principles and
                modern methodologies to nourish communities and protect our planet for future generations.
              </p>
              <div className="mt-6 flex items-center text-emerald-600 font-semibold">
                <span>Global Leadership</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Story Section */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-12 text-center ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}
          >
            The Story Behind LAC
          </h2>
          <div className={`max-w-5xl mx-auto ${isVisible ? "animate-fade-in-up delay-700" : "opacity-0"}`}>
            <div className="premium-card rounded-2xl p-10 hover-lift bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-green-200 shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Founded 2025</h3>
                  <p className="text-gray-600">Youth-Led Initiative</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Global Standards</h3>
                  <p className="text-gray-600">Local Expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Sustainable Future</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Lanka Agro Consultancy (LAC) was founded in 2025 with a revolutionary vision: to strengthen Sri
                  Lanka's agricultural sector through tailored, sustainable, and science-based consultancy that bridges
                  traditional wisdom with cutting-edge innovation.
                </p>
                <p>
                  Our journey began when a group of passionate young agriculture professionals recognized the urgent
                  need for modern, sustainable farming solutions. We saw farmers struggling with outdated practices,
                  climate challenges, and market access issues, while having tremendous potential for growth.
                </p>
                <p className="text-green-700 font-semibold bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                  Today, LAC isn't just a consultancy — it's a movement. We're leading the transformation from
                  conventional to conscious agriculture, creating a sustainable future where farming thrives in harmony
                  with nature.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Founders Section */}
        <div className="mb-20">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 text-center ${isVisible ? "animate-fade-in-up delay-800" : "opacity-0"}`}
          >
            Meet Our Visionary Founders
          </h2>
          <p
            className={`text-xl text-gray-600 text-center mb-12 ${isVisible ? "animate-fade-in-up delay-900" : "opacity-0"}`}
          >
            The passionate leaders driving agricultural innovation in Sri Lanka
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder - Imantha Sewmina */}
            <div className={`group ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              <div className="premium-card rounded-2xl p-8 hover-lift text-center h-full bg-gradient-to-br from-white to-green-50 border border-green-100">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-4xl font-bold text-white">IS</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Imantha Sewmina</h3>
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Founder & CEO
                  </span>
                </div>
                <p className="text-green-600 font-semibold mb-3">+94-719265520</p>
                <p className="text-gray-600 leading-relaxed">
                  Agricultural engineer and sustainability visionary leading LAC's mission for eco-conscious farming
                  solutions and organic certification expertise across Sri Lanka.
                </p>
              </div>
            </div>

            {/* Co-Founder - Awantha Bandara */}
            <div className={`group ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
              <div className="premium-card rounded-2xl p-8 hover-lift text-center h-full bg-gradient-to-br from-white to-emerald-50 border border-emerald-100">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-4xl font-bold text-white">AB</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Awantha Bandara</h3>
                <div className="mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Co-Founder & Co-CFO
                  </span>
                </div>
                <p className="text-emerald-600 font-semibold mb-3">+94-714090757</p>
                <p className="text-gray-600 leading-relaxed">
                  Strategic business leader and financial expert driving LAC's growth strategy while ensuring
                  sustainable operations and profitable agricultural solutions.
                </p>
              </div>
            </div>

            {/* Co-Founder - Koshitha Tharaka with Green Theme */}
            <div className={`group ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
              <div className="premium-card rounded-2xl p-8 hover-lift text-center h-full bg-gradient-to-br from-white to-green-50 border border-green-100">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full border-4 border-green-200 group-hover:border-green-300 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                    <Image
                      src="/images/koshitha-tharaka.png"
                      alt="Koshitha Tharaka - Co-Founder & Co-CFO"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      sizes="128px"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Koshitha Tharaka</h3>
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Co-Founder & Co-CFO
                  </span>
                </div>
                <p className="text-green-600 font-semibold mb-3">+123-456-7890</p>
                <p className="text-gray-600 leading-relaxed">
                  Technology and operations specialist focused on innovative farming systems, digital solutions, and
                  ensuring exceptional client service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div
          className={`gradient-green-light rounded-2xl p-12 shadow-xl ${isVisible ? "animate-fade-in-up delay-1000" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Sustainability",
                description: "Committed to eco-friendly practices that protect our environment for future generations.",
                delay: "delay-100",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation",
                description: "Embracing cutting-edge technology and modern methodologies in agricultural practices.",
                delay: "delay-200",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Integrity",
                description: "Maintaining the highest standards of honesty and transparency in all our services.",
                delay: "delay-300",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Empowerment",
                description: "Empowering farmers and communities with knowledge, skills, and sustainable solutions.",
                delay: "delay-400",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`group text-center premium-card rounded-xl p-6 hover-lift animate-fade-in-up ${value.delay} bg-white border border-gray-200`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-grow group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up delay-1100" : "opacity-0"}`}>
          <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100 hover-lift">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Agricultural Journey?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join us in creating a sustainable future for agriculture. Our expert team is ready to provide you with
                personalized solutions that drive real results for your farming operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Your Free Consultation
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
                  Learn More About Our Services
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                ✓ Free initial consultation ✓ Personalized recommendations ✓ Expert agricultural guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
