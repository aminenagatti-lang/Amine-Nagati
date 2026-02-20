import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Content Container */}
      <div className="relative w-full max-w-3xl bg-neutral-50 dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 shadow-2xl max-h-full overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-neutral-50 dark:bg-[#111] border-b border-neutral-200 dark:border-neutral-800 p-6 flex justify-between items-start z-10">
          <div>
            <span className="font-mono text-[#cc5500] text-xs uppercase tracking-widest block mb-2">
              {post.date} // {post.readTime}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-neutral-900 dark:text-white leading-tight">
              {post.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:text-[#cc5500] text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 space-y-6">
           <div className="font-mono text-sm text-neutral-500 dark:text-neutral-400 border-l-2 border-[#cc5500] pl-4 italic mb-8">
             {post.excerpt}
           </div>
           
           <div className="prose prose-neutral dark:prose-invert max-w-none font-serif text-lg leading-relaxed text-neutral-800 dark:text-neutral-300">
             {post.content.map((paragraph, idx) => (
               <p key={idx} className="mb-6">{paragraph}</p>
             ))}
           </div>
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-100 dark:bg-[#0f0f0f] flex justify-between items-center">
          <span className="font-mono text-xs text-neutral-500">
            ID: {post.id}
          </span>
          <button 
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-widest text-[#cc5500] hover:underline cursor-pointer"
          >
            {t.blog.closeTerminal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostModal;