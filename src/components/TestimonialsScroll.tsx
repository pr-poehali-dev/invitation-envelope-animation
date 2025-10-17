const TestimonialsScroll = () => {
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

  return (
    <div className="max-w-4xl mx-auto relative z-10">
      <section className="mb-16 fade-in">
        <h2 className="text-4xl font-black text-center mb-10" style={{fontFamily: 'Playfair Display, serif'}}>ОТЗЫВЫ УЧАСТНИКОВ</h2>
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 min-w-max">
            {testimonialImages.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-60">
                <img 
                  src={src} 
                  alt={`Отзыв участника ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsScroll;