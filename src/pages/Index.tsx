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
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#333333] overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f24822]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#ff6b9d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#c471ed]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      {!envelopeOpen && (
        <section className="h-screen flex items-center justify-center relative z-10">
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <div className="relative w-full max-w-3xl mx-auto">
              <button
                onClick={handleOpenEnvelope}
                disabled={animating}
                className={`w-full transition-all duration-1000 ease-out hover:scale-105 disabled:opacity-50 ${
                  animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <img 
                  src="https://cdn.poehali.dev/files/7a046b8c-0092-487e-aa5f-4da445a32ed7.png" 
                  alt="Конверт с приглашением" 
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>
        </section>
      )}

      {envelopeOpen && (
        <div className="animate-fade-in relative z-10">
          <header className="sticky top-0 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-[#ffd700]/20 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-xl font-bold tracking-wider text-[#ffd700]">КОД ПУБЛИЧНОСТИ</div>
              <Button 
                variant="outline" 
                className="border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-[#1a1a2e] transition-colors"
                onClick={() => window.open('https://maps.google.com/?q=Ангар Edwin Group', '_blank')}
              >
                <Icon name="MapPin" className="mr-2" size={18} />
                Ангар Edwin Group
              </Button>
            </div>
          </header>

          <section className="py-24 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
            <div className="container mx-auto max-w-5xl text-center">
              <div className="mb-8">
                <Icon name="Sparkles" size={64} className="mx-auto text-[#ffd700] mb-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                Нетворкинг уровня PRO:<br />получи за 5 часов контакты на год вперёд
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
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
                <p className="text-2xl font-bold text-[#ffd700]">
                  73% участников сетевых мероприятий не доводят ни одного контакта до сделки
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#ffd700]">Программа мероприятия</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">12:30</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg mb-6 text-gray-200">
                        Сбор гостей, приветственный фуршет, съемки с профессиональным фотографом, розыгрыши подарков, нетворкинг
                      </p>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <Icon name="User" size={24} className="text-[#f24822] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">Елена Дулицкая</p>
                            <p className="text-sm text-gray-300">Владелица студии OBRAZ, автор интенсива "Партнерская сеть", куратор сообщества "Код публичности" г. Владивосток, федеральный спикер</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Icon name="User" size={24} className="text-[#f24822] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">Екатерина Медникова</p>
                            <p className="text-sm text-gray-300">Эксперт по продажам и продвижению в соцсетях, продюсер крупных онлайн-школ, автор практикума «Смыслы на миллион», научный сотрудник РАН, куратор сообщества "Код публичности" г. Иркутск, федеральный спикер</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">14:00</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg text-gray-200">Работа с экспертами на станциях</p>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">14:40</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg text-gray-200">Фуршет</p>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">15:00</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg mb-6 text-gray-200">Работа с экспертами на станциях</p>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                          <img 
                            src="https://cdn.poehali.dev/files/2ae092e5-c086-4238-be2c-94349f731d5c.jpg" 
                            alt="Оксана Литвиненко" 
                            className="w-16 h-16 rounded-full object-cover shadow-lg flex-shrink-0"
                            style={{
                              boxShadow: '0 10px 30px rgba(26, 34, 83, 0.3), 0 5px 15px rgba(242, 72, 34, 0.2)'
                            }}
                          />
                          <div>
                            <p className="font-bold text-white">Оксана Литвиненко</p>
                            <p className="text-sm text-gray-300">Психолог, модератор сообщества «Код публичности»</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Icon name="User" size={24} className="text-[#f24822] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">Ирина Рамазанова</p>
                            <p className="text-sm text-gray-300">Юрист для онлайн-бизнеса, модератор сообщества «Код публичности» Владивосток, федеральный спикер</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">15:40</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg text-gray-200">Работа с экспертами на станциях</p>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#f24822]">17:10</span>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                      <p className="text-lg text-gray-200">Финал мероприятия</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f3460]">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#ffd700]">
                Интенсив от «Код публичности»: максимум пользы за один день
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((item, index) => (
                  <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon name={item.icon} size={32} className="text-[#f24822]" />
                      </div>
                      <p className="text-lg leading-relaxed text-gray-200">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-white">
                  Более 500 лидов и 15 партнёрских проектов за год от одного события
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#ffd700]">Станции с экспертами</h2>
              <p className="text-center text-lg text-gray-300 mb-16">
                Доступно три станции на выбор (бронирование мест начнется 20 октября)
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full flex justify-center mb-6">
                      <img 
                        src="https://cdn.poehali.dev/files/d871c23e-0268-4b76-a213-6b8ec333c078.jpg" 
                        alt="Ирина Пашко" 
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                        style={{
                          boxShadow: '0 10px 30px rgba(26, 34, 83, 0.3), 0 5px 15px rgba(242, 72, 34, 0.2)'
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Система ведения сторис (ИГ, ТГ, ВК, статусы) - как использовать на максимум топовый инструмент соцсетей
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Ирина Пашко</p>
                      <p className="text-sm text-gray-300">Фотограф, контент-креатор для экспертов и бизнеса</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full flex justify-center mb-6">
                      <img 
                        src="https://cdn.poehali.dev/files/023e3300-508f-4b1e-b6a1-0425acafcd89.jpg" 
                        alt="Анастасия Резникова" 
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                        style={{
                          boxShadow: '0 10px 30px rgba(26, 34, 83, 0.3), 0 5px 15px rgba(242, 72, 34, 0.2)'
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Красивая речь и объёмный голос - основа личного бренда
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Анастасия Резникова</p>
                      <p className="text-sm text-gray-300">Тренер по речи, голосу и публичным выступлениям</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full flex justify-center mb-6">
                      <img 
                        src="https://cdn.poehali.dev/files/776864fb-78c2-4ac1-8199-98b0030df7cb.jpg" 
                        alt="Елена Мозер" 
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                        style={{
                          boxShadow: '0 10px 30px rgba(26, 34, 83, 0.3), 0 5px 15px rgba(242, 72, 34, 0.2)'
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      «Кривое зеркало» - как мы видим себя и других через фильтры, которые мешают проявляться
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Елена Мозер</p>
                      <p className="text-sm text-gray-300">Коуч, наставник, автор трансформационных игр и метафорических карт</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full flex justify-center mb-6">
                      <img 
                        src="https://cdn.poehali.dev/files/e49b5917-df98-4d3b-ad10-87f4ff570d87.jpg" 
                        alt="Оксана Литвиненко" 
                        className="w-32 h-32 rounded-full object-cover shadow-lg"
                        style={{
                          boxShadow: '0 10px 30px rgba(26, 34, 83, 0.3), 0 5px 15px rgba(242, 72, 34, 0.2)'
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Переход на новый уровень дохода
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Оксана Литвиненко</p>
                      <p className="text-sm text-gray-300">Психолог</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-white/5 to-[#f24822]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Brain" size={64} className="text-[#f24822]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Синдром самозванца — неочевидный взгляд
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Яна Глушан</p>
                      <p className="text-sm text-gray-300">Магистр психологии, расстановщик</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] hover:shadow-xl transition-all">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-white/5 to-[#f24822]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="MessageCircle" size={64} className="text-[#f24822]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Как запускать осознанно сарафанное радио
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Icon name="User" size={40} className="text-[#f24822]" />
                    <div>
                      <p className="font-bold text-white">Кристина Кузнецова</p>
                      <p className="text-sm text-gray-300">Эксперт в сфере клиентского сервиса и продаж, автор системы «ДНК Клиента»</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f3460]">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffd700]">Тарифы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-white">Стандарт</h3>
                  <p className="text-4xl font-bold mb-6 text-[#ffd700]">6 000 ₽</p>
                  <Button className="w-full bg-[#f24822] hover:bg-[#d63d1a] text-white">
                    Купить билет
                  </Button>
                </Card>
                
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-[#f24822] shadow-xl transform scale-105">
                  <div className="bg-[#f24822] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Осталось 10 мест
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">VIP</h3>
                  <p className="text-4xl font-bold mb-6 text-[#ffd700]">10 500 ₽</p>
                  <Button className="w-full bg-[#f24822] hover:bg-[#d63d1a] text-white">
                    Купить VIP билет
                  </Button>
                </Card>
                
                <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-white">Иду с подружкой</h3>
                  <p className="text-4xl font-bold mb-6 text-[#ffd700]">10 800 ₽</p>
                  <p className="text-sm text-gray-300 mb-4">2 билета</p>
                  <Button className="w-full bg-[#f24822] hover:bg-[#d63d1a] text-white">
                    Купить 2 билета
                  </Button>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffd700]">Отзывы участников</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20">
                    <p className="text-lg mb-6 text-gray-200 italic">"{review.text}"</p>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-sm text-gray-300">{review.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-white">1200+ участников, 300+ проектов</p>
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

          <section className="py-20 px-4 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f3460]">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffd700]">Частые вопросы</h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#f24822] transition-all">
                    <h3 className="text-lg font-bold mb-3 text-white">{item.q}</h3>
                    <p className="text-gray-300">{item.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#ffd700]">До начала мероприятия осталось</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {timeLeft.days > 0 && (
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold border-4 border-[#ffd700] bg-white/10 backdrop-blur-sm px-6 py-4 min-w-[100px] shadow-lg text-[#ffd700]">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <p className="text-lg mt-3 font-semibold text-gray-200">ДНЕЙ</p>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#ffd700] bg-white/10 backdrop-blur-sm px-6 py-4 min-w-[100px] shadow-lg text-[#ffd700]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-gray-200">ЧАСОВ</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#ffd700] bg-white/10 backdrop-blur-sm px-6 py-4 min-w-[100px] shadow-lg text-[#ffd700]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-gray-200">МИНУТ</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold border-4 border-[#ffd700] bg-white/10 backdrop-blur-sm px-6 py-4 min-w-[100px] shadow-lg text-[#ffd700]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-lg mt-3 font-semibold text-gray-200">СЕКУНД</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-12 px-4 border-t border-white/10">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-8 flex-wrap">
                  <a href="mailto:hello@kodpublichnosti-vl.ru" className="hover:text-[#ffd700] transition-colors flex items-center gap-2 text-gray-200">
                    <Icon name="Mail" size={20} />
                    hello@kodpublichnosti-vl.ru
                  </a>
                  <a href="https://t.me/kodpublichnosti_vl" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-[#ffd700] transition-colors flex items-center gap-2 text-gray-200">
                    <Icon name="Send" size={20} />
                    @kodpublichnosti_vl
                  </a>
                  <a href="tel:+74230000000" className="hover:text-[#ffd700] transition-colors flex items-center gap-2 text-gray-200">
                    <Icon name="Phone" size={20} />
                    +7 (423) 000-00-00
                  </a>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <a href="/privacy" className="hover:text-[#ffd700] transition-colors text-gray-300">Политика конфиденциальности</a>
                  <a href="/offer" className="hover:text-[#ffd700] transition-colors text-gray-300">Публичная оферта</a>
                </div>
                <p className="text-sm text-gray-300">© 2025 Код публичности</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;