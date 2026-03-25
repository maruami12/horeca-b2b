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
            className="object-cover filter brightness-[1.3] contrast-[1.15] opacity-90"
            priority
          />
          {/* ზედა გრადიენტი - მხოლოდ ნავბარისთვის */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-1/3"></div>
          
          {/* ქვედა გრადიენტი - რბილი გადასვლა შემდეგ სექციაზე */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        {/* მარჯვენა სოციალური ზოლი */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-10">
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/40 to-white/60"></div>
          
          <div className="py-12">
            <span 
              className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              © HORECA DISTRIBUTION
            </span>
          </div>

          <div className="flex flex-col gap-8 items-center text-white/30">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.instagram.com/horecadistribution_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/60 via-white/20 to-transparent"></div>
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