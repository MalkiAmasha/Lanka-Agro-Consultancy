"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import ServicesPage from "@/components/services-page"
import AboutPage from "@/components/about-page"
import BlogPage from "@/components/blog-page"
import ContactPage from "@/components/contact-page"
import BookingPage from "@/components/booking-page"
import Footer from "@/components/footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="pt-16">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "blog" && <BlogPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "booking" && <BookingPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
