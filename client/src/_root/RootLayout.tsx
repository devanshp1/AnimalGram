import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import SideMenu from '@/components/ui/SideMenu';

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      <Header />

      <div className="flex flex-1">
        <SideMenu />

        <main
          className="flex-1 px-4 py-6 md:px-6 overflow-y-auto"
          role="main"
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
