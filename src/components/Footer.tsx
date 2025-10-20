import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <footer className="text-center pt-6 md:pt-8 pb-4 border-t-2 border-[#F3E8E0]/30" style={{background: 'rgba(123,30,30,0.4)', fontFamily: 'Lora, serif'}}>
        <div className="mb-6 md:mb-8">
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
        
        <div className="mb-4 md:mb-6">
          <p className="text-base md:text-lg mb-2">Контакты:</p>
          <p className="text-sm md:text-base">+7-914-704-35-36</p>
        </div>
        <div className="space-x-3 md:space-x-4 mb-4 md:mb-6">
          <a href="#" className="text-[#F3E8E0] hover:underline fade-in text-sm md:text-base" style={{animationDelay: '0.2s'}}>VK</a>
          <a href="#" className="text-[#F3E8E0] hover:underline fade-in text-sm md:text-base" style={{animationDelay: '0.3s'}}>Instagram</a>
          <a href="#" className="text-[#F3E8E0] hover:underline fade-in text-sm md:text-base" style={{animationDelay: '0.4s'}}>Telegram</a>
        </div>
        <div className="text-xs md:text-sm flex flex-col md:flex-row md:space-x-4 gap-2 md:gap-0 justify-center">
          <a href="#" className="hover:underline opacity-80">Политика конфиденциальности</a>
          <a href="#" className="hover:underline opacity-80">Публичная оферта</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;