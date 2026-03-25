"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode } from 'swiper/modules'

// Swiper-ის სტილები
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

export default function PartnersSection() {
  const partners = [
    { logo: "/agrohub-logo.png", img: "/agrohub.jpg", name: "Agrohub" },
    { logo: "/ska-logo.png", img: "/ska.jpg", name: "Ska" },
    { logo: "/madart-logo.png", img: "/madart.jpg", name: "Madart" },
    { logo: "/gurme-logo.png", img: "/gurme.jpg", name: "Gourmet" },
    { logo: "/maron-logo.png", img: "/maron.jpg", name: "Maron" },
    { logo: "/asorti-logo.png", img: "/asorti.jpg", name: "Asorti" },
    { logo: "/goodwill.png", img: "/agrohub.jpg", name: "Goodwill" }, // Goodwill დავამატე აქაც
  ];

  // უსასრულო მოძრაობისთვის მასივს ვამრავლებთ 3-ზე
  const duplicatedLogos = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="relative bg-[#C8A75E] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1750px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* 1. ზედა ნაწილი: ხატულა და სათაური */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-10 md:mb-14 ml-0 md:ml-4 text-center md:text-left">
          <div className="w-12 h-12 md:w-16 md:h-16 relative brightness-0 opacity-60">
            <Image src="/symbol.png" alt="Icon" fill className="object-contain" />
          </div>
          <div className="border-[1.5px] border-white/50 rounded-2xl px-6 md:px-10 py-2 md:py-3 bg-white/10 backdrop-blur-sm">
            <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
              პარტნიორები
            </span>
          </div>
        </div>

        {/* 2. ლოგოების მოძრავი ხაზი */}
        <div className="w-full bg-black rounded-[30px] md:rounded-[50px] py-1 md:py-2 mb-12 md:mb-20 overflow-hidden relative shadow-2xl border border-white/10">
          <motion.div 
            className="flex gap-0 md:gap-3 items-center whitespace-nowrap px-1"
            animate={{ x: ["0%", "-33.33%"] }} // რადგან 3-ჯერ გავამრავლეთ, -33.33% იდეალურია
            transition={{ 
              ease: "linear", 
              duration: 10, 
              repeat: Infinity 
            }}
          >
            {duplicatedLogos.map((partner, idx) => {
              const isSka = partner.name.toLowerCase().includes("ska");
              const isMaron = partner.logo.toLowerCase().includes("maron") || partner.name.toLowerCase().includes("maron");
              const isVertical = isSka || isMaron;

              return (
                <div 
                  key={idx} 
                  className={`relative flex-shrink-0 grayscale brightness-[100] opacity-80 transition-all duration-300 ${
                    isMaron 
                      ? "h-14 w-14 mx-[-10px] md:h-24 md:w-24 md:mx-[-20px]" 
                      : isSka 
                        ? "h-14 w-14 mx-[-5px] md:h-24 md:w-24 md:mx-2" 
                        : "h-14 w-32 mx-[-8px] md:h-24 md:w-48 md:mx-0"
                  }`}
                > 
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className={`object-contain ${
                      isMaron 
                        ? "scale-[1.3] md:scale-[1.5]" 
                        : isSka 
                          ? "scale-[1.1] md:scale-[1.3]" 
                          : "scale-[1.4] md:scale-[1.8]" 
                    }`}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 3. სურათების კარუსელი */}
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

        {/* 4. ქვედა ტექსტი */}
        <div className="max-w-4xl mx-auto text-center border-t border-white/20 pt-10 md:pt-16 px-4">
          <p className="text-white text-base md:text-xl lg:text-2xl font-light leading-relaxed tracking-[0.1em] uppercase">
            ჩვენი პარტნიორები იზიარებენ ერთ პრინციპს, სტაბილურ ხარისხს. <br className="hidden md:block" />
            ეს არის ჩვენი საერთო შედეგის საფუძველი.
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