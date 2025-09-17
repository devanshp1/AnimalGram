import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Shield, Menu } from 'lucide-react';
import { cn } from '@/lib/utils'; // optional: ShadCN's class merging helper

const navItems = [
  { label: 'Feed', href: '/feed', icon: <Home className="w-5 h-5" /> },
  { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
  { label: 'Admin Panel', href: '/admin', icon: <Shield className="w-5 h-5" /> },
];

const SideMenu: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);

    handler();

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('sidebar-collapsed');

    if (stored !== null) {
      setCollapsed(stored === 'true');
    }
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    localStorage.setItem('sidebar-collapsed', (!collapsed).toString());
  };

  const SidebarContent = () => (
    <nav className="flex flex-col space-y-1 overflow-y-auto">
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {item.icon}
            {!collapsed && <span className="ml-2">{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          aria-label="Open Menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 m-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar (desktop) */}
      <aside
        className={cn(
          'top-0 left-0 h-full bg-background border-r border-border p-4 flex flex-col transition-all',
          collapsed ? 'w-16' : 'w-64',
          isMobile ? 'hidden' : ''
        )}
      >
        <button
          onClick={toggleCollapsed}
          className="self-end p-1 hover:bg-muted rounded"
          aria-label="Toggle collapse"
        >
          <Menu className="w-5 h-5" />
        </button>

        <SidebarContent />
      </aside>

      {/* Sidebar (mobile overlay) */}
      {isMobile && mobileOpen && (
        <div className="inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full bg-background w-64 p-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end p-2"
              aria-label="Close Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
