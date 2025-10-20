import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  const speakersRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (speakersRef.current) {
      observer.observe(speakersRef.current);
    }

    return () => {
      if (speakersRef.current) {
        observer.unobserve(speakersRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <section className="mb-12 md:mb-16" id="program">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ПРОГРАММА</h2>
        
        <div className="mb-8 md:mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full program-step step-fade-in text-sm md:text-base" style={{fontFamily: 'Lora, serif'}}>
            <Icon name="UserCheck" size={18} className="text-[#F3E8E0] md:w-6 md:h-6" />
            <span className="font-semibold">Регистрация</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full program-step step-fade-in text-sm md:text-base" style={{animationDelay: '0.1s', fontFamily: 'Lora, serif'}}>
            <Icon name="Mic" size={18} className="text-[#F3E8E0] md:w-6 md:h-6" />
            <span className="font-semibold">Вступительное слово</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full program-step step-fade-in text-sm md:text-base" style={{animationDelay: '0.2s', fontFamily: 'Lora, serif'}}>
            <Icon name="Users" size={18} className="text-[#F3E8E0] icon-wave md:w-6 md:h-6" />
            <span className="font-semibold">Работа с экспертами</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full program-step step-fade-in text-sm md:text-base" style={{animationDelay: '0.3s', fontFamily: 'Lora, serif'}}>
            <Icon name="Utensils" size={18} className="text-[#F3E8E0] md:w-6 md:h-6" />
            <span className="font-semibold">Фуршет</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full program-step step-fade-in text-sm md:text-base" style={{animationDelay: '0.4s', fontFamily: 'Lora, serif'}}>
            <Icon name="Flag" size={18} className="text-[#F3E8E0] md:w-6 md:h-6" />
            <span className="font-semibold">Завершение</span>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg fade-in-left" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{fontFamily: 'Playfair Display, serif'}}>12:30 – 14:00</p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base" style={{fontFamily: 'Lora, serif'}}>
              <li className="flex items-start gap-2 md:gap-3">
                <Icon name="Coffee" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                <span>Сбор гостей, приветственный фуршет</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Icon name="Sparkles" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                <span>Открытие, выступление гостей нетворкинга, раскрытие темы дня</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Icon name="Users" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                <span>Игра-знакомство</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg fade-in-right" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{fontFamily: 'Playfair Display, serif'}}>14:00 – 14:40</p>
            <div className="flex items-start gap-2 md:gap-3">
              <Icon name="Settings" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
              <p className="text-sm md:text-base" style={{fontFamily: 'Lora, serif'}}>Работа с экспертами на станциях</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg fade-in-right" style={{animationDelay: '0.3s'}}>
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{fontFamily: 'Playfair Display, serif'}}>14:40 – 15:00</p>
            <div className="flex items-start gap-2 md:gap-3">
              <Icon name="Utensils" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
              <p className="text-sm md:text-base" style={{fontFamily: 'Lora, serif'}}>Фуршет</p>
            </div>
          </div>

          <div ref={speakersRef} className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg fade-in-up">
            <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center" style={{fontFamily: 'Playfair Display, serif'}}>15:00 – 17:10</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" style={{fontFamily: 'Lora, serif'}}>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/d416b063-f87e-439a-afbc-379ff5a454f2.jpg" 
                      alt="Оксана Литвиненко" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Оксана Литвиненко</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Психолог</p>
                    <p className="text-xs md:text-sm">Синдром самозванца — неочевидный взгляд</p>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/d1d11e95-10de-430d-bf64-7b088caf294d.jpg" 
                      alt="Ирина Пашко" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Ирина Пашко</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Фотограф, контент-креатор</p>
                    <p className="text-xs md:text-sm">Красивая речь и объёмный голос — основа личного бренда</p>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/98899be7-82bd-420b-9932-5772fab4b707.jpg" 
                      alt="Анастасия Резникова" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Анастасия Резникова</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Тренер по речи и публичным выступлениям</p>
                    <p className="text-xs md:text-sm">"Кривое зеркало" — как мы видим себя и других через фильтры, которые мешают проявляться</p>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/7fbdd71d-7bff-4393-9c4f-c148f2538c3f.jpg" 
                      alt="Елена Мозер" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Елена Мозер</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Коуч, автор трансформационных игр</p>
                    <p className="text-xs md:text-sm">Переход на новый уровень дохода</p>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/3e54f4c9-9c9f-41a9-b07c-a3b54cb41c4d.jpg" 
                      alt="Ольга Калугина" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Ольга Калугина</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Юрист</p>
                    <p className="text-xs md:text-sm">Как регистрироваться и вести дела самозанятому</p>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '500ms'}}>
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/38f9ecce-0ee9-499c-b2d3-aaff7ea1fc01.jpg" 
                      alt="Евгения Боровцова" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Евгения Боровцова</p>
                    <p className="text-xs md:text-sm mb-1 md:mb-2 italic opacity-80">Клинический психолог</p>
                    <p className="text-xs md:text-sm">Эмоциональное выгорание. Миф или реальность?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg fade-in-left" style={{animationDelay: '0.4s'}}>
            <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{fontFamily: 'Playfair Display, serif'}}>17:10 – 17:30</p>
            <div className="flex items-start gap-2 md:gap-3">
              <Icon name="Gift" size={18} className="text-[#F3E8E0] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
              <p className="text-sm md:text-base" style={{fontFamily: 'Lora, serif'}}>Розыгрыш призов, завершение</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramSection;