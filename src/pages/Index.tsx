import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
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

  const programItems = [
    { icon: 'User', text: 'Приветствие основателя и лидера сообщества Аны Мавричевой' },
    { icon: 'Sparkles', text: 'Лекция стилистов о трендах осень – зима 25/26' },
    { icon: 'Shirt', text: 'Показ капсульной коллекции' },
    { icon: 'Users', text: 'Нетворкинг и консультации стилистов' },
    { icon: 'ShoppingBag', text: 'Маркет с эксклюзивными коллекциями партнёров' },
    { icon: 'Wine', text: 'Игристое вино и лёгкий фуршет' }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">КОД ПУБЛИЧНОСТИ</div>
          <Button 
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white transition-colors"
            onClick={() => window.open('https://maps.google.com/?q=Кутузовский просп., 36, стр. 5А', '_blank')}
          >
            <Icon name="MapPin" className="mr-2" size={18} />
            Открыть карту
          </Button>
        </div>
      </header>

      {/* Envelope Animation Section */}
      {!envelopeOpen && (
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 bg-black border-4 border-black"></div>
              <div className="absolute inset-2 bg-white flex items-center justify-center">
                <Icon name="Mail" size={80} className="text-black" />
              </div>
            </div>
            <Button 
              onClick={() => setEnvelopeOpen(true)}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 text-lg px-12 py-6 font-semibold"
            >
              НАЖМИТЕ
            </Button>
          </div>
        </section>
      )}

      {/* Main Content */}
      {envelopeOpen && (
        <div className="pt-24 animate-fade-in">
          {/* Welcome Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Нам очень ценно, что Вы разделите с нами это событие!
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Ваш билет на показ капсульной коллекции одежды «Я достаточно хороша»
              </p>
            </div>
          </section>

          {/* About Collection */}
          <section className="py-20 px-4 bg-black text-white">
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

          {/* Program Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">ПРОГРАММА МЕРОПРИЯТИЯ</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {programItems.map((item, index) => (
                  <Card key={index} className="p-8 border-2 border-black hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Icon name={item.icon} size={32} className="text-black" />
                      </div>
                      <p className="text-lg leading-relaxed">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Dress Code */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">ДРЕСС-КОД</h2>
              <div className="bg-black text-white py-12 px-8">
                <p className="text-6xl font-extrabold tracking-widest mb-4">TOTAL BLACK</p>
                <p className="text-2xl font-light">стиль: деловой</p>
              </div>
            </div>
          </section>

          {/* Timer */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-12">До начала показа осталось</h2>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-black px-8 py-6 min-w-[120px]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold">ЧАСОВ</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-black px-8 py-6 min-w-[120px]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold">МИНУТ</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold border-4 border-black px-8 py-6 min-w-[120px]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-xl mt-4 font-semibold">СЕКУНД</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black text-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center space-y-6">
                <p className="text-lg">© 2025 «Я достаточно хороша»</p>
                <div className="flex justify-center gap-6">
                  <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-300 transition-colors">
                    <Icon name="Send" size={24} />
                  </a>
                  <a href="mailto:info@kodpublichnosti.ru" className="hover:text-gray-300 transition-colors">
                    <Icon name="Mail" size={24} />
                  </a>
                </div>
                <p className="text-sm text-gray-400">Лофт The Portal • Кутузовский просп., 36, стр. 5А</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
