"use client";
import { useLanguage } from "./LanguageProvider";
import { Toggle } from "@lemonsqueezy/wedges";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <Toggle
      pressed={lang === "ar"}
      onPressedChange={toggleLanguage}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className="px-3 py-1 text-sm"
    >
      {lang === "ar" ? "English" : "العربية"}
    </Toggle>
  );
} 