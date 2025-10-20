import Header from '@/components/Header'
import './globals.css'
import type { ReactNode } from 'react'


export const metadata = {
    title: 'Muhammad Amir — Wordpress Developer',
    description: 'Wordpress Developer & Content Creator',
}


export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    )
}
