import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("|");
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
    <section
      className="relative bg-white"
      style={{
        height: "100vh", // Ensure the section takes up the full viewport height
        backgroundImage: `url('public/lovable-uploads/file_00000000338061f5974f81934af213f0.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {displayedText}
          </h1>
          <p className="text-lg md:text-xl">
            Empowering farmers with technology for sustainable agriculture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
