"use client";

import React from 'react';

const WhatsAppContact = () => {
  const phoneNumber = "995599781678"; // შენი ნომერი ჩაწერე აქ
  const message = "გამარჯობა, მაინტერესებს Horeca Distribution-ის პროდუქცია";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* "მოგვწერეთ" წარწერა - ჩნდება მხოლოდ ჰოვერზე */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-black/20 backdrop-blur-lg border border-white/10 text-white text-[11px] py-1.5 px-4 rounded-full shadow-2xl tracking-[1px] uppercase">
          მოგვწერეთ
        </div>
      </div>

      {/* მთავარი ღილაკი */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-2xl 
                   bg-white/5 backdrop-blur-md border border-white/20 
                   shadow-2xl transition-all duration-500 
                   hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[#D4AF37]/40
                   group relative overflow-hidden"
      >
        {/* Icon - ჩვეულებრივ მდგომარეობაში თეთრია, ჰოვერზე ხდება შავი */}
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white transition-all duration-500 group-hover:text-black group-hover:scale-110"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.5 8.5 0 0 1 4.7 1.5l3.8-1.5-1.5 3.8Z" />
        </svg>

        {/* კაშკაშა ეფექტი ჰოვერზე */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </a>
    </div>
  );
};

export default WhatsAppContact;