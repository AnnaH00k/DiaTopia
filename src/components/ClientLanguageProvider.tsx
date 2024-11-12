'use client';

import { createContext, useContext, useState, useEffect, FC } from "react";

// Create a context for managing language state
const LanguageContext = createContext<{
  language: string;
  toggleLanguage: () => void;
} | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with a default language (e.g., "en") and add a loading state
  const [language, setLanguage] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(true); // Track if the language is loaded

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    setLoading(false); // After language is set, we stop the loading state
    
    // Add a class to make the content visible after the language is set
    document.body.classList.add("language-ready");
  }, []); // Run only once on initial load

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (loading) {
    // Render nothing or a loading indicator while waiting for language preference to load
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
