import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { CourseModule } from '../types';

const modules: CourseModule[] = [
  {
    id: 1,
    title: "Fundamentos do Piano",
    duration: "2h 30m",
    lessons: ["Postura e Relaxamento", "Geografia do Teclado", "Primeiros Exercícios de Dedilhado", "Ritmo Básico"]
  },
  {
    id: 2,
    title: "Leitura Musical Sem Mistério",
    duration: "3h 15m",
    lessons: ["Clave de Sol e Fá", "Valores das Notas", "Fórmulas de Compasso", "Lendo sua Primeira Partitura"]
  },
  {
    id: 3,
    title: "Técnica e Expressão",
    duration: "4h 00m",
    lessons: ["Escalas Maiores", "Arpejos Básicos", "Dinâmica: Do pp ao ff", "Uso do Pedal de Sustentação"]
  },
  {
    id: 4,
    title: "Harmonia Aplicada",
    duration: "3h 45m",
    lessons: ["Formação de Acordes Tríades", "Campo Harmônico Maior", "Inversões de Acordes", "Acompanhamento de Canções"]
  }
];

const Curriculum: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3 sticky top-10">
          <h2 className="font-serif text-4xl text-white mb-6">O Caminho para a <br /><span className="text-gold-400">Maestria</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Nossa grade curricular foi desenhada meticulosamente para garantir que você evolua constantemente, sem lacunas no aprendizado.
          </p>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gold-500" />
              <span>40+ Vídeo Aulas em 4K</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gold-500" />
              <span>Material em PDF para Download</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-gold-500" />
              <span>Backing Tracks para Prática</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-2/3 w-full space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="border border-slate-800 rounded-xl bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all hover:border-slate-700">
              <button 
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div>
                  <h3 className="text-xl font-serif text-white">{module.id}. {module.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{module.duration} • {module.lessons.length} aulas</p>
                </div>
                {openModule === module.id ? (
                  <ChevronUp className="text-gold-500" />
                ) : (
                  <ChevronDown className="text-slate-600" />
                )}
              </button>
              
              <div className={`
                transition-all duration-300 ease-in-out overflow-hidden bg-slate-950/30
                ${openModule === module.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <ul className="p-6 pt-0 space-y-3">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm pl-4 border-l border-slate-800 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-xs text-slate-600 border border-slate-800">
                        {idx + 1}
                      </div>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Curriculum;