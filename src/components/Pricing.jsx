import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 relative">
    
      <div className="absolute inset-0 z-0 h-full">
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Agricultural field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
      </div>


      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-white/80">
            Choose the plan that fits your farming needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Small Farm",
              price: "$9.99",
              description: "Perfect for small farms and gardens",
              features: [
                "Up to 5 sensors",
                "Basic irrigation automation",
                "Mobile app access",
                "Email support",
              ],
            },
            {
              name: "Medium Farm",
              price: "$19.99",
              description: "Ideal for medium-sized operations",
              features: [
                "Up to 15 sensors",
                "Advanced irrigation system",
                "Climate monitoring",
                "Crop health analytics",
                "Priority support",
              ],
              highlighted: true,
            },
            {
              name: "Commercial",
              price: "$39.99",
              description: "For large commercial operations",
              features: [
                "Unlimited sensors",
                "Complete automation system",
                "Advanced analytics and reporting",
                "Multi-field management",
                "24/7 dedicated support",
                "API access",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 ${
                plan.highlighted
                  ? "border-2 border-green-600 shadow-lg"
                  : "border border-green-100"
              }`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600"> / month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
