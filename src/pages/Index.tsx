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
        <div className="animate-fade-in relative z-10 min-h-screen bg-[#d4c5a9] text-[#3d2817] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#8b4513] tracking-tight">
                НЕТВОРКИНГ
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-8 text-[#5d3a1a]">
                Новый формат. Ты получишь больше инсайтов, чем ожидаешь!
              </p>
              <a 
                href="#registration" 
                className="inline-block bg-[#8b4513] text-[#f5e6d3] px-10 py-4 rounded-full text-xl font-bold hover:bg-[#6d3410] transition-all shadow-lg hover:shadow-xl"
              >
                Зарегистрироваться
              </a>
            </header>

            <div className="text-center mb-16 bg-[#c4b5a0]/50 p-8 rounded-lg shadow-md">
              <p className="text-2xl font-bold mb-2">27 ноября, 12:30 — 18:00</p>
              <p className="text-xl">Ангар Edwin Group</p>
            </div>

            <section className="mb-16">
              <h2 className="text-4xl font-black text-center mb-10 text-[#8b4513]">ТЫ СМОЖЕШЬ</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Вдохновиться историями обычных женщин и понять, что ты тоже так можешь!</span>
                </li>
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Заявить о себе на большую аудиторию или сделать свой первый шаг из тени.</span>
                </li>
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Пополнить окружение десятками качественных контактов.</span>
                </li>
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Получить ценное предложение о сотрудничестве.</span>
                </li>
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Познакомиться с новыми инструментами и получить ценные осознания.</span>
                </li>
                <li className="flex items-start gap-3 bg-[#c4b5a0]/30 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Унести с собой много приятных подарков.</span>
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black text-center mb-10 text-[#8b4513]">У НАС ТОЧНО НЕТ</h2>
              <div className="space-y-6">
                <div className="bg-[#c4b5a0]/30 p-6 rounded-lg border-l-4 border-[#8b4513]">
                  <h3 className="text-2xl font-bold mb-2">Сторонних спикеров</h3>
                  <p className="text-lg">Только наши лидеры — проверенные годами эксперты.</p>
                </div>
                <div className="bg-[#c4b5a0]/30 p-6 rounded-lg border-l-4 border-[#8b4513]">
                  <h3 className="text-2xl font-bold mb-2">Скучной теории</h3>
                  <p className="text-lg">Покажем понятные инструменты и будем работать с экспертами в моменте.</p>
                </div>
                <div className="bg-[#c4b5a0]/30 p-6 rounded-lg border-l-4 border-[#8b4513]">
                  <h3 className="text-2xl font-bold mb-2">Сложных знакомств</h3>
                  <p className="text-lg">Только управляемый нетворкинг со специальными техниками, чтобы было легко и продуктивно.</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-black text-center mb-10 text-[#8b4513]">ПРОГРАММА</h2>
              <div className="space-y-6">
                <div className="bg-[#c4b5a0]/40 p-6 rounded-lg">
                  <p className="text-2xl font-bold mb-4 text-[#8b4513]">12:30 – 14:00</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Сбор гостей, приветственный фуршет</li>
                    <li>• Съёмки с профессиональным фотографом</li>
                    <li>• Розыгрыши подарков</li>
                    <li>• Нетворкинг: Елена Дулицкая, Екатерина Медникова</li>
                  </ul>
                </div>

                <div className="bg-[#c4b5a0]/40 p-6 rounded-lg">
                  <p className="text-2xl font-bold mb-4 text-[#8b4513]">14:00 – 14:40</p>
                  <p>Работа с экспертами на станциях</p>
                </div>

                <div className="bg-[#c4b5a0]/40 p-6 rounded-lg">
                  <p className="text-2xl font-bold mb-4 text-[#8b4513]">14:40 – 15:00</p>
                  <p>Фуршет</p>
                </div>

                <div className="bg-[#c4b5a0]/40 p-6 rounded-lg">
                  <p className="text-2xl font-bold mb-4 text-[#8b4513]">15:00 – 17:10</p>
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Оксана Литвиненко</p>
                      <p className="text-sm mb-2 italic">Психолог</p>
                      <p>Синдром самозванца — неочевидный взгляд</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Ирина Рамазанова</p>
                      <p className="text-sm italic">Юрист для онлайн-бизнеса</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Ирина Пашко</p>
                      <p className="text-sm mb-2 italic">Фотограф, контент-креатор</p>
                      <p>Красивая речь и объёмный голос — основа личного бренда</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Анастасия Резникова</p>
                      <p className="text-sm mb-2 italic">Тренер по речи и публичным выступлениям</p>
                      <p>"Кривое зеркало" — как мы видим себя и других через фильтры, которые мешают проявляться</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Елена Мозер</p>
                      <p className="text-sm mb-2 italic">Коуч, автор трансформационных игр</p>
                      <p>Переход на новый уровень дохода</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Яна Глушан</p>
                      <p className="text-sm mb-2 italic">Магистр психологии, расстановщик</p>
                      <p>Как запускать осознано сарафанное радио</p>
                    </div>
                    <div className="border-l-2 border-[#8b4513] pl-4">
                      <p className="font-bold text-lg">Кристина Кузнецова</p>
                      <p className="text-sm mb-2 italic">Эксперт по клиентскому сервису и продажам</p>
                      <p>Система «ДНК Клиента»</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#c4b5a0]/40 p-6 rounded-lg">
                  <p className="text-2xl font-bold mb-4 text-[#8b4513]">17:10 – 17:30</p>
                  <p>Финал мероприятия</p>
                </div>
              </div>
            </section>

            <section className="mb-16 bg-[#8b4513]/10 p-8 rounded-lg border-2 border-[#8b4513]">
              <h2 className="text-4xl font-black text-center mb-6 text-[#8b4513]">СТАТЬ ПАРТНЁРОМ МЕРОПРИЯТИЯ</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-xl">★</span>
                  <span className="text-lg">Увеличение узнаваемости бренда</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">★</span>
                  <span className="text-lg">Прямой доступ к целевой аудитории</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">★</span>
                  <span className="text-lg">Эксклюзивные нетворкинг-возможности</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">★</span>
                  <span className="text-lg">Маркетинговое сопровождение</span>
                </li>
              </ul>
              <div className="text-center">
                <a 
                  href="#partner" 
                  className="inline-block bg-[#8b4513] text-[#f5e6d3] px-10 py-4 rounded-full text-xl font-bold hover:bg-[#6d3410] transition-all shadow-lg"
                >
                  Стать партнёром
                </a>
              </div>
            </section>

            <footer className="text-center pt-8 border-t-2 border-[#8b4513]/30">
              <div className="mb-6">
                <p className="text-lg mb-2">Контакты:</p>
                <p>+7 (XXX) XXX-XX-XX</p>
                <p>info@example.com</p>
              </div>
              <div className="space-x-4 mb-6">
                <a href="#" className="text-[#8b4513] hover:underline">VK</a>
                <a href="#" className="text-[#8b4513] hover:underline">Instagram</a>
                <a href="#" className="text-[#8b4513] hover:underline">Telegram</a>
              </div>
              <div className="text-sm space-x-4">
                <a href="#" className="hover:underline">Политика конфиденциальности</a>
                <a href="#" className="hover:underline">Публичная оферта</a>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;