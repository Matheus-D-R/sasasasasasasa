import React from 'react';
import { Music, Clock, Users, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Music className="w-8 h-8 text-gold-500" />,
      title: "Repertório Clássico & Pop",
      description: "Aprenda desde Beethoven até Coldplay com arranjos exclusivos para todos os níveis."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      title: "Aprenda no Seu Ritmo",
      description: "Acesso vitalício ao conteúdo. Revise as aulas quantas vezes precisar, onde estiver."
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Certificado Incluso",
      description: "Ao completar o curso, receba um certificado reconhecido para comprovar sua habilidade."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Comunidade Exclusiva",
      description: "Troque experiências e vídeos com outros alunos e receba feedback semanal."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Por que escolher o Virtuoso?</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-gold-500/30 transition-all hover:-translate-y-2 group">
              <div className="mb-6 p-4 bg-slate-900 rounded-full inline-block group-hover:bg-gold-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;