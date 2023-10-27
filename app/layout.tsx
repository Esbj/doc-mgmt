import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'material-icons/iconfont/material-icons.css';
import Link from 'next/link';
import Header from '@/components/Header';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doc mgmt'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
    </html >
  )
}
