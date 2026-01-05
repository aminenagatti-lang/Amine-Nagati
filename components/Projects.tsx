import React from 'react';
import { PROJECTS } from '../constants';
import { SectionHeader } from './SectionHeader';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeader number="02 //" title="Selected Works" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(300px,auto)]">
          {PROJECTS.map((project, index) => {
            // Zig-zag pattern:
            // Index 0, 3, 4, 7, 8, 11... are wide (2 columns)
            // Pattern repeats every 4 items: (0, 3), (4, 7), (8, 11)
            const isWide = (index % 4 === 0) || (index % 4 === 3);
            
            return (
              <div 
                key={project.id}
                className={`
                  relative border border-neutral-200 dark:border-neutral-800 
                  bg-white dark:bg-neutral-900/20 p-8 flex flex-col justify-between group
                  hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-500
                  ${isWide ? 'md:col-span-2' : 'md:col-span-1'}
                `}
              >
                <div className="absolute top-4 right-4 font-mono text-[10px] text-[#cc5500] border border-[#cc5500] px-2 py-1 uppercase tracking-widest opacity-70">
                  {project.category}
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-3xl text-neutral-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs font-mono text-neutral-600 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.metrics && (
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[#cc5500] font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#cc5500]"></span>
                      {project.metrics}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;