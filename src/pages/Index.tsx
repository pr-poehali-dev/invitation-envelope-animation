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
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f24822]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#ff6b9d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#c471ed]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {!envelopeOpen && (
        <EnvelopeAnimation onOpenEnvelope={handleOpenEnvelope} animating={animating} />
      )}

      {envelopeOpen && (
        <div className="animate-fade-in relative z-10 min-h-screen bg-gradient-to-br from-[#7B1E1E] via-[#5d1616] to-[#4A0F0F] text-[#F3E8E0] py-12 px-4">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,50 Q30,30 40,50 T60,50 T80,50' stroke='%23F3E8E0' fill='none' stroke-width='0.5'/%3E%3Cpath d='M10,70 Q20,50 30,70 T50,70 T70,70' stroke='%23F3E8E0' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>

          <NetworkingHeader />
          <EventInfo />
          <WhatsNotIncluded />
          <ProgramSection />
          <TestimonialsScroll />
          <RegistrationSection />
          <Footer />

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-[#F3E8E0] text-[#7B1E1E] p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
              aria-label="Вернуться наверх"
            >
              <Icon name="ArrowUp" size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
