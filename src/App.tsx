import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import DienstenPage from './pages/DienstenPage';
import OverOnsPage from './pages/OverOnsPage';
import ContactPage from './pages/ContactPage';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-navy-deep text-textMain font-body">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'diensten' && <DienstenPage />}
        {currentPage === 'over' && <OverOnsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppFloat />
    </div>
  );
}
