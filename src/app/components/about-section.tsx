"use client"

import Image from "next/image"
import { useLanguage } from "../LanguageContext" 

export default function AboutSection() {
  const { lang } = useLanguage();

  const content: any = {
    KA: {
      title: "ჩვენს შესახებ",
      desc1: "HORECA DISTRIBUTION არის პროფესიონალური სადისტრიბუციო კომპანია, რომელიც ემსახურება რესტორნებს, სასტუმროებს, კაფეებსა და კვების ობიექტებს და სთავაზობს სტაბილურ, სწრაფ და მასშტაბირებად მიწოდებას.",
      desc2: "კომპანია უკვე ფარავს ბაზრის დაახლოებით 80%-ს, რაც მას აქცევს ერთ-ერთ ყველაზე ძლიერ მოთამაშედ სექტორში. სტრატეგიული მიზანია პოზიციების გაძლიერება არა მხოლოდ მოცულობით, არამედ ბრენდის აღქმით, როგორც სანდო, სისტემური და გრძელვადიანი პარტნიორი.",
      stat1: "ბაზრის წილი",
      stat2: "ლოჯისტიკა"
    },
    EN: {
      title: "ABOUT US",
      desc1: "HORECA DISTRIBUTION is a professional distribution company serving restaurants, hotels, cafes, and catering facilities, offering stable, fast, and scalable delivery.",
      desc2: "The company already covers about 80% of the market, making it one of the strongest players in the sector. Strategic goal is to strengthen positions not only in volume but also in brand perception as a reliable, systemic, and long-term partner.",
      stat1: "Market Share",
      stat2: "Logistics"
    },
    RU: {
      title: "О НАС",
      desc1: "HORECA DISTRIBUTION — это профессиональная дистрибьюторская компания, обслуживающая рестораны, отели, кафе и предприятия общественного питания, предлагая стабильные, быстрые и масштабируемые поставки.",
      desc2: "Компания уже охватывает около 80% рынка, что делает ее одним из самых сильных игроков в секторе. Стратегическая цель — укрепление позиций не только в объемах, но и в восприятии бренда как надежного, системного и долгосрочного партнера.",
      stat1: "Доля рынка",
      stat2: "Логистика"
    }
  }

  const t = content[lang];

  return (
    <section id="about" className="relative bg-[#0a0a0a] py-32 overflow-hidden border-t border-white/5">
      
      <div className="absolute inset-0 pointer-events-none grayscale opacity-[0.07] z-0">
        <Image 
          src="/topo-map.png" 
          alt="Topographic Map Background" 
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0">
        <Image 
          src="/symbol.png" 
          alt="Large Background Logo" 
          fill 
          className="object-contain"
        />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-10 md:px-24 relative z-20">
        <div className="flex flex-col gap-16">
          
          <div className="flex items-center gap-6 border-b border-white/5 pb-10">
            <div className="w-16 h-16 relative opacity-50 flex-shrink-0">
              <Image src="/symbol.png" alt="Logo Icon" fill className="object-contain" />
            </div>
            
            {/* სათაური: ზომა დაკლებულია (text-4xl/text-5xl) და დამატებულია WebkitTextStroke */}
            <h2 
              className="title-caps text-4xl md:text-5xl text-white tracking-tight"
              style={{ WebkitTextStroke: '0.5px white' }}
            >
              {t.title}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-2/3 space-y-12">
              <p className="text-white text-xl md:text-2xl leading-[1.6] font-medium tracking-tight uppercase">
                {t.desc1}
              </p>
              
              <p className="text-white/50 text-lg leading-[1.8] font-light tracking-wide max-w-3xl uppercase">
                {t.desc2}
              </p>

              <div className="flex gap-20 pt-10">
                <div className="group">
                  <div className="text-[#c4a962] text-6xl font-bold mb-2">80%</div>
                  <div className="title-caps text-white/30 text-[12px] tracking-[0.3em]">
                    {t.stat1}
                  </div>
                </div>
                <div className="group">
                  <div className="text-[#c4a962] text-6xl font-bold mb-2">24/7</div>
                  <div className="title-caps text-white/30 text-[12px] tracking-[0.3em]">
                    {t.stat2}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}