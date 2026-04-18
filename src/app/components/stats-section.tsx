"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from "../LanguageContext"

const content: any = {
  KA: {
    stats: [
      { label: "წელი", value: "15+" },
      { label: "მომხმარებელი", value: "200+" },
      { label: "მიწოდება", value: "24/7" },
    ],
    description: "თქვენი საქმიანობის შეუფერხებელი მუშაობისთვის ვუზრუნველყოფთ ხარისხიანი პროდუქტების სტაბილურ მიწოდებას და ოპერატიულ სერვისს,"
  },
  EN: {
    stats: [
      { label: "Years", value: "15+" },
      { label: "Customers", value: "200+" },
      { label: "Delivery", value: "24/7" },
    ],
    description: "To ensure the smooth operation of your business, we provide stable supply of quality products and prompt service,"
  },
  RU: {
    stats: [
      { label: "Лет", value: "15+" },
      { label: "Клиентов", value: "200+" },
      { label: "Доставка", value: "24/7" },
    ],
    description: "Для обеспечения бесперебойной работы вашего бизнеса мы обеспечиваем стабильные поставки качественной продукции и оперативный сервис,"
  }
}

export default function StatsSection() {
  const { lang } = useLanguage();
  const t = content[lang] || content.KA;

  return (
    <section className="relative bg-[#0a0a0a] py-24 px-4 overflow-hidden min-h-[650px] flex flex-col justify-center">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/stats-bg.png" 
          alt="Horeca Stats Background" 
          fill 
          className="object-cover object-left filter brightness-[1.25] contrast-[1.20] opacity-50" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/30 to-[#0a0a0a] w-full"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col relative z-10 w-full">
        
        {/* Header Block with adjusted spacing */}
        <div className="flex flex-col items-end mb-16 w-full">
          <div className="relative w-72 h-32 md:w-[400px] md:h-36 mb-6">
            <Image 
              src="/logo-white.png" 
              alt="Horeca Distribution Logo" 
              fill 
              className="object-contain object-right"
              priority
            />
          </div>

          <div className="w-full text-right max-w-3xl ml-auto">
            {/* აქ მოვხსენით font-bold და დავამატეთ დაშორებები */}
            <h2 
              className="title-caps text-white text-lg md:text-xl opacity-90 italic"
              style={{ 
                fontWeight: '400',
                letterSpacing: '0.08em',
                lineHeight: '2.1',
                WebkitTextStroke: '0px' // იძულებითი მოხსნა
              }}
            >
              {t.description}
            </h2>
          </div>
        </div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#b89e5d] rounded-[35px] py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center shadow-2xl w-full gap-10 md:gap-0"
        >
          {t.stats.map((stat: any, index: number) => (
            <div key={index} className="text-center relative flex-1 w-full group flex flex-col items-center">
              <motion.h3 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-white text-5xl md:text-6xl font-black mb-3 tracking-tighter"
              >
                {stat.value}
              </motion.h3>
              
              <p 
                className="title-caps text-white text-[12px] md:text-[14px] px-2"
                style={{ 
                  lineHeight: '1.4', 
                  display: 'inline-block' 
                }}
              >
                {stat.label}
              </p>
              
              {index !== t.stats.length - 1 && (
                <div className="hidden md:block absolute -right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-white/30"></div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}