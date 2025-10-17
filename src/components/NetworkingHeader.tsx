const NetworkingHeader = () => {
  return (
    <>
      <div className="sticky-header py-4 mb-8" style={{background: 'rgba(123, 30, 30, 0.95)', backdropFilter: 'blur(10px)'}}>
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/0f9441d2-9e9a-466e-bde4-0c8aea109f17.jpg" 
              alt="Логотип" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>НЕТВОРКИНГ</h1>
          </div>
          <a 
            href="https://kodpublichnosti-vl.ru/networking" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F3E8E0] text-[#7B1E1E] px-6 py-2 rounded-full font-bold hover:scale-105 transition-all text-sm"
            style={{fontFamily: 'Lora, serif'}}
          >
            Узнать подробнее
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight fade-in-down" style={{fontFamily: 'Playfair Display, serif', animationDelay: '0.2s'}}>
            НЕТВОРКИНГ
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 fade-in-up" style={{fontFamily: 'Lora, serif', animationDelay: '0.4s'}}>
            Новый формат. Ты получишь больше инсайтов, чем ожидаешь!
          </p>
          <a 
            href="#registration" 
            className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
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
