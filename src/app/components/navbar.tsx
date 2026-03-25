"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../LanguageContext"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  
  const { lang, setLang: setCurrentLang } = useLanguage()
  
  const currentLang = (mounted ? (lang || 'KA') : 'KA') as 'KA' | 'EN' | 'RU'

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const content: any = {
    KA: { products: "პროდუქტები", partners: "პარტნიორები", about: "ჩვენს შესახებ", contact: "საკონტაქტო" },
    EN: { products: "Products", partners: "Partners", about: "About Us", contact: "Contact" },
    RU: { products: "Продукты", partners: "Партнеры", about: "О нас", contact: "Контакт" }
  }

  const safeLang = content[currentLang] ? currentLang : 'KA'

  const navLinks = [
    { name: content[safeLang].products, href: "#products" },
    { name: content[safeLang].partners, href: "#partners" },
    { name: content[safeLang].about, href: "#about" },
    { name: content[safeLang].contact, href: "#contact" },
  ]

  const languages = [
    { code: 'KA', label: 'GEORGIAN' },
    { code: 'EN', label: 'ENGLISH' },
    { code: 'RU', label: 'RUSSIAN' }
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-12 lg:px-20 flex items-center justify-between transition-all duration-500 text-white ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-lg py-4 shadow-xl border-b border-white/5" 
            : "bg-transparent py-10 md:py-14"
        }`}
      >
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* მარცხენა მენიუ */}
        <div className="hidden md:flex flex-1 gap-10 lg:gap-14 justify-start items-center font-bold text-[13px] lg:text-[14px] tracking-[0.25em] uppercase whitespace-nowrap">
          <Link href="#products" className="group relative py-2.5 px-7">
            <span className="relative z-10">{content[safeLang].products}</span>
            <div className="absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
          </Link>
          <Link href="#partners" className="group relative py-2.5 px-7">
            <span className="relative z-10">{content[safeLang].partners}</span>
            <div className="absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
          </Link>
        </div>

        {/* ლოგო */}
        <div className="flex-none px-4 md:px-8 lg:px-16">
          <Link href="/">
            <Image 
              src="/logo-white.png" 
              alt="HORECA Distribution" 
              width={isScrolled ? 160 : 250} 
              height={70} 
              className="object-contain transition-all duration-500"
              priority
            />
          </Link>
        </div>

        {/* მარჯვენა მენიუ */}
        <div className="hidden md:flex flex-1 gap-10 lg:gap-14 justify-end items-center font-bold text-[13px] lg:text-[14px] tracking-[0.25em] uppercase whitespace-nowrap">
          <Link href="#about" className="group relative py-2.5 px-7">
            <span className="relative z-10">{content[safeLang].about}</span>
            <div className="absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
          </Link>
          <Link href="#contact" className="group relative py-2.5 px-7">
            <span className="relative z-10">{content[safeLang].contact}</span>
            <div className="absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
          </Link>
          
          <div className="relative ml-6 pl-8 border-l border-white/10" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-[11px] font-black tracking-[0.15em]">{currentLang}</span>
              <ChevronDown size={12} className={`opacity-40 transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl py-3 min-w-[150px] shadow-2xl overflow-hidden"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code as any);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-6 py-3 text-[10px] font-black tracking-[0.15em] transition-all duration-300
                        ${currentLang === l.code ? 'text-[#C8A75E] bg-white/5' : 'text-white/40 hover:text-white hover:bg-white/10'}`}
                    >
                      {l.label}
                      {currentLang === l.code && <div className="w-1 h-1 rounded-full bg-[#C8A75E]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden font-bold"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-white text-2xl tracking-[0.2em] uppercase hover:text-[#C8A75E] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 w-64 flex flex-col items-center gap-6">
              <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Select Language</span>
              <div className="flex gap-6">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code as any);
                      setIsOpen(false);
                    }}
                    className={`text-[12px] font-black tracking-[0.15em] py-2 px-4 rounded-full border transition-all duration-300
                      ${currentLang === l.code 
                        ? 'border-[#C8A75E] text-[#C8A75E] bg-[#C8A75E]/5' 
                        : 'border-white/10 text-white/40'}`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="absolute top-10 left-6 text-white" 
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}