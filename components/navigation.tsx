"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkClass = (page: string) => {
    return currentPage === page
      ? "text-green-600 font-semibold transform scale-105"
      : "text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105"
  }

  const setPage = (page: string) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center animate-slide-in-top">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">LAC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-800">Lanka Agro Consultancy</span>
              <p className="text-xs text-gray-500">Professional Agricultural Consultancy</p>
            </div>
            <span className="text-lg font-bold text-gray-800 sm:hidden">LAC</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 animate-slide-in-top">
            <button onClick={() => setCurrentPage("home")} className={navLinkClass("home")}>
              Home
            </button>
            <button onClick={() => setCurrentPage("services")} className={navLinkClass("services")}>
              Services
            </button>
            <button onClick={() => setCurrentPage("about")} className={navLinkClass("about")}>
              About
            </button>
            <button onClick={() => setCurrentPage("blog")} className={navLinkClass("blog")}>
              Insights
            </button>
            <button onClick={() => setCurrentPage("contact")} className={navLinkClass("contact")}>
              Contact
            </button>
            <button
              onClick={() => setCurrentPage("booking")}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 font-semibold transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t py-2 animate-fade-in-up">
            <button
              onClick={() => setPage("home")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => setPage("services")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => setPage("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => setPage("blog")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              Insights
            </button>
            <button
              onClick={() => setPage("contact")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => setPage("booking")}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white mx-4 rounded-lg mt-2 hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md"
            >
              Book Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
