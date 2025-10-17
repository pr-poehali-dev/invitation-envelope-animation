import Icon from '@/components/ui/icon';

const WhatsNotIncluded = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <section className="mb-12 md:mb-16 fade-in" style={{animationDelay: '0.2s'}}>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-10" style={{fontFamily: 'Playfair Display, serif'}}>У НАС ТОЧНО НЕТ</h2>
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start gap-3">
              <Icon name="UserX" size={24} className="text-[#F3E8E0] flex-shrink-0 md:w-7 md:h-7" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Сторонних спикеров</h3>
                <p className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Только наши лидеры — проверенные годами эксперты.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-start gap-3">
              <Icon name="BookX" size={24} className="text-[#F3E8E0] flex-shrink-0 md:w-7 md:h-7" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Скучной теории</h3>
                <p className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Покажем понятные инструменты и будем работать с экспертами в моменте.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border-l-4 border-[#F3E8E0] fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="flex items-start gap-3">
              <Icon name="Wand2" size={24} className="text-[#F3E8E0] flex-shrink-0 md:w-7 md:h-7" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Сложных знакомств</h3>
                <p className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Только управляемый нетворкинг со специальными техниками, чтобы было легко и продуктивно.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsNotIncluded;