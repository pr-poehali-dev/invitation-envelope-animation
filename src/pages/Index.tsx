import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

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
        <div className="animate-fade-in relative z-10 min-h-screen bg-gradient-to-br from-[#7B1E1E] via-[#5d1616] to-[#4A0F0F] text-[#F3E8E0] py-12 px-4">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,50 Q30,30 40,50 T60,50 T80,50' stroke='%23F3E8E0' fill='none' stroke-width='0.5'/%3E%3Cpath d='M10,70 Q20,50 30,70 T50,70 T70,70' stroke='%23F3E8E0' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
          <div className="sticky-header py-4 mb-8" style={{background: 'rgba(123, 30, 30, 0.95)', backdropFilter: 'blur(10px)'}}>
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
              <h1 className="text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>НЕТВОРКИНГ</h1>
              <a 
                href="#registration" 
                className="bg-[#F3E8E0] text-[#7B1E1E] px-6 py-2 rounded-full font-bold hover:scale-105 transition-all text-sm"
                style={{fontFamily: 'Lora, serif'}}
              >
                Регистрация
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <header className="text-center mb-16">
              <img 
                src="/lovable-uploads/4547df9b-34c5-6fed-b5cb-484a567cca5d.png" 
                alt="Networking Event" 
                className="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-2xl fade-in-up"
                style={{animationDelay: '0.1s'}}
              />
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight fade-in-down" style={{fontFamily: 'Playfair Display, serif', animationDelay: '0.2s'}}>
                НЕТВОРКИНГ
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-8 fade-in-up" style={{fontFamily: 'Lora, serif', animationDelay: '0.4s'}}>
                Новый формат. Ты получишь больше инсайтов, чем ожидаешь!
              </p>
              <a 
                href="#registration" 
                className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
                style={{fontFamily: 'Lora, serif', animationDelay: '0.6s'}}
              >
                Зарегистрироваться
              </a>
            </header>

            <div className="text-center mb-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center gap-3 mb-4 icon-bounce" style={{animationDelay: '0.1s'}}>
                <Icon name="Calendar" size={36} className="text-[#F3E8E0]" />
                <p className="text-2xl font-bold" style={{fontFamily: 'Lora, serif'}}>27 ноября, 12:30 — 18:00</p>
              </div>
              <div className="flex items-center justify-center gap-3 icon-jello" style={{animationDelay: '0.2s'}}>
                <Icon name="MapPin" size={36} className="text-[#F3E8E0]" />
                <p className="text-xl" style={{fontFamily: 'Lora, serif'}}>Ангар Edwin Group</p>
              </div>
            </div>

            <section className="mb-16 fade-in" style={{animationDelay: '0.3s'}}>
              <h2 className="text-4xl font-black text-center mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ТЫ СМОЖЕШЬ</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.4s'}}>
                  <Icon name="Heart" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Вдохновиться историями обычных женщин и понять, что ты тоже так можешь!</span>
                </li>
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.5s'}}>
                  <Icon name="Megaphone" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Заявить о себе на большую аудиторию или сделать свой первый шаг из тени.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.4s'}}>
                  <Icon name="Users" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Пополнить окружение десятками качественных контактов.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.5s'}}>
                  <Icon name="Handshake" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Получить ценное предложение о сотрудничестве.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.6s'}}>
                  <Icon name="Lightbulb" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Познакомиться с новыми инструментами и получить ценные осознания.</span>
                </li>
                <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.6s'}}>
                  <Icon name="Gift" size={24} className="text-[#F3E8E0] flex-shrink-0 mt-1 icon-rotate" />
                  <span className="text-lg" style={{fontFamily: 'Lora, serif'}}>Унести с собой много приятных подарков.</span>
                </li>
              </ul>
            </section>

            <section className="mb-16 fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-black text-center mb-10" style={{fontFamily: 'Playfair Display, serif'}}>У НАС ТОЧНО НЕТ</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-start gap-3">
                    <Icon name="UserX" size={28} className="text-[#F3E8E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Сторонних спикеров</h3>
                      <p className="text-lg" style={{fontFamily: 'Lora, serif'}}>Только наши лидеры — проверенные годами эксперты.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-start gap-3">
                    <Icon name="BookX" size={28} className="text-[#F3E8E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Скучной теории</h3>
                      <p className="text-lg" style={{fontFamily: 'Lora, serif'}}>Покажем понятные инструменты и будем работать с экспертами в моменте.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-start gap-3">
                    <Icon name="Wand2" size={28} className="text-[#F3E8E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Сложных знакомств</h3>
                      <p className="text-lg" style={{fontFamily: 'Lora, serif'}}>Только управляемый нетворкинг со специальными техниками, чтобы было легко и продуктивно.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16" id="program">
              <h2 className="text-4xl font-black text-center mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ПРОГРАММА</h2>
              
              <div className="mb-12 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full program-step step-fade-in" style={{fontFamily: 'Lora, serif'}}>
                  <Icon name="UserCheck" size={24} className="text-[#F3E8E0]" />
                  <span className="font-semibold">Регистрация</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full program-step step-fade-in" style={{animationDelay: '0.1s', fontFamily: 'Lora, serif'}}>
                  <Icon name="Mic" size={24} className="text-[#F3E8E0]" />
                  <span className="font-semibold">Вступительное слово</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full program-step step-fade-in" style={{animationDelay: '0.2s', fontFamily: 'Lora, serif'}}>
                  <Icon name="Users" size={24} className="text-[#F3E8E0] icon-wave" />
                  <span className="font-semibold">Работа с экспертами</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full program-step step-fade-in" style={{animationDelay: '0.3s', fontFamily: 'Lora, serif'}}>
                  <Icon name="Utensils" size={24} className="text-[#F3E8E0]" />
                  <span className="font-semibold">Фуршет</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full program-step step-fade-in" style={{animationDelay: '0.4s', fontFamily: 'Lora, serif'}}>
                  <Icon name="Flag" size={24} className="text-[#F3E8E0]" />
                  <span className="font-semibold">Завершение</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg fade-in-left" style={{animationDelay: '0.2s'}}>
                  <p className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>12:30 – 14:00</p>
                  <ul className="space-y-3" style={{fontFamily: 'Lora, serif'}}>
                    <li className="flex items-start gap-3">
                      <Icon name="Coffee" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                      <span>Сбор гостей, приветственный фуршет</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Camera" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                      <span>Съёмки с профессиональным фотографом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Gift" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                      <span>Розыгрыши подарков</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                      <span>Нетворкинг: Елена Дулицкая, Екатерина Медникова</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg fade-in-right" style={{animationDelay: '0.2s'}}>
                  <p className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>14:00 – 14:40</p>
                  <div className="flex items-start gap-3">
                    <Icon name="Settings" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                    <p style={{fontFamily: 'Lora, serif'}}>Работа с экспертами на станциях</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg fade-in-right" style={{animationDelay: '0.3s'}}>
                  <p className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>14:40 – 15:00</p>
                  <div className="flex items-start gap-3">
                    <Icon name="Utensils" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                    <p style={{fontFamily: 'Lora, serif'}}>Фуршет</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg fade-in-up">
                  <p className="text-2xl font-bold mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>15:00 – 17:10</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" style={{fontFamily: 'Lora, serif'}}>
                    <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Оксана Литвиненко</p>
                          <p className="text-sm mb-2 italic opacity-80">Психолог</p>
                          <p className="text-sm">Синдром самозванца — неочевидный взгляд</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Ирина Рамазанова</p>
                          <p className="text-sm mb-2 italic opacity-80">Юрист для онлайн-бизнеса</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Ирина Пашко</p>
                          <p className="text-sm mb-2 italic opacity-80">Фотограф, контент-креатор</p>
                          <p className="text-sm">Красивая речь и объёмный голос — основа личного бренда</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.5s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Анастасия Резникова</p>
                          <p className="text-sm mb-2 italic opacity-80">Тренер по речи и публичным выступлениям</p>
                          <p className="text-sm">"Кривое зеркало" — как мы видим себя и других через фильтры, которые мешают проявляться</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Елена Мозер</p>
                          <p className="text-sm mb-2 italic opacity-80">Коуч, автор трансформационных игр</p>
                          <p className="text-sm">Переход на новый уровень дохода</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.7s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Яна Глушан</p>
                          <p className="text-sm mb-2 italic opacity-80">Магистр психологии, расстановщик</p>
                          <p className="text-sm">Как запускать осознано сарафанное радио</p>
                        </div>
                      </div>
                    </div>
                    <div className="fade-in-up" style={{animationDelay: '0.8s'}}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2E2E] to-[#5d1616] flex items-center justify-center speaker-photo-glow">
                          <Icon name="User" size={48} className="text-[#F3E8E0]" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Кристина Кузнецова</p>
                          <p className="text-sm mb-2 italic opacity-80">Эксперт по клиентскому сервису и продажам</p>
                          <p className="text-sm">Система «ДНК Клиента»</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg fade-in" style={{animationDelay: '0.2s'}}>
                  <p className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>17:10 – 17:30</p>
                  <div className="flex items-start gap-3">
                    <Icon name="FlagCheckered" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" fallback="Flag" />
                    <p style={{fontFamily: 'Lora, serif'}}>Финал мероприятия</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-[#F3E8E0] fade-in" id="partner">
              <h2 className="text-4xl font-black text-center mb-6" style={{fontFamily: 'Playfair Display, serif'}}>СТАТЬ ПАРТНЁРОМ МЕРОПРИЯТИЯ</h2>
              <ul className="space-y-3 mb-8" style={{fontFamily: 'Lora, serif'}}>
                <li className="flex items-center gap-3 fade-in-up" style={{animationDelay: '0.2s'}}>
                  <Icon name="Megaphone" size={24} className="text-[#F3E8E0] flex-shrink-0" />
                  <span className="text-lg">Увеличение узнаваемости бренда</span>
                </li>
                <li className="flex items-center gap-3 fade-in-up" style={{animationDelay: '0.3s'}}>
                  <Icon name="Users" size={24} className="text-[#F3E8E0] flex-shrink-0" />
                  <span className="text-lg">Прямой доступ к целевой аудитории</span>
                </li>
                <li className="flex items-center gap-3 fade-in-up" style={{animationDelay: '0.4s'}}>
                  <Icon name="Handshake" size={24} className="text-[#F3E8E0] flex-shrink-0" />
                  <span className="text-lg">Эксклюзивные нетворкинг-возможности</span>
                </li>
                <li className="flex items-center gap-3 fade-in-up" style={{animationDelay: '0.5s'}}>
                  <Icon name="ChartBar" size={24} className="text-[#F3E8E0] flex-shrink-0" />
                  <span className="text-lg">Маркетинговое сопровождение</span>
                </li>
              </ul>
              <div className="text-center">
                <a 
                  href="#partner" 
                  className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
                  style={{fontFamily: 'Lora, serif', animationDelay: '0.6s'}}
                >
                  Стать партнёром
                </a>
              </div>
            </section>

            <section className="mb-16 text-center fade-in" id="registration">
              <h2 className="text-4xl font-black mb-8" style={{fontFamily: 'Playfair Display, serif'}}>ЗАРЕГИСТРИРОВАТЬСЯ</h2>
              <p className="text-xl mb-8" style={{fontFamily: 'Lora, serif'}}>
                Количество мест ограничено. Успейте зарегистрироваться!
              </p>
              <a 
                href="#registration" 
                className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-12 py-4 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
                style={{fontFamily: 'Lora, serif', animationDelay: '0.2s'}}
              >
                Забронировать место
              </a>
            </section>

            <footer className="text-center pt-8 border-t-2 border-[#F3E8E0]/30" style={{background: 'rgba(123,30,30,0.4)', fontFamily: 'Lora, serif'}}>
              <div className="mb-6">
                <p className="text-lg mb-2">Контакты:</p>
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>info@example.com</p>
              </div>
              <div className="space-x-4 mb-6">
                <a href="#" className="text-[#F3E8E0] hover:underline fade-in" style={{animationDelay: '0.2s'}}>VK</a>
                <a href="#" className="text-[#F3E8E0] hover:underline fade-in" style={{animationDelay: '0.3s'}}>Instagram</a>
                <a href="#" className="text-[#F3E8E0] hover:underline fade-in" style={{animationDelay: '0.4s'}}>Telegram</a>
              </div>
              <div className="text-sm space-x-4">
                <a href="#" className="hover:underline opacity-80">Политика конфиденциальности</a>
                <a href="#" className="hover:underline opacity-80">Публичная оферта</a>
              </div>
            </footer>
          </div>

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