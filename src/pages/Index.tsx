import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 11,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenEnvelope = () => {
    setAnimating(true);
    setTimeout(() => {
      setEnvelopeOpen(true);
    }, 1000);
  };

  const programItems = [
    { icon: 'User', text: 'Приветствие основателя и лидера сообщества Аны Мавричевой' },
    { icon: 'Sparkles', text: 'Лекция стилистов о трендах осень – зима 25/26' },
    { icon: 'Shirt', text: 'Показ капсульной коллекции' },
    { icon: 'Users', text: 'Нетворкинг и консультации стилистов' },
    { icon: 'ShoppingBag', text: 'Маркет с эксклюзивными коллекциями партнёров' },
    { icon: 'Wine', text: 'Игристое вино и лёгкий фуршет' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 text-black overflow-x-hidden">
      {!envelopeOpen && (
        <section className="h-screen flex items-center justify-center relative">
          <div className="text-center">
            <div className="relative w-[400px] h-[500px] mx-auto mb-12">
              <div 
                className={`absolute left-0 right-0 h-[250px] bg-gradient-to-b from-amber-100 to-amber-200 border-4 border-amber-900 transition-all duration-1000 ease-out ${
                  animating ? '-translate-y-[400px] opacity-0' : 'top-0'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-amber-900 flex items-center justify-center">
                    <Icon name="Sparkles" size={48} className="text-amber-100" />
                  </div>
                </div>
              </div>

              <div 
                className={`absolute left-0 right-0 h-[250px] bg-gradient-to-t from-amber-100 to-amber-200 border-4 border-amber-900 transition-all duration-1000 ease-out ${
                  animating ? 'translate-y-[400px] opacity-0' : 'bottom-0'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center pt-12">
                  <div className="text-center px-8">
                    <p className="text-2xl font-bold text-amber-900 mb-2">ПРИГЛАШЕНИЕ</p>
                    <p className="text-sm text-amber-800">на показ коллекции</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleOpenEnvelope}
              size="lg"
              disabled={animating}
              className="bg-amber-900 text-white hover:bg-amber-800 text-xl px-16 py-8 font-bold tracking-wider shadow-2xl transform transition-all hover:scale-105"
            >
              {animating ? 'ОТКРЫВАЕМ...' : 'НАЖМИТЕ'}
            </Button>
          </div>
        </section>
      )}

      {envelopeOpen && (
        <div className="animate-fade-in">
          <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-amber-200 z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-xl font-bold tracking-wider text-amber-900">КОД ПУБЛИЧНОСТИ</div>
              <Button 
                variant="outline" 
                className="border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition-colors"
                onClick={() => window.open('https://maps.google.com/?q=Кутузовский просп., 36, стр. 5А', '_blank')}
              >
                <Icon name="MapPin" className="mr-2" size={18} />
                Открыть карту
              </Button>
            </div>
          </header>

          <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <Icon name="Heart" size={64} className="mx-auto text-amber-900 mb-6" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-amber-950">
                Нам очень ценно, что Вы разделите с нами это событие!
              </h1>
              <p className="text-xl text-amber-800 font-light">
                Ваш билет на показ капсульной коллекции одежды «Я достаточно хороша»
              </p>
            </div>
          </section>

          <section className="py-24 px-4 bg-gradient-to-br from-amber-900 to-amber-950 text-white">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
                Я ДОСТАТОЧНО ХОРОША
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                В вещах коллекции «Я достаточно хороша» очень удобно, красиво и счастливо жить свою жизнь и просто быть собой!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="px-6 py-2 border-2 border-white text-sm tracking-wider">СОЦИАЛЬНЫЙ ПРОЕКТ</span>
                <span className="px-6 py-2 border-2 border-white text-sm tracking-wider">КОД ПУБЛИЧНОСТИ</span>
              </div>
            </div>
          </section>

          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-950">ПРОГРАММА МЕРОПРИЯТИЯ</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {programItems.map((item, index) => (
                  <Card key={index} className="p-8 border-2 border-amber-200 hover:border-amber-900 hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon name={item.icon} size={32} className="text-amber-900" />
                      </div>
                      <p className="text-lg leading-relaxed text-amber-950">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-950">ДРЕСС-КОД</h2>
              <div className="bg-gradient-to-br from-black to-gray-900 text-white py-12 px-8 shadow-2xl">
                <p className="text-6xl font-extrabold tracking-widest mb-4">TOTAL BLACK</p>
                <p className="text-2xl font-light">стиль: деловой</p>
              </div>
            </div>
          </section>

          <section className="py-24 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-12 text-amber-950">До начала показа осталось</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-amber-900 bg-white px-8 py-6 min-w-[120px] shadow-lg text-amber-950">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold text-amber-900">ЧАСОВ</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-amber-900 bg-white px-8 py-6 min-w-[120px] shadow-lg text-amber-950">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold text-amber-900">МИНУТ</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-amber-900 bg-white px-8 py-6 min-w-[120px] shadow-lg text-amber-950">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold text-amber-900">СЕКУНД</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-gradient-to-br from-amber-900 to-amber-950 text-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center space-y-6">
                <p className="text-lg">© 2025 «Я достаточно хороша»</p>
                <div className="flex justify-center gap-6">
                  <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-amber-200 transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                  <a href="mailto:info@kodpublichnosti.ru" className="hover:text-amber-200 transition-colors">
                    <Icon name="Mail" size={24} />
                  </a>
                </div>
                <p className="text-sm text-amber-100">Лофт The Portal • Кутузовский просп., 36, стр. 5А</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
