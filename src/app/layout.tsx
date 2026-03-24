import './globals.css'
import { LanguageProvider } from './LanguageContext'
import type { Metadata } from 'next' // ეს დავამატეთ

// გუგლისთვის საჭირო ინფორმაცია (SEO)
export const metadata: Metadata = {
  title: "HORECA Distribution | ხილისა და ბოსტნეულის საბითუმო მიწოდება",
  description: "უმაღლესი ხარისხის ხილი, ბოსტნეული, ჩირი და კენკრა რესტორნების, სასტუმროებისა და კაფეებისთვის. სწრაფი მიწოდება თბილისში.",
  keywords: ["Horeca", "ხილის მიწოდება", "ბოსტნეული საბითუმოდ", "თბილისი", "რესტორნები", "სასტუმროები"],
  openGraph: {
    title: "HORECA Distribution",
    description: "პროფესიონალური მომსახურება თქვენი სამზარეულოსთვის",
    url: 'https://horecadistribution.ge',
    siteName: 'HORECA Distribution',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white" style={{ fontFamily: "'Noto Sans Georgian', sans-serif" }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}