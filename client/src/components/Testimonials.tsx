import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const imgUrl = () => {
  const baseUrl = "/lovable-uploads/";
  return baseUrl;
}



const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Lisa Arora",
    image: imgUrl() + "BaddieFemaleFarmer.png",
    rating: 5,
    text: "Khetify has transformed my farming experience. The platform connects me with skilled professionals who provide valuable insights and support. I can now focus on what I love most - farming!",
  },
  {
    id: 2,
    name: "Rati Shankar",
    image: imgUrl() + "MaleFarmer.png",
    rating: 5,
    text: "Khetify has been a game-changer for my farm.",
  },
  {
    id: 3,
    name: "Samantha Sahu",
    image: imgUrl() + "FemaleFarmer.png",
    rating: 4,
    text: "Khetify has made it easy for me to find reliable help for my farm. The professionals I connected with were knowledgeable and helped me improve my yields significantly.",
  },
];

const starIcon = (
  <svg
    className="w-3 h-3 text-orange-500 inline-block ml-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.045 9.387c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.96z" />
  </svg>
);

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonialsData[activeIndex];

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-gray-700 text-xl  mb-4 relative inline-block">
        What Farmers Say
        <span className="block mt-2 h-[2px] bg-orange-300 w-20 mx-auto relative">
          <span className="absolute w-2 h-2 bg-orange-500 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </span>
      </h2>

      <div className="relative mt-12 flex justify-center items-center gap-16">
        {/* Left small testimonial */}
        <div className="relative hidden sm:flex items-center justify-center flex-col">
          <div className="relative">
            <img
              src={
                testimonialsData[
                  (activeIndex - 1 + testimonialsData.length) %
                    testimonialsData.length
                ].image
              }
              alt={`Photo of ${
                testimonialsData[
                  (activeIndex - 1 + testimonialsData.length) %
                    testimonialsData.length
                ].name
                }`}
              loading="lazy"
              className="rounded-full w-20 h-20 object-cover border border-gray-300"
            />
            <div className="absolute top-0 left-0 bg-white rounded-full shadow-md w-7 h-7 flex items-center justify-center text-xs font-semibold text-gray-700">
              {
                testimonialsData[
                  (activeIndex - 1 + testimonialsData.length) %
                    testimonialsData.length
                ].rating
              }
              {starIcon}
            </div>
          </div>
        </div>

        {/* Center big testimonial */}
        <div className="bg-gray-100 rounded-lg p-8 max-w-xl w-full relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <img
              src={active.image}
              alt={`Photo of ${active.name}`}
              loading="lazy"
              className="rounded-full w-24 h-24 object-cover border border-gray-300"
            />
            <div className="absolute top-0 left-0 bg-white rounded-full shadow-md w-7 h-7 flex items-center justify-center text-xs font-semibold text-gray-700">
              {
                testimonialsData[
                  (activeIndex + testimonialsData.length) %
                    testimonialsData.length
                ].rating
              }
              {starIcon}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-gray-700 font-serif text-xl mb-4">
              {active.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">{active.text}</p>
          </div>

          {/* Navigation arrows */}
          <div
            className="mt-6 flex justify-center gap-10 text-orange-500 cursor-pointer select-none text-2xl"
            aria-label="Testimonial navigation"
          >
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="hover:text-orange-600 transition"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="hover:text-orange-600 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Right small testimonial */}
        <div className="relative hidden sm:flex items-center justify-center flex-col">
          <div className="relative">
            <img
              src={
                testimonialsData[(activeIndex + 1) % testimonialsData.length]
                  .image
              }
              alt={`Photo of ${
                testimonialsData[(activeIndex + 1) % testimonialsData.length]
                  .name
                }`}
              loading="lazy"
              className="rounded-full w-20 h-20 object-cover border border-gray-300"
            />
            <div className="absolute top-0 left-0 bg-white rounded-full shadow-md w-7 h-7 flex items-center justify-center text-xs font-semibold text-gray-700">
              {
                testimonialsData[(activeIndex + 1) % testimonialsData.length]
                  .rating
              }
              {starIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
