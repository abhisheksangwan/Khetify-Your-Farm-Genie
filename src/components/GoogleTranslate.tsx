import React, { useEffect } from "react";

// Extend the Window interface to include googleTranslateElementInit
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    // Dynamically load Google Translate script
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    googleTranslateScript.async = true;
    document.body.appendChild(googleTranslateScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" className="mt-4"></div>;
};

export default GoogleTranslate;