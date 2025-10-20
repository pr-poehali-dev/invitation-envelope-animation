import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const TestimonialsScroll = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonialImages = [
    'https://cdn.poehali.dev/files/74ac9813-a1f3-41c5-8d28-b1fbda151969.jpg',
    'https://cdn.poehali.dev/files/58acb265-fe95-486f-83bc-60ae09e7fe1c.jpg',
    'https://cdn.poehali.dev/files/bc0d9817-1b34-4ede-84cc-9549092fe01e.jpg',
    'https://cdn.poehali.dev/files/7f24df58-e4b7-4f28-8993-ef8d037265e5.jpg',
    'https://cdn.poehali.dev/files/7b43332f-6159-480f-b6dd-efa4cbbfe90b.jpg',
    'https://cdn.poehali.dev/files/392dac21-21d3-402b-9f24-bfb0cb788156.jpg',
    'https://cdn.poehali.dev/files/78d9b0e2-2229-458f-919d-bd33aaaf67b2.jpg',
    'https://cdn.poehali.dev/files/6236f3e6-1462-4f3f-98f8-cf46de9e5c2d.jpg',
    'https://cdn.poehali.dev/files/aa06e611-3525-44d6-8019-07fa0a4d1ab2.jpg',
    'https://cdn.poehali.dev/files/cb8a34a8-3c6c-4b0f-b634-cb3e024ca035.jpg'
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto relative z-10 px-4">
      <section className="mb-12 md:mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ОТЗЫВЫ УЧАСТНИКОВ</h2>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#F3E8E0] text-[#7B1E1E] p-2 md:p-3 rounded-full shadow-xl hover:scale-110 transition-all opacity-90 hover:opacity-100"
            aria-label="Предыдущий отзыв"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-3 md:gap-4 px-12">
              {testimonialImages.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-52 md:w-60 cursor-pointer transition-transform hover:scale-110 hover:z-10"
                  onMouseEnter={() => setEnlargedImage(src)}
                  onMouseLeave={() => setEnlargedImage(null)}
                >
                  <img 
                    src={src} 
                    alt={`Отзыв участника ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#F3E8E0] text-[#7B1E1E] p-2 md:p-3 rounded-full shadow-xl hover:scale-110 transition-all opacity-90 hover:opacity-100"
            aria-label="Следующий отзыв"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </section>

      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <img 
            src={enlargedImage} 
            alt="Увеличенный отзыв"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialsScroll;
