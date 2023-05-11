import Layout from '@/components/layout'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Providers from './providers';


const openSans = Open_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

export const metadata = {
  title: 'Benjamin Skinner',
  description: 'Personal website of Benjamin Skinner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body className={openSans.className}>
                <Providers>
                <Layout>
                    {children}
                </Layout>
                </Providers>
            </body>
        </html>
  )
}
