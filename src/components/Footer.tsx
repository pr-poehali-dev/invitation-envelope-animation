const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <footer className="text-center pt-6 md:pt-8 pb-4 border-t-2 border-[#F3E8E0]/30" style={{background: 'rgba(123,30,30,0.4)', fontFamily: 'Lora, serif'}}>
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