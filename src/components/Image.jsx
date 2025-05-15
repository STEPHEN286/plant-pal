import React from 'react'

export default function Image() {
  return (
       <section className="py-16 md:py-20 relative  overflow-hidden">
          <div className="absolute inset-0 z-0 h-full">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Agricultural technology"
            
              className="object-cover h-full"
            />
            <div className="absolute inset-0 bg-black/60 h-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 md:mb-6 text-white">
                  Modern Solutions for Agricultural Challenges
                </h2>
                <p className="text-base md:text-lg text-white/80 mb-6">
                  Our technology helps farmers increase yields, reduce water usage, and make data-driven decisions.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Reduce water consumption by up to 30%",
                    "Increase crop yields through optimized care",
                    "Prevent disease and pest issues before they spread",
                    "Save time with automated monitoring and alerts",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-white">
                      <svg
                        className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mt-8 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1681372190756-6626691159fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Smart farming technology"
                  
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
  )
}
