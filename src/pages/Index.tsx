import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import EnvelopeAnimation from '@/components/EnvelopeAnimation';
import NetworkingHeader from '@/components/NetworkingHeader';
import EventInfo from '@/components/EventInfo';
import WhatsNotIncluded from '@/components/WhatsNotIncluded';
import ProgramSection from '@/components/ProgramSection';
import TestimonialsScroll from '@/components/TestimonialsScroll';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!envelopeOpen) return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const stepElements = document.querySelectorAll('.program-step');
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !visibleSteps.includes(index)) {
          setVisibleSteps(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [envelopeOpen, visibleSteps]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnvelope = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnimating(true);
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-explosion';
      
      const angle = Math.random() * 2 * Math.PI;
      const dist = Math.random() * 300 + 100;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      
      particle.style.setProperty('--dx', `${dx}px`);
      particle.style.setProperty('--dy', `${dy}px`);
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 2000);
    }
    
    setTimeout(() => {
      setEnvelopeOpen(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#333333] overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 md:top-10 left-5 md:left-10 w-40 h-40 md:w-72 md:h-72 bg-[#f24822]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 md:top-40 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 md:bottom-20 left-1/4 md:left-1/3 w-40 h-40 md:w-80 md:h-80 bg-[#ff6b9d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-[#c471ed]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {!envelopeOpen && (
        <EnvelopeAnimation onOpenEnvelope={handleOpenEnvelope} animating={animating} />
      )}

      {envelopeOpen && (
        <div className="animate-fade-in relative z-10 min-h-screen bg-gradient-to-br from-[#7B1E1E] via-[#5d1616] to-[#4A0F0F] py-8 md:py-12">
          <MatrixBackground />
          <style>{`
            #main-content h1, 
            #main-content h2, 
            #main-content h3, 
            #main-content h4, 
            #main-content h5, 
            #main-content h6 {
              background: linear-gradient(90deg, #ff6b00, #ff8c00, #ffaa00, #ffd700, #bfff00, #00ff41);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: textGradientShift 4s ease-in-out infinite;
              font-weight: 800;
            }
            
            #main-content p,
            #main-content span:not([class*="lucide"]):not(svg):not(path),
            #main-content li span,
            #main-content a {
              color: #F3E8E0;
              font-weight: 600;
            }
          `}</style>
          <div id="main-content">
            <div className="max-w-4xl mx-auto relative z-10 px-4 mb-8 md:mb-12">
              <div className="text-center bg-[#F3E8E0]/20 backdrop-blur-sm px-4 md:px-6 py-4 rounded-lg border border-[#F3E8E0]/40">
                <p className="text-base md:text-lg mb-3 font-semibold">Онлайн консультант</p>
                <a 
                  href="https://t.me/+79147050252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F3E8E0]/20 hover:bg-[#F3E8E0]/30 transition-all px-4 md:px-6 py-3 rounded-lg border border-[#F3E8E0]/40 hover:scale-105"
                >
                  <Icon name="MessageCircle" size={24} className="text-[#F3E8E0]" />
                  <span className="text-base md:text-lg font-semibold">Написать в Telegram</span>
                </a>
              </div>
            </div>
            
            <NetworkingHeader />
            <EventInfo />
            <WhatsNotIncluded />
            <ProgramSection />
            <TestimonialsScroll />
            <RegistrationSection />
            <Footer />
          </div>

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-4 md:bottom-8 md:right-8 bg-[#F3E8E0] text-[#7B1E1E] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
              aria-label="Вернуться наверх"
            >
              <Icon name="ArrowUp" size={20} className="md:w-6 md:h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;