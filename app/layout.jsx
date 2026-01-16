import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "NETRIVYA - Powering Global Business Communication Through Bulk SMS",
  description: "Reliable bulk SMS, WhatsApp and Voice API platform for businesses worldwide",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
