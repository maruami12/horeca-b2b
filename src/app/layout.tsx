import './globals.css'
import { LanguageProvider } from './LanguageContext'
import type { Metadata } from 'next'
import WhatsAppContact from './components/WhatsAppContact'

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
      <body className="antialiased bg-[#0a0a0a] text-white" style={{ fontFamily: "'BPGNino', sans-serif" }}>
        <LanguageProvider>
          {children}
          <WhatsAppContact />
        </LanguageProvider>
      </body>
    </html>
  )
}