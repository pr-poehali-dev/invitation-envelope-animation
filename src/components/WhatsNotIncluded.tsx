import Icon from '@/components/ui/icon';

const WhatsNotIncluded = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
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
    </div>
  );
};

export default WhatsNotIncluded;
