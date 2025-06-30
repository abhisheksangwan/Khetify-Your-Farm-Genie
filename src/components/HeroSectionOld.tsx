
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "A Smart Ops Platform for the Future of Farming";
    useEffect(() => {
      let index = 0;
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayedText(fullText.slice(0, index));
          index++;
          if (index > fullText.length) {
            index = 0; // Reset index to start animation again
          }
        }, 100); // Adjust speed here (100ms per character)

        return () => clearInterval(interval);
      }, 1000); // Wait for 3 seconds before starting

      return () => clearTimeout(timer);
    }, []);

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4 min-h-[120px] md:min-h-[160px]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Tagline */}
          <div className="mb-6 animate-slide-up">
            <p className="text-2xl md:text-3xl font-semibold text-green-700 mb-2">
              "Kisan ki zarurat, Khetify ka farz!"
            </p>
            <p className="text-lg md:text-xl text-green-600 italic">
              The farmer's need, Khetify's duty.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in">
            Khetify connects farmers with trained workforce associates for
            timely, task-based farm support — from Sowing to Harvesting. It also
            creates income and learning opportunities for rural youth, fostering
            skill development and local jobs.
          </p>

          <div className="mb-16 animate-scale-in">
            <img
              src="/lovable-uploads/104325f3-15c0-4e4b-a8fe-a650467c2f97.png"
              alt="Khetify Platform - Farmers connecting through technology"
              className="mx-auto max-w-2xl w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
