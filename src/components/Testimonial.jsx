import { MessageSquare } from 'lucide-react'


export default function Testimonial() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-[#f8f9f2]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
              <p className="text-base md:text-lg text-gray-600">
                Join thousands of satisfied farmers who have transformed their agricultural practices
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "PlantPal has completely transformed my farm. My crops have never looked healthier!",
                  name: "Sarah Johnson",
                  title: "Organic Farmer",
                },
                {
                  quote: "As a commercial grower, I rely on PlantPal to monitor multiple fields efficiently.",
                  name: "Michael Chen",
                  title: "Commercial Grower",
                },
                {
                  quote: "The water savings alone paid for the system within the first season.",
                  name: "Emma Rodriguez",
                  title: "Vineyard Owner",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg border border-green-100 p-6">
                  <div className="flex items-start mb-4">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-2 mt-1" />
                    <span className="font-bold">Testimonial</span>
                  </div>
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>  
  )
}
