interface EnvelopeAnimationProps {
  onOpenEnvelope: (e: React.MouseEvent<HTMLButtonElement>) => void;
  animating: boolean;
}

const EnvelopeAnimation = ({ onOpenEnvelope, animating }: EnvelopeAnimationProps) => {
  return (
    <section className="h-screen flex items-center justify-center relative z-10">
      <div className="text-center w-full max-w-4xl mx-auto px-4">
        <div className="relative w-full max-w-3xl mx-auto z-10">
          <button
            onClick={onOpenEnvelope}
            disabled={animating}
            className={`w-full transition-all duration-1000 ease-out hover:scale-105 disabled:opacity-50 ${
              animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <img 
              src="https://cdn.poehali.dev/files/90401f5b-2fe1-45c3-9511-f55caa486631.jpeg" 
              alt="Ваш билет на нетворкинг" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnvelopeAnimation;
