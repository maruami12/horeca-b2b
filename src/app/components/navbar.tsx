"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Menu, 
  X, 
  ChevronDown, 
  CookingPot, 
  Handshake, 
  Info, 
  Phone,
  ShoppingBag 
} from "lucide-react"
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
      setIsScrolled(window.scrollY > 15)
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
    KA: { products: "პროდუქტები", partners: "პარტნიორები", about: "ჩვენს შესახებ", contact: "კონტაქტი" },
    EN: { products: "Products", partners: "Partners", about: "About Us", contact: "Contact" },
    RU: { products: "Продукты", partners: "Партнеры", about: "О нас", contact: "Контакт" }
  }

  const safeLang = content[currentLang] ? currentLang : 'KA'

  const navLinks = [
    { name: content[safeLang].products, href: "#products", icon: CookingPot },
    { name: content[safeLang].partners, href: "#partners", icon: Handshake },
    { name: content[safeLang].about, href: "#about", icon: Info },
    { name: content[safeLang].contact, href: "#contact", icon: Phone },
  ]

  const languages = [
    { code: 'KA', label: 'GEORGIAN' },
    { code: 'EN', label: 'ENGLISH' },
    { code: 'RU', label: 'RUSSIAN' }
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-12 lg:px-20 flex items-center justify-between transition-all duration-500 text-white outline-none ${
          isScrolled 
            ? "bg-black/10 backdrop-blur-md py-2 shadow-md" 
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        {/* LEFT SECTION: Burger (Mobile) / Cart + Links (Desktop) */}
        <div className="flex flex-1 justify-start items-center">
          <button 
            className="lg:hidden p-2 -ml-2 text-white active:scale-90 transition-all focus:outline-none" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={isScrolled ? 28 : 44} />
          </button>

          <div className="hidden lg:flex items-center gap-4 font-medium text-[20px] tracking-[0.1em] uppercase whitespace-nowrap">
            <button className="p-2 -ml-2 text-white hover:text-[#C8A75E] active:scale-90 transition-all focus:outline-none">
              <ShoppingBag size={isScrolled ? 26 : 34} />
            </button>

            <Link href="#products" className="group relative py-3 px-8 transition-all border border-transparent hover:border-white rounded-[15px]">
              <span className="relative z-10 group-hover:text-[#C8A75E] transition-colors duration-300">
                {content[safeLang].products}
              </span>
            </Link>
            <Link href="#partners" className="group relative py-3 px-8 transition-all border border-transparent hover:border-white rounded-[15px]">
              <span className="relative z-10 group-hover:text-[#C8A75E] transition-colors duration-300">
                {content[safeLang].partners}
              </span>
            </Link>
          </div>
        </div>
        
        {/* LOGO SECTION (Center) */}
        <div className="flex-none transition-all duration-500">
          <Link href="/" className="block focus:outline-none">
            <Image 
              src="/logo-white.png" 
              alt="HORECA Distribution" 
              width={380} 
              height={140} 
              className={`object-contain transition-all duration-500 hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'w-[100px] lg:w-[160px]' 
                  : 'w-[180px] md:w-[220px] lg:w-[280px]'
              }`}
              priority
            />
          </Link>
        </div>

        {/* RIGHT SECTION: Links + Language (Desktop) / Cart (Mobile) */}
        <div className="flex flex-1 items-center justify-end">
          <div className="hidden lg:flex gap-4 items-center font-medium text-[20px] tracking-[0.1em] uppercase whitespace-nowrap mr-6">
            <Link href="#about" className="group relative py-3 px-8 transition-all border border-transparent hover:border-white rounded-[15px]">
              <span className="relative z-10 group-hover:text-[#C8A75E] transition-colors duration-300">
                {content[safeLang].about}
              </span>
            </Link>
            <Link href="#contact" className="group relative py-3 px-8 transition-all border border-transparent hover:border-white rounded-[15px]">
              <span className="relative z-10 group-hover:text-[#C8A75E] transition-colors duration-300">
                {content[safeLang].contact}
              </span>
            </Link>
          </div>

          <button className="lg:hidden p-2 -mr-2 text-white active:scale-90 transition-all focus:outline-none">
            <ShoppingBag size={isScrolled ? 28 : 42} /> 
          </button>
          
          <div className="hidden lg:block relative -mr-2" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all focus:outline-none ${isScrolled ? "px-4 py-2" : "px-6 py-3"}`}
            >
              <span className={`font-black tracking-widest transition-all ${isScrolled ? "text-[11px]" : "text-[13px]"}`}>
                {currentLang}
              </span>
              <ChevronDown size={isScrolled ? 14 : 16} className={`opacity-50 transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl py-3 min-w-[170px] shadow-2xl overflow-hidden"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code as any);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-6 py-4 text-[11px] font-bold tracking-widest transition-all duration-300 focus:outline-none text-white/40 hover:text-white hover:bg-white/10"
                    >
                      {l.label}
                      {currentLang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-[#C8A75E]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* MOBILE & TABLET SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[65] bg-black/80 backdrop-blur-md lg:hidden"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] z-[70] bg-[#0A0A0A] border-r border-white/10 p-8 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <Image src="/logo-white.png" alt="Logo" width={120} height={50} className="object-contain" />
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors focus:outline-none">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-white text-base tracking-[0.1em] uppercase font-medium hover:text-[#C8A75E] transition-all flex items-center gap-4 focus:outline-none"
                    >
                      <link.icon size={20} className="text-[#C8A75E]/80" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase block mb-6 text-center font-bold">Select Language</span>
                <div className="flex justify-center gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code as any);
                        setIsOpen(false);
                      }}
                      className={`text-[10px] font-black tracking-widest py-2 px-4 rounded-lg border transition-all duration-300 focus:outline-none
                        ${currentLang === l.code 
                          ? 'border-[#C8A75E] text-[#C8A75E] bg-[#C8A75E]/10' 
                          : 'border-white/10 text-white/40'}`}
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}