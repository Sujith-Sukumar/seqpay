import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata = {
  title: "RavPay - Fast & Secure Payment Gateway",
  description:
    "Accept payments seamlessly with RavPay. Support for UPI, credit cards, debit cards, and netbanking with industry-leading security.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
