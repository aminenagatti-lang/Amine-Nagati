import React from 'react';
import { EXPERTISE } from '../constants';
import { SectionHeader } from './SectionHeader';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-neutral-100 dark:bg-neutral-900/30 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeader number="01 //" title="Architecture Technique" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, index) => (
            <div key={index} className="border-t border-neutral-300 dark:border-neutral-800 pt-4 group hover:border-[#cc5500] dark:hover:border-[#cc5500] transition-colors duration-300">
              <h3 className="font-serif text-lg text-neutral-900 dark:text-white mb-4">{item.category}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mr-2 text-[#cc5500] opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
