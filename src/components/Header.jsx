import React, { useState } from 'react'
// import { a } from 'react-router-dom'
import { Leaf } from "lucide-react"

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
     <header className="fixed mb-56 z-50 w-full bg-black/30 backdrop-blur-sm">
        <div className="container mx-auhref px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold text-white">PlantPal Ltd</span>
          </div>

          
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-green-400 transition-colors"
            >
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
              Contact
            </a>
          </nav>

       
          <buthrefn
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="hrefggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </buthrefn>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm p-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
  )
}
