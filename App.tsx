import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="fixed w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="font-serif text-2xl text-gold-500 font-bold">Virtuoso.</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-gold-400 transition-colors">Método</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Aulas</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Professor</a>
            <a href="#pricing" className="text-gold-400 hover:text-gold-300 transition-colors">Matrícula</a>
          </div>
          <button className="md:hidden text-slate-300">Menu</button>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Instructor />
        <Pricing />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;