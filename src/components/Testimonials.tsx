
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AgriLink made it so easy to get field help during my sowing season.",
      author: "Farmer from Dehradun",
      rating: 5,
    },
    {
      quote: "The agri students were well-trained and respectful, and my yield increased this time.",
      author: "Farmer from Banaras",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">What Our Farmers Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real testimonials from farmers who have experienced the AgriLink difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-800 font-semibold">- {testimonial.author}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
