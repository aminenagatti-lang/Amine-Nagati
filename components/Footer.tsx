import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-serif text-neutral-900 dark:text-white text-xl">AMINE NAGATI</h4>
          <p className="font-mono text-neutral-600 dark:text-neutral-600 text-xs mt-1">
            AI & Automation Engineer.
          </p>
          <a href="mailto:amine.nagatti@gmail.com" className="font-mono text-neutral-500 hover:text-[#cc5500] text-xs mt-2 block transition-colors">
            amine.nagatti@gmail.com
          </a>
        </div>

        <div className="flex gap-8 font-mono text-xs text-neutral-600 dark:text-neutral-500 uppercase tracking-wider">
          <a href="https://github.com/amine-nagati" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc5500] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mohamed-amine-nagati/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cc5500] transition-colors">LinkedIn</a>
          <a href="mailto:amine.nagatti@gmail.com" className="hover:text-[#cc5500] transition-colors">Email</a>
        </div>

        <div className="font-mono text-neutral-500 dark:text-neutral-700 text-[10px]">
          © 2026. SYSTEM.ALL_RIGHTS_RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;