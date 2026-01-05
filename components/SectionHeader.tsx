import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => (
  <div className="flex items-baseline gap-4 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4 transition-colors duration-300">
    <span className="font-mono text-xs text-[#cc5500]">{number}</span>
    <h2 className="text-2xl font-serif text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">{title}</h2>
  </div>
);
