import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ermias Tsegu | Enterprise Architect & Software Engineer',
  description: 'Enterprise Architect, Software Engineer, and Security & AI Specialist with 9+ years of experience. Author of Generative AI book.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/dv.JPG',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dv.JPG',
        media: '(prefers-color-scheme: dark)',
      },

    ],
    apple: '/dv.JPG',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
