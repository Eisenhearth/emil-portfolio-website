import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Emil John Mandia | Portfolio',
  description: 'Hi, Welcome to my Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='bg-[#fffff4] dark:bg-[#121212]'>
              <Navbar />
                {children}
              <Footer />
        </body>
    </html>
  )
}
