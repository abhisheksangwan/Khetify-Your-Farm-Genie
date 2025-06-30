import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// Declare the Google Translate object on the window for TypeScript
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any; // Google Translate object
    googleTranslateElementInit: () => void; // The global initialization function
  }
}

// Props Interface (remains the same)
interface LanguageSelectorProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

// Helper function to programmatically trigger Google Translate
const translatePage = (langCode: string) => {
  // Find the hidden Google Translate <select> element
  const googleSelectElement = document.querySelector(".goog-te-combo");

  // Ensure it's an HTMLSelectElement and exists
  if (googleSelectElement instanceof HTMLSelectElement) {
    googleSelectElement.value = langCode; // Set the desired language
    // Dispatch a 'change' event to tell Google Translate to update
    googleSelectElement.dispatchEvent(new Event("change"));
  } else {
    // This warning helps if the script hasn't loaded or the element isn't found
    console.warn("Google Translate widget element not found or not ready.");
  }
};

// LanguageButton Component (modified handleClick)
const LanguageButton = ({
  language,
  selectedLanguage,
  setSelectedLanguage,
}: {
  language: string;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}) => {
  const handleClick = () => {
    setSelectedLanguage(language); // Update your component's internal state
    const langCode = language === "English" ? "en" : "hi";
    translatePage(langCode); // Call the helper to trigger Google Translate
  };

  return (
    <Button
      variant={selectedLanguage === language ? "secondary" : "ghost"}
      size="sm"
      onClick={handleClick}
      className="text-white hover:text-green-600"
    >
      {language}
    </Button>
  );
};

// LanguageSelector Component (modified useEffect)
const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageSelectorProps) => {
  useEffect(() => {
    // This useEffect primarily sets the HTML lang attribute based on your state.
    // Google Translate handles the actual content translation.
    const htmlElement = document.documentElement;
    htmlElement.setAttribute(
      "lang",
      selectedLanguage === "Hindi" ? "hi" : "en"
    );
    htmlElement.dir = "ltr"; // Google Translate handles text direction internally for the translated content

    // Optional: If you want to force an initial translation based on `selectedLanguage` state
    // (e.g., if the user comes back to the site and you persist their language choice)
    // you might call translatePage here as well, but be careful with timing to ensure the Google script is loaded.
    // For simplicity, we are relying on user clicks to trigger translation.
  }, [selectedLanguage]); // Dependency array: run when selectedLanguage changes

  return (
    <div className="bg-green-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4">
          <span className="text-sm">Choose Language:</span>
          <LanguageButton
            language="English"
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <span className="text-white">/</span>
          <LanguageButton
            language="Hindi"
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
      </div>
    </div>
  );
};

// Removed the 'translations' object and the old content translation logic
// as Google Translate will now handle the entire page's content.
// const translations: Record<string, Record<string, string>> = { ... };

export default LanguageSelector;
