import React from 'react';
import { BLOG_POSTS } from '../constants';
import { SectionHeader } from './SectionHeader';
import { BlogPost } from '../types';

interface BlogProps {
  onPostClick: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
  return (
    <section id="blog" className="py-24 bg-neutral-100 dark:bg-neutral-900/30 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeader number="03 //" title="Logs d'Intelligence" />

        <div className="flex flex-col">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              onClick={() => onPostClick(post)}
              className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-neutral-300 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-100 dark:hover:text-black transition-colors duration-300 -mx-6 px-6 cursor-pointer"
            >
              <div className="w-full md:w-48 font-mono text-xs text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-black mb-2 md:mb-0 uppercase tracking-widest">
                {post.date}
              </div>
              
              <div className="flex-1">
                <h3 className="font-serif text-2xl mb-2 text-neutral-900 dark:text-white dark:group-hover:text-black transition-colors">{post.title}</h3>
                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-600 max-w-2xl transition-colors">
                  {post.excerpt}
                </p>
              </div>

              <div className="w-full md:w-32 text-right mt-4 md:mt-0 font-mono text-xs text-[#cc5500] group-hover:text-[#cc5500]">
                [{post.readTime}]
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
