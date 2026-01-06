import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Essencial",
    price: "297",
    features: ["Acesso por 1 ano", "Módulos 1 e 2", "Suporte por e-mail", "Material em PDF"],
    recommended: false
  },
  {
    name: "Virtuoso",
    price: "497",
    features: ["Acesso Vitalício", "Todos os 8 Módulos", "Suporte via WhatsApp", "Comunidade Exclusiva", "Masterclass Mensal", "Certificado Oficial"],
    recommended: true
  },
  {
    name: "Mentoria VIP",
    price: "997",
    features: ["Tudo do plano Virtuoso", "3 Aulas Individuais (Zoom)", "Análise de Repertório", "Plano de Estudo Personalizado"],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Invista no Seu Talento</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Escolha o plano ideal para sua jornada musical. Garantia incondicional de 7 dias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-slate-900 border-gold-500 shadow-[0_0_30px_rgba(197,160,40,0.15)] transform md:-translate-y-4' 
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-300 mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-slate-500">R$</span>
                  <span className={`text-5xl font-serif ${tier.recommended ? 'text-white' : 'text-slate-200'}`}>{tier.price}</span>
                </div>
                {tier.recommended ? (
                  <p className="text-gold-400 text-sm mt-2">ou 12x de R$ {(parseInt(tier.price) * 1.2 / 12).toFixed(2)}</p>
                ) : (
                   <p className="text-slate-500 text-sm mt-2">à vista</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={tier.recommended ? 'text-gold-500 shrink-0' : 'text-slate-600 shrink-0'} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.recommended 
                  ? 'bg-gold-500 text-slate-900 hover:bg-gold-400 shadow-lg' 
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                Matricule-se Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;