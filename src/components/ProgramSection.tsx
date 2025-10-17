import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
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
                <Icon name="Sparkles" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                <span>Открытие, выступление гостей нетворкинга, раскрытие темы дня</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Users" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1" />
                <span>Игра-знакомство</span>
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
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/d416b063-f87e-439a-afbc-379ff5a454f2.jpg" 
                      alt="Оксана Литвиненко" 
                      className="w-full h-full object-cover object-center scale-[1.4]"
                    />
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
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/d1d11e95-10de-430d-bf64-7b088caf294d.jpg" 
                      alt="Ирина Пашко" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Ирина Пашко</p>
                    <p className="text-sm mb-2 italic opacity-80">Фотограф, контент-креатор</p>
                    <p className="text-sm">Красивая речь и объёмный голос — основа личного бренда</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/98899be7-82bd-420b-9932-5772fab4b707.jpg" 
                      alt="Анастасия Резникова" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Анастасия Резникова</p>
                    <p className="text-sm mb-2 italic opacity-80">Тренер по речи и публичным выступлениям</p>
                    <p className="text-sm">"Кривое зеркало" — как мы видим себя и других через фильтры, которые мешают проявляться</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/7fbdd71d-7bff-4393-9c4f-c148f2538c3f.jpg" 
                      alt="Елена Мозер" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Елена Мозер</p>
                    <p className="text-sm mb-2 italic opacity-80">Коуч, автор трансформационных игр</p>
                    <p className="text-sm">Переход на новый уровень дохода</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/b6025181-7fe7-45b8-b4ad-d68a2a7887c8.jpg" 
                      alt="Яна Глушан" 
                      className="w-full h-full object-cover object-center scale-125"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Яна Глушан</p>
                    <p className="text-sm mb-2 italic opacity-80">Магистр психологии, расстановщик</p>
                    <p className="text-sm">Как запускать осознано сарафанное радио</p>
                  </div>
                </div>
              </div>
              <div className="fade-in-up" style={{animationDelay: '0.7s'}}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-40 h-40 rounded-full speaker-photo-glow overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/f1f4502e-6d16-4baf-8964-dcc655cc3cc7.jpg" 
                      alt="Кристина Кузнецова" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
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
    </div>
  );
};

export default ProgramSection;