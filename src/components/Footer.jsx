import { Leaf } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#1c2a1c] text-white py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">PlantPal Ltd</span>
              </div>
              <p className="text-gray-400">Transforming agriculture with smart technology since 2020.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick as</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Email: info@plantpal.com</p>
              <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-400">Address: 123 Farm Road, Agritown, AG 12345</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PlantPal Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
