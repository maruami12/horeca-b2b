"use client"

import { Linkedin, Facebook, Instagram } from 'lucide-react'
import { useLanguage } from "../LanguageContext"

const footerContent: Record<'KA' | 'EN' | 'RU', {
  menuTitle: string;
  about: string;
  partners: string;
  productsTitle: string;
  catalog: string;
  contactTitle: string;
}> = {
  KA: {
    menuTitle: "მენიუ",
    about: "ჩვენს შესახებ",
    partners: "პარტნიორები",
    productsTitle: "პროდუქტები",
    catalog: "კატალოგი",
    contactTitle: "კონტაქტი"
  },
  EN: {
    menuTitle: "Menu",
    about: "About Us",
    partners: "Partners",
    productsTitle: "Products",
    catalog: "Catalog",
    contactTitle: "Contact"
  },
  RU: {
    menuTitle: "Меню",
    about: "О нас",
    partners: "Партнеры",
    productsTitle: "Продукты",
    catalog: "Каталог",
    contactTitle: "Контакт"
  }
}

export default function Footer() {
  const { lang } = useLanguage();
  const currentLang = (lang as 'KA' | 'EN' | 'RU') || 'KA';
  const t = footerContent[currentLang];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#f2f0eb] font-sans">
      <div className="max-w-[1400px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
          
          {/* მენიუ */}
          <div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-wider">{t.menuTitle}</h3>
            <ul className="space-y-3 text-lg font-medium opacity-80">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-[#b8a26a] cursor-pointer transition-colors"
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  onClick={(e) => scrollToSection(e, 'partners')}
                  className="hover:text-[#b8a26a] cursor-pointer transition-colors"
                >
                  {t.partners}
                </a>
              </li>
            </ul>
          </div>

          {/* პროდუქტები */}
          <div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-wider">{t.productsTitle}</h3>
            <ul className="space-y-3 text-lg font-medium opacity-80">
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="hover:text-[#b8a26a] cursor-pointer transition-colors"
                >
                  {t.catalog}
                </a>
              </li>
            </ul>
          </div>

          {/* კონტაქტი */}
          <div className="relative">
            <h3 className="text-xl font-black mb-6 uppercase tracking-wider">{t.contactTitle}</h3>
            <ul className="space-y-3 text-lg font-medium opacity-80 uppercase">
              <li>
                <a href="mailto:INFO@HORECADISTRIBUTION.COM" className="hover:text-[#b8a26a] break-all">
                  INFO@HORECADISTRIBUTION.COM
                </a>
              </li>
              <li>
                <a href="tel:+995123456789" className="hover:text-[#b8a26a]">
                  +995 123 45 67 89
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-8 md:absolute md:bottom-0 md:right-0">
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-6 px-10">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest">
          <p>POWERED BY <span className="text-white font-bold">HORECA DISTRIBUTION</span> 2026</p>
        </div>
      </div>
    </footer>
  )
}