"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

// 1. განვსაზღვროთ რა ტიპის მონაცემებს ინახავს კონტექსტი
type LanguageType = "KA" | "EN" | "RU"

interface LanguageContextType {
  lang: LanguageType
  setLang: (lang: LanguageType) => void
}

// 2. შევქმნათ კონტექსტი
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 3. შევქმნათ პროვაიდერი, რომელიც შეფუთავს მთელ საიტს
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageType>("KA")

  // (სურვილისამებრ) შეგვიძლია დავიმახსოვროთ მომხმარებლის არჩევანი ბრაუზერში
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") as LanguageType
    if (savedLang && (savedLang === "KA" || savedLang === "EN" || savedLang === "RU")) {
      setLang(savedLang)
    }
  }, [])

  const handleSetLang = (newLang: LanguageType) => {
    setLang(newLang)
    localStorage.setItem("selectedLanguage", newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 4. შევქმნათ Hook, რომელსაც ყველა სექციაში გამოვიყენებთ
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}