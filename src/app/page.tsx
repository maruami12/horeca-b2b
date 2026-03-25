"use client"

import { motion } from "framer-motion"
import Navbar from "./components/navbar"
import Image from "next/image"
import AboutSection from "./components/about-section"
import PartnersSection from "./components/partners-section"
import ProductsSection from "./components/products-section"
import StatsSection from "./components/stats-section" 
import Footer from "./components/Footer"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png" 
            alt="Hero Background"
            fill
            /* აქ მოვუმატეთ brightness და opacity მკვეთრი ფერებისთვის */
            className="object-cover filter brightness-[1.0] contrast-[0.95] opacity-100"
            priority
          />
          {/* ზედა გრადიენტი - მხოლოდ ნავბარისთვის */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-1/3"></div>
          
          {/* ქვედა გრადიენტი - რბილი გადასვლა შემდეგ სექციაზე */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

      {/* მარჯვენა სოციალური ზოლი */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
          {/* ზედა ხაზი - დავაგრძელეთ, რომ ტექსტი ქვემოთ ჩამოვიდეს */}
          <div className="w-[1px] h-48 bg-gradient-to-b from-transparent via-[#b89e5d]/50 to-[#b89e5d]"></div>
          
          {/* ტექსტი - შემცირებული padding-ით (py-6), რომ უფრო ახლოს იყოს ხატულებთან */}
          <div className="py-6">
            <span 
              className="text-[11px] font-black tracking-[0.6em] text-white/70 uppercase whitespace-nowrap drop-shadow-lg"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              © HORECA DISTRIBUTION
            </span>
          </div>

          {/* სოციალური ხატულები - მკაფიო და ეფექტური */}
          <div className="flex flex-col gap-8 items-center text-white/50 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-[#b89e5d] hover:scale-125 transition-all duration-300">
              <Facebook size={20} strokeWidth={2} />
            </a>
            <a href="https://www.instagram.com/horecadistribution_/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-[#b89e5d] hover:scale-125 transition-all duration-300">
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-[#b89e5d] hover:scale-125 transition-all duration-300">
              <Linkedin size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator - ქვედა მოძრავი ხაზი */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        >
          <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase mb-4 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-[1.5px] h-24 bg-gradient-to-b from-[#b89e5d] via-white/40 to-transparent"></div>
        </motion.div>
      </section>

      <AboutSection /> 
      <PartnersSection /> 
      <ProductsSection /> 
      <StatsSection /> 

      <div id="contact">
        <Footer /> 
      </div>
    </main>
  )
}