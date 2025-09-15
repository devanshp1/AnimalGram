import React, { ReactNode } from 'react'

import { Outlet } from 'react-router-dom'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import SideMenu from '@/components/ui/SideMenu'

interface RootLayoutProps {
    children: ReactNode
}

export const metadata = {
    title: 'AnimalGram',
    description: 'MERN Blogging Platform for Animals',
}

const RootLayout: React.FC<RootLayoutProps> = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex flex-1">
                <SideMenu />
                <main className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout