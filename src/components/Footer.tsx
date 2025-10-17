const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
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
  );
};

export default Footer;
