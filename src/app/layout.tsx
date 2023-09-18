import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppHeader from '../components/header/AppHeader'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/nextauth-config'
import SessionProvider from '../components/session/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
    const session = await getServerSession(authOptions); 
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AppHeader/>
          <main className='w-[80vw] mx-auto'>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
