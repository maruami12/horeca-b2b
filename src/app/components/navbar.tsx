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
  Phone 
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
        className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-12 lg:px-20 flex items-center justify-between transition-all duration-500 text-white ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-lg py-4 shadow-xl" 
            : "bg-transparent py-10 md:py-14"
        }`}
      >
        {/* Burger Menu Button - მარცხნივ მობილურზე */}
        <button 
          className="md:hidden p-2 -ml-2 text-white order-first" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Desktop Menu Left */}
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

        {/* Logo - დესკტოპზე ცენტრში, მობილურზე მარჯვნივ */}
        <div className="flex-none order-last md:order-none md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/">
            <Image 
              src="/logo-white.png" 
              alt="HORECA Distribution" 
              width={isScrolled ? 120 : 160} 
              height={70} 
              className="object-contain transition-all duration-500"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu Right */}
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

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] z-[70] bg-[#0A0A0A] border-r border-white/10 p-8 flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <Image src="/logo-white.png" alt="Logo" width={110} height={40} className="object-contain" />
                <button onClick={() => setIsOpen(false)} className="text-white/60">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-white text-lg tracking-[0.15em] uppercase font-bold hover:text-[#C8A75E] transition-all flex items-center gap-4"
                    >
                      <link.icon size={22} className="text-[#C8A75E]/80" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/10">
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase block mb-6 text-center">Select Language</span>
                <div className="flex justify-center gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code as any);
                        setIsOpen(false);
                      }}
                      className={`text-[11px] font-black tracking-[0.15em] py-2 px-4 rounded-lg border transition-all duration-300
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