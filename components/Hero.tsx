import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Piano background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm tracking-widest mb-6 uppercase">
          Método Comprovado
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Toque com <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Alma</span> e <span className="italic">Virtuosismo</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubra o segredo dos grandes pianistas. Do zero à primeira sonata em menos de 3 meses, com o método exclusivo do Virtuoso Academy.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-gold-500 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Quero Começar Agora
          </button>
          <button className="flex items-center gap-2 text-white px-8 py-4 rounded-full border border-slate-700 hover:bg-white/5 transition-all group">
            <PlayCircle className="text-gold-400 group-hover:text-gold-300" />
            <span>Ver Demonstração</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;