"use client";
import { useLanguage } from "./LanguageProvider";
import { Toggle } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  return (
    <Toggle
      pressed={lang === "ar"}
      onPressedChange={toggleLanguage}
      aria-label={lang === "ar" ? t("languageSwitcher.switchToEnglish") : t("languageSwitcher.switchToArabic")}
      className="px-3 py-1 text-sm"
    >
      {lang === "ar" ? t("languageSwitcher.english") : t("languageSwitcher.arabic")}
    </Toggle>
  );
} 