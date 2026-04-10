import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Diensten', page: 'diensten' },
  { label: 'Over', page: 'over' },
  { label: 'Contact', page: 'contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-navy-deep pt-24 pb-12 px-6 border-t border-[#374151]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <div className="font-heading text-2xl font-bold tracking-widest uppercase mb-2">
            BARBERSHOP <span className="text-gold">LUNETTEN</span>
          </div>
          <p className="text-[10px] opacity-30 uppercase tracking-[0.4em]">Utrecht • Vakmanschap</p>
        </div>

        <div className="flex space-x-8">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className="font-heading text-[10px] uppercase tracking-[0.1em] hover:text-gold transition-colors duration-300"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="text-center md:text-right">
          <a
            href="tel:0681546043"
            className="text-sm font-bold hover:text-gold transition-colors duration-300"
          >
            06 815 460 43
          </a>
          <p className="text-[10px] opacity-40 mt-1 uppercase tracking-widest">
            Winkelcentrum Lunetten, Utrecht
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#374151] flex flex-col md:flex-row justify-between items-center gap-4 opacity-20 text-[9px] uppercase tracking-widest">
        <span>&copy; 2024 Barbershop Lunetten</span>
        <span>U-Pas Partner</span>
      </div>
    </footer>
  );
}
