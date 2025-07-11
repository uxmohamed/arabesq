"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import i18n from "@/lib/i18n";

interface LanguageContextProps {
  lang: "ar" | "en";
  dir: "rtl" | "ltr";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Optionally, persist language in localStorage
  const [lang, setLang] = useState<"ar" | "en">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as "ar" | "en") || "ar";
    }
    return "ar";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  const dir = lang === "ar" ? "rtl" : "ltr";

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}; 