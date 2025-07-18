import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("Welcome to Khetify.");
  const fullText = "Welcome to Khetify.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = fullText.length; // Ensure the text doesn't reset to blank
      }
    }, 150); // Adjust speed here (150ms per character)

    return () => clearInterval(interval);
  }, []);

  const renderDescription = () => {
    const descriptions = [
      "A platform that bridges the gap between farmers and buyers by connecting them directly for transparent transactions.",
      "With Khetify, the farming process becomes simpler, from farm to home, ensuring fresh produce and better income for farmers.",
    ];

    return descriptions.map((text, index) => (
      <span key={index} className="text-2xl font-semibold mb-2 block">
        {text}
      </span>
    ));
  };

  return (
    <section
      className="relative bg-white"
      style={{
        height: "100vh", // Ensure the section takes up the full viewport height
        backgroundImage: `url('lovable-uploads/CoverPicWomen.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 top-40 text-4xl md:text-6xl lg:text-6xl font-bold text-green-500">
        {displayedText}
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="text-left text-green-100 ">
          <p className="text-lg md:text-xl mb-8 top-3 w-1/2">
            {renderDescription()}
          </p>
          <span className="flex flex-wrap justify-left   gap-14 mb-8 top-2 w-1/2  ">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-green-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Call To Action
            </button>
            
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
