import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800">
          
          <div className="w-full md:w-1/3 relative group">
            <div className="absolute inset-0 bg-gold-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
            <img 
              src="https://picsum.photos/400/500?grayscale" 
              alt="Instructor" 
              className="w-full h-auto rounded-2xl relative z-10 shadow-xl"
            />
          </div>

          <div className="w-full md:w-2/3">
            <span className="text-gold-500 font-bold tracking-wider text-sm uppercase mb-2 block">Seu Professor</span>
            <h2 className="font-serif text-4xl text-white mb-6">André Liszt</h2>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Com mais de 20 anos de experiência nos palcos internacionais e salas de aula, André Liszt desenvolveu uma metodologia única que une a técnica russa tradicional com a praticidade da música popular moderna.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              "Meu objetivo não é apenas ensinar você a apertar teclas, mas sim a expressar suas emoções mais profundas através do som. O piano é uma extensão da sua alma, e eu vou te ensinar a falar essa língua."
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
              <div>
                <p className="text-3xl font-serif text-white">20+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Anos de Carreira</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">5k+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Alunos Formados</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">3</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Álbuns Lançados</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white">4.9</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Avaliação Média</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Instructor;