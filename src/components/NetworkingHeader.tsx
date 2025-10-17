const NetworkingHeader = () => {
  return (
    <>
      <div className="sticky-header py-3 md:py-4 mb-8" style={{background: 'rgba(123, 30, 30, 0.95)', backdropFilter: 'blur(10px)'}}>
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <img 
              src="https://cdn.poehali.dev/files/0f9441d2-9e9a-466e-bde4-0c8aea109f17.jpg" 
              alt="Логотип" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <h1 className="text-lg md:text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>НЕТВОРКИНГ</h1>
          </div>
          <a 
            href="https://kodpublichnosti-vl.ru/networking" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F3E8E0] text-[#7B1E1E] px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold hover:scale-105 transition-all text-xs md:text-sm"
            style={{fontFamily: 'Lora, serif'}}
          >
            Подробнее
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight fade-in-down" style={{fontFamily: 'Playfair Display, serif', animationDelay: '0.2s'}}>
            НЕТВОРКИНГ
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 fade-in-up px-2" style={{fontFamily: 'Lora, serif', animationDelay: '0.4s'}}>
            Новый формат. Ты получишь больше инсайтов, чем ожидаешь!
          </p>
          <a 
            href="#registration" 
            className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
            style={{fontFamily: 'Lora, serif', animationDelay: '0.6s'}}
          >
            Зарегистрироваться
          </a>
        </header>
      </div>
    </>
  );
};

export default NetworkingHeader;