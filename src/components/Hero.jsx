import React from 'react'

export default function Hero() {
  return (
     <section className="relative h-[400px] md:h-screen flex items-center justify-center overflow-hidden">
         
          <div className="absolute inset-0 ">
      <div className="absolute inset-0 bg-black/70"></div>
      <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover`}
          >
            <source src="https://videos.pexels.com/video-files/2758322/2758322-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className=" space-y-5 flex flex-col justify-center items-center ">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your Garden
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                Experience the power of smart plant care with our innovative system.
              </p>
              <div className="pt-4 flex gap-3">
                <a href='#features' className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">
                  Feature
                </a>
                <a href='#contact' className=" border border-white hover:border-green-700 text-white px-6 py-3 rounded-md font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          </div>


          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
  )
}
