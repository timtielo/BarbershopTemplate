import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Diensten', page: 'diensten' },
  { label: 'Over Ons', page: 'over' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => handleNav('home')}
          className="font-heading text-xl font-bold tracking-widest uppercase"
        >
          BARBERSHOP <span className="text-gold">LUNETTEN</span>
        </button>

        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`font-heading text-[0.85rem] uppercase tracking-[0.1em] transition-colors duration-300 ${
                currentPage === page ? 'text-gold' : 'text-textMain hover:text-gold'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          href="tel:0681546043"
          className="hidden sm:inline-block bg-gold text-navy-deep font-heading font-bold px-7 py-3 uppercase tracking-wide text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
        >
          Afspraak Maken
        </a>

        <button
          className="md:hidden text-textMain"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-charcoal border-b border-[#374151] px-8 py-8 flex flex-col space-y-6">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`font-heading text-lg uppercase tracking-[0.1em] text-left transition-colors duration-300 ${
                currentPage === page ? 'text-gold' : 'text-textMain hover:text-gold'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:0681546043"
            className="bg-gold text-navy-deep font-heading font-bold px-7 py-3 uppercase tracking-wide text-sm text-center transition-all duration-300 hover:opacity-90"
          >
            Bel Nu
          </a>
        </div>
      )}
    </header>
  );
}
