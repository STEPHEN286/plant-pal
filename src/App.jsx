

import Cta from "./components/CTA"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Image from "./components/Image"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"


function App() {


  return (
    <>
     <Header />
     <main>
      <Hero />
      <Feature />
      <Image />
      <Testimonial />
      <Cta />
      <Pricing />
     </main>
     <Footer />
    </>
  )
}

export default App
