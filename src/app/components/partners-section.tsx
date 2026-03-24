"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode } from 'swiper/modules'
import { useLanguage } from "../LanguageContext" // 1. შემოვიტანოთ ჰუკი

// Swiper-ის სტილები
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

export default function PartnersSection() {
  const { lang } = useLanguage(); // 2. გამოვიყენოთ ენა

  // 3. ტექსტების ობიექტი
  const content: any = {
    KA: {
      title: "პარტნიორები",
      footer: <>ჩვენი პარტნიორები იზიარებენ ერთ პრინციპს, სტაბილურ ხარისხს. <br className="hidden md:block" /> ეს არის ჩვენი საერთო შედეგის საფუძველი.</>
    },
    EN: {
      title: "Partners",
      footer: <>Our partners share one principle: stable quality. <br className="hidden md:block" /> This is the foundation of our common success.</>
    },
    RU: {
      title: "Партнеры",
      footer: <>Наши партнеры разделяют один принцип — стабильное качество. <br className="hidden md:block" /> Это основа нашего общего результата.</>
    }
  };

  const partners = [
    { logo: "/agrohub-logo.png", img: "/agrohub.jpg", name: "Agrohub" },
    { logo: "/ska-logo.png", img: "/ska.jpg", name: "Ska" },
    { logo: "/madart-logo.png", img: "/madart.jpg", name: "Madart" },
    { logo: "/gurme-logo.png", img: "/gurme.jpg", name: "Gourmet" },
    { logo: "/maron-logo.png", img: "/maron.jpg", name: "Maron" },
    { logo: "/asorti-logo.png", img: "/asorti.jpg", name: "Asorti" },
  ];

  const duplicatedLogos = [...partners, ...partners];

  return (
    <section id="partners" className="relative bg-[#C8A75E] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* ზედა ნაწილი */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-10 md:mb-14 ml-0 md:ml-4 text-center md:text-left">
          <div className="w-12 h-12 md:w-16 md:h-16 relative brightness-0 opacity-60">
            <Image src="/symbol.png" alt="Icon" fill className="object-contain" />
          </div>
          <div className="border-[1.5px] border-white/50 rounded-2xl px-6 md:px-10 py-2 md:py-3 bg-white/10 backdrop-blur-sm">
            <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              {content[lang].title} {/* 4. დინამიური სათაური */}
            </span>
          </div>
        </div>

        {/* ლოგოების მოძრავი ხაზი */}
        <div className="w-full bg-black rounded-[30px] md:rounded-[50px] py-1 md:py-2 mb-12 md:mb-20 overflow-hidden relative shadow-2xl border border-white/10">
          <motion.div 
            className="flex gap-8 md:gap-12 items-center whitespace-nowrap px-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {duplicatedLogos.map((partner, idx) => (
              <div 
                key={idx} 
                className="relative h-16 w-32 md:h-24 md:w-60 flex-shrink-0 grayscale brightness-[100] opacity-80"
              > 
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  className="object-contain scale-110 md:scale-125"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* სურათების კარუსელი */}
        <div className="mb-16 md:mb-24 cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[FreeMode, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4.2 }
            }}
            className="partners-swiper"
          >
            {partners.map((partner, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-[350px] md:h-[500px] lg:h-[550px] w-full overflow-hidden rounded-[35px] md:rounded-[45px] shadow-2xl mb-12">
                  <Image 
                    src={partner.img} 
                    alt={partner.name} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ქვედა ტექსტი */}
        <div className="max-w-4xl mx-auto text-center border-t border-white/20 pt-10 md:pt-16 px-4">
          <p className="text-white text-base md:text-xl lg:text-2xl font-light leading-relaxed tracking-[0.1em] uppercase">
            {content[lang].footer} {/* 5. დინამიური ქვედა ტექსტი */}
          </p>
        </div>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-pagination-bullet {
          background: white !important;
          width: 8px;
          height: 8px;
        }
        @media (min-width: 768px) {
          .partners-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
        .partners-swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  )
}