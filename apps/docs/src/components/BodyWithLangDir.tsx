"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { ReactNode, useEffect, useRef } from "react";

export default function BodyWithLangDir({ children }: { children: ReactNode }) {
  const { lang, dir } = useLanguage();
  const bodyRef = useRef<HTMLBodyElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.setAttribute("dir", dir);
      bodyRef.current.setAttribute("lang", lang);
    }
  }, [lang, dir]);

  return (
    <body ref={bodyRef}>
      {children}
    </body>
  );
} 