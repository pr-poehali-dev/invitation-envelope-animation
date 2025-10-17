const RegistrationSection = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
      <section className="mb-16 text-center fade-in" id="registration">
        <h2 className="text-4xl font-black mb-8" style={{fontFamily: 'Playfair Display, serif'}}>ЗАРЕГИСТРИРОВАТЬСЯ</h2>
        <p className="text-xl mb-8" style={{fontFamily: 'Lora, serif'}}>
          Количество мест ограничено. Успейте зарегистрироваться!
        </p>
        <a 
          href="https://wa.me/79147043536" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F3E8E0] text-[#7B1E1E] px-12 py-4 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-lg zoom-in"
          style={{fontFamily: 'Lora, serif', animationDelay: '0.2s'}}
        >
          Забронировать место
        </a>
      </section>
    </div>
  );
};

export default RegistrationSection;