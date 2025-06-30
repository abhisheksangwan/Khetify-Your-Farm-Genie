
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
          
          <div className="">
            <img
              src="/lovable-uploads/104325f3-15c0-4e4b-a8fe-a650467c2f97.png"
              alt="AgriLink Platform - Farmers connecting through technology"
              className="bg-fixed mx-auto max-w-2xl w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
