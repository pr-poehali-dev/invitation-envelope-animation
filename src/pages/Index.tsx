import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2024-11-27T12:30:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenEnvelope = () => {
    setAnimating(true);
    setTimeout(() => {
      setEnvelopeOpen(true);
    }, 1000);
  };

  const benefits = [
    { icon: 'Users', text: 'Четыре эксперт-станции на выбор с бронированием мест' },
    { icon: 'MessageSquare', text: 'Фасилитация и мастермайнд-группы – готовые планы' },
    { icon: 'Award', text: 'Модераторы – только проверенные спикеры' },
    { icon: 'Laptop', text: 'Онлайн-тренинг «Как получить максимум пользы от нетворкинга»' },
    { icon: 'Gift', text: 'Подарочный пакет и профессиональные фото' }
  ];

  const reviews = [
    {
      name: 'Анна Иванова',
      role: 'Основатель проекта XYZ',
      text: 'Нашла двух ключевых партнёров и запустила совместный продукт за неделю.'
    },
    {
      name: 'Ольга Петрова',
      role: 'Маркетолог',
      text: 'Настолько структурированное общение я вижу впервые — результативная сессия!'
    }
  ];

  const faq = [
    {
      q: 'Как выбрать станцию?',
      a: 'Бронирование откроется 20 октября. Выберите 3 наилучших темы.'
    },
    {
      q: 'Можно ли передать билет?',
      a: 'Да, вы можете передать билет другому участнику до 24 ноября.'
    },
    {
      q: 'Будет ли запись?',
      a: 'Нет, формат закрытый для живого взаимодействия.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] text-[#333333] overflow-x-hidden">
      {!envelopeOpen && (
        <section className="h-screen flex items-center justify-center relative">
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <div className="relative w-full max-w-3xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/a2e04557-1822-4a0c-9898-0c17c9d33cc6.jpg" 
                alt="Конверт с приглашением" 
                className={`w-full h-auto transition-all duration-1000 ease-out ${
                  animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={handleOpenEnvelope}
                  disabled={animating}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full transform transition-all hover:scale-110 disabled:opacity-50"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #c45d6f 0%, #a84554 40%, #8b2f3d 100%)',
                    boxShadow: '0 12px 30px rgba(139, 47, 61, 0.4), 0 6px 12px rgba(0,0,0,0.2), inset 0 -2px 8px rgba(0,0,0,0.3), inset 0 2px 8px rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-serif text-sm md:text-base tracking-[0.2em] uppercase" style={{ fontFamily: 'Georgia, serif', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
                      {animating ? 'Открываем' : 'Нажать'}
                    </span>
                  </div>
                  <div className="absolute inset-3 rounded-full border border-white/20"></div>
                  <div className="absolute inset-6 rounded-full border border-white/10"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {envelopeOpen && (
        <div className="animate-fade-in">
          <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-[#1a2253]/10 z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-xl font-bold tracking-wider text-[#1a2253]">КОД ПУБЛИЧНОСТИ</div>
              <Button 
                variant="outline" 
                className="border-[#1a2253] text-[#1a2253] hover:bg-[#1a2253] hover:text-white transition-colors"
                onClick={() => window.open('https://maps.google.com/?q=Ангар Edwin Group', '_blank')}
              >
                <Icon name="MapPin" className="mr-2" size={18} />
                Ангар Edwin Group
              </Button>
            </div>
          </header>

          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl text-center">
              <div className="mb-8">
                <Icon name="Sparkles" size={64} className="mx-auto text-[#f24822] mb-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#1a2253]">
                Нетворкинг уровня PRO:<br />получи за 5 часов контакты на год вперёд
              </h1>
              <p className="text-xl md:text-2xl text-[#333333] font-light mb-8">
                27 ноября, 12:30–18:00, Ангар Edwin Group<br />
                Мастермайнд-формат без теории – всё для мгновенного результата
              </p>
              <Button 
                size="lg" 
                className="bg-[#f24822] hover:bg-[#d63d1a] text-white text-lg px-12 py-6 rounded-full"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Купить билет
              </Button>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a2253] to-[#2a3565] text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Ты тратишь часы на встречи, но связи не приносят пользы
              </h2>
              <p className="text-lg md:text-xl text-center mb-8 text-white/90">
                Встречи, где «поток визиток» не перерастает в реальные проекты. Контакты не превращаются в сделки, а время утекает.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#f24822]">
                  73% участников сетевых мероприятий не доводят ни одного контакта до сделки
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1a2253]">
                Интенсив от «Код публичности»: максимум пользы за один день
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((item, index) => (
                  <Card key={index} className="p-8 border-2 border-[#1a2253]/20 hover:border-[#f24822] hover:shadow-xl transition-all bg-white">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon name={item.icon} size={32} className="text-[#f24822]" />
                      </div>
                      <p className="text-lg leading-relaxed text-[#333333]">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-[#1a2253]">
                  Более 500 лидов и 15 партнёрских проектов за год от одного события
                </p>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-[#f5f5f5] to-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a2253]">Тарифы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-8 border-2 border-[#1a2253]/20 hover:border-[#f24822] transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-[#1a2253]">Стандарт</h3>
                  <p className="text-4xl font-bold mb-6 text-[#f24822]">6 000 ₽</p>
                  <Button className="w-full bg-[#1a2253] hover:bg-[#2a3565] text-white">
                    Купить билет
                  </Button>
                </Card>
                
                <Card className="p-8 border-2 border-[#f24822] shadow-xl transform scale-105">
                  <div className="bg-[#f24822] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Осталось 10 мест
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1a2253]">VIP</h3>
                  <p className="text-4xl font-bold mb-6 text-[#f24822]">10 500 ₽</p>
                  <Button className="w-full bg-[#f24822] hover:bg-[#d63d1a] text-white">
                    Купить VIP билет
                  </Button>
                </Card>
                
                <Card className="p-8 border-2 border-[#1a2253]/20 hover:border-[#f24822] transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-[#1a2253]">Иду с подружкой</h3>
                  <p className="text-4xl font-bold mb-6 text-[#f24822]">10 800 ₽</p>
                  <p className="text-sm text-gray-600 mb-4">2 билета</p>
                  <Button className="w-full bg-[#1a2253] hover:bg-[#2a3565] text-white">
                    Купить 2 билета
                  </Button>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a2253]">Отзывы участников</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-8 bg-white border-2 border-[#1a2253]/10">
                    <p className="text-lg mb-6 text-[#333333] italic">"{review.text}"</p>
                    <div>
                      <p className="font-bold text-[#1a2253]">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-[#1a2253]">1200+ участников, 300+ проектов</p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a2253] to-[#2a3565] text-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Гарантии</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-8">
                  <Icon name="Shield" size={48} className="mx-auto mb-4 text-[#f24822]" />
                  <h3 className="text-xl font-bold mb-4">Гарантия полезности</h3>
                  <p className="text-white/90">Не получишь ни одного инсайта — вернем 100% стоимости билета.</p>
                </div>
                <div className="text-center p-8">
                  <Icon name="Lock" size={48} className="mx-auto mb-4 text-[#f24822]" />
                  <h3 className="text-xl font-bold mb-4">Безопасная оплата</h3>
                  <p className="text-white/90">SSL-сертификат и мгновенное подтверждение.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a2253]">Частые вопросы</h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <Card key={index} className="p-6 border-2 border-[#1a2253]/10 hover:border-[#f24822] transition-all">
                    <h3 className="text-lg font-bold mb-3 text-[#1a2253]">{item.q}</h3>
                    <p className="text-[#333333]">{item.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#f5f5f5] to-white">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#1a2253]">До начала мероприятия осталось</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {timeLeft.days > 0 && (
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold border-4 border-[#1a2253] bg-white px-6 py-4 min-w-[100px] shadow-lg text-[#1a2253]">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <p className="text-lg mt-3 font-semibold text-[#333333]">ДНЕЙ</p>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#1a2253] bg-white px-6 py-4 min-w-[100px] shadow-lg text-[#1a2253]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-[#333333]">ЧАСОВ</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#1a2253] bg-white px-6 py-4 min-w-[100px] shadow-lg text-[#1a2253]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-[#333333]">МИНУТ</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#1a2253] bg-white px-6 py-4 min-w-[100px] shadow-lg text-[#1a2253]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-[#333333]">СЕКУНД</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-gradient-to-br from-[#1a2253] to-[#2a3565] text-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-8 flex-wrap">
                  <a href="mailto:hello@kodpublichnosti-vl.ru" className="hover:text-[#f24822] transition-colors flex items-center gap-2">
                    <Icon name="Mail" size={20} />
                    hello@kodpublichnosti-vl.ru
                  </a>
                  <a href="https://t.me/kodpublichnosti_vl" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-[#f24822] transition-colors flex items-center gap-2">
                    <Icon name="Send" size={20} />
                    @kodpublichnosti_vl
                  </a>
                  <a href="tel:+74230000000" className="hover:text-[#f24822] transition-colors flex items-center gap-2">
                    <Icon name="Phone" size={20} />
                    +7 (423) 000-00-00
                  </a>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <a href="/privacy" className="hover:text-[#f24822] transition-colors">Политика конфиденциальности</a>
                  <a href="/offer" className="hover:text-[#f24822] transition-colors">Публичная оферта</a>
                </div>
                <p className="text-sm text-white/70">© 2025 Код публичности</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
