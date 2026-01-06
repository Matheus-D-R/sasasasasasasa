import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl text-white mb-2">Virtuoso Academy</h2>
            <p className="text-slate-500 text-sm max-w-xs">Ensinando a arte do piano para o mundo moderno com elegância e técnica.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Mail size={24} /></a>
          </div>

        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; 2024 Virtuoso Piano Academy. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400">Privacidade</a>
            <a href="#" className="hover:text-slate-400">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;