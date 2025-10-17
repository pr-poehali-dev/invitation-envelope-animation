import Icon from '@/components/ui/icon';

const EventInfo = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <div className="text-center mb-12 md:mb-16 bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 icon-bounce" style={{animationDelay: '0.1s'}}>
          <Icon name="Calendar" size={28} className="text-[#F3E8E0] md:w-9 md:h-9" />
          <p className="text-lg md:text-2xl font-bold" style={{fontFamily: 'Lora, serif'}}>27 ноября, 12:30 — 18:00</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          <Icon name="MapPin" size={28} className="text-[#F3E8E0] md:w-9 md:h-9" />
          <p className="text-base md:text-xl" style={{fontFamily: 'Lora, serif'}}>Ангар Edwin Group</p>
        </div>
      </div>

      <section className="mb-12 md:mb-16 fade-in" style={{animationDelay: '0.3s'}}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <img 
            src="https://cdn.poehali.dev/files/257e4ec2-dca5-44cc-82b6-abb69c75c80f.jpg" 
            alt="Нетворкинг участницы" 
            className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://cdn.poehali.dev/files/c0f7c3fd-a2a0-457b-8a87-ea115a4ae0ab.jpg" 
            alt="Участницы мероприятия" 
            className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="https://cdn.poehali.dev/files/984051b9-171f-482d-b23b-2839756824e3.jpg" 
            alt="Команда нетворкинга" 
            className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ТЫ СМОЖЕШЬ</h2>
        <ul className="space-y-3 md:space-y-4">
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.4s'}}>
            <Icon name="Heart" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Вдохновиться историями обычных женщин и понять, что ты тоже так можешь!</span>
          </li>
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.5s'}}>
            <Icon name="Megaphone" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Заявить о себе на большую аудиторию или сделать свой первый шаг из тени.</span>
          </li>
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.4s'}}>
            <Icon name="Users" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Пополнить окружение десятками качественных контактов.</span>
          </li>
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.5s'}}>
            <Icon name="Handshake" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Получить ценное предложение о сотрудничестве.</span>
          </li>
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-left" style={{animationDelay: '0.6s'}}>
            <Icon name="Lightbulb" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Познакомиться с новыми инструментами и получить ценные осознания.</span>
          </li>
          <li className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg hover:bg-white/20 transition-all fade-in-right" style={{animationDelay: '0.6s'}}>
            <Icon name="Gift" size={20} className="text-[#F3E8E0] flex-shrink-0 mt-1 icon-rotate md:w-6 md:h-6" />
            <span className="text-base md:text-lg" style={{fontFamily: 'Lora, serif'}}>Унести с собой много приятных подарков.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EventInfo;