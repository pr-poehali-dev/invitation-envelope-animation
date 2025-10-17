const RegistrationSection = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <section className="mb-12 md:mb-16 text-center fade-in" id="registration">
        <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8" style={{fontFamily: 'Playfair Display, serif'}}>ЗАРЕГИСТРИРОВАТЬСЯ</h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 px-4" style={{fontFamily: 'Lora, serif'}}>
          Количество мест ограничено. Успейте зарегистрироваться!
        </p>
        <a 
          href="https://wa.me/79147043536" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-2xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
          style={{fontFamily: 'Lora, serif', animationDelay: '0.2s'}}
        >
          Забронировать место
        </a>
      </section>
    </div>
  );
};

export default RegistrationSection;