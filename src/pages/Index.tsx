import { useState, useEffect } from 'react';

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

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
        <section className="h-screen flex items-center justify-center relative z-10">
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <div className="relative w-full max-w-3xl mx-auto z-10">
              <button
                onClick={handleOpenEnvelope}
                disabled={animating}
                className={`w-full transition-all duration-1000 ease-out hover:scale-105 disabled:opacity-50 ${
                  animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <img 
                  src="https://cdn.poehali.dev/files/90401f5b-2fe1-45c3-9511-f55caa486631.jpeg" 
                  alt="Ваш билет на нетворкинг" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </button>
            </div>
          </div>
        </section>
      )}

      {envelopeOpen && (
        <div className="animate-fade-in relative z-10 min-h-screen bg-[#d4c5a9]">
        </div>
      )}
    </div>
  );
};

export default Index;
