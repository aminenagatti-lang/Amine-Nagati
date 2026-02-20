import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
             backgroundSize: '24px 24px',
             color: 'inherit'
           }}>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-neutral-900 dark:text-white leading-[0.9] tracking-tighter">
            AMINE<br />
            NAGATI
          </h1>
        </div>

        <div className="max-w-2xl mt-12">
          <p className="font-mono text-neutral-600 dark:text-neutral-400 text-lg md:text-xl leading-relaxed border-l-2 border-[#cc5500] pl-6">
            Je transforme des processus manuels complexes en systèmes intelligents et autonomes. Expert en ingénierie IA et automatisation de workflows.
          </p>
        </div>

        <div className="mt-24 flex flex-col md:flex-row gap-12 text-sm font-mono text-neutral-500 uppercase tracking-wider">
           <div>
              <span className="block text-neutral-900 dark:text-white mb-1">Rôle</span>
              Ingénieur IA & Automatisation
           </div>
           <div>
              <span className="block text-neutral-900 dark:text-white mb-1">Base</span>
              Disponible en Remote / Monde entier
           </div>
           <div>
              <span className="block text-neutral-900 dark:text-white mb-1">Stack</span>
              Python • n8n • React • YOLO
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#expertise" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-[#cc5500] transition-colors">Défiler</span>
        <div className="w-[1px] h-12 bg-neutral-300 dark:bg-neutral-800 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#cc5500] animate-[drop_1.5s_infinite]"></div>
        </div>
      </a>
      
      <style>{`
        @keyframes drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;