import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import ValueProp from './ValueProp';
import Philosophy from './Philosophy';
import Services from './Services';
import Methodology from './Methodology';
import Team from './Team';
import Clients from './Clients';
import TargetAudience from './TargetAudience';
import Footer from './Footer';
import BootcampPage from './BootcampPage';
import SprintPage from './SprintPage';
import { LanguageProvider } from './LanguageContext';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'bootcamp' | 'sprint'>('home');

  const handleNavigate = (page: 'home' | 'bootcamp' | 'sprint') => {
    setCurrentPage(page);
    if (page === 'home') {
      // Small timeout to ensure DOM is ready before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-gray-800 scroll-smooth">
        <Navbar onNavigate={handleNavigate} />
        
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Problem />
            <ValueProp />
            <Philosophy />
            <Services onNavigate={handleNavigate} />
            <Methodology />
            <Team />
            <Clients />
            <TargetAudience />
          </>
        ) : currentPage === 'bootcamp' ? (
          <BootcampPage onBack={() => handleNavigate('home')} />
        ) : (
          <SprintPage onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />
        )}
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;