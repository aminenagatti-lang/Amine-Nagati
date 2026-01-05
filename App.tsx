import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Blog from './components/Blog';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BlogPostModal from './components/BlogPostModal';
import { BlogPost } from './types';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of header + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-[#e5e5e5] selection:bg-[#cc5500] selection:text-white cursor-none transition-colors duration-300`}>
      <CustomCursor />
      
      {/* Navigation - Increased Z-index to 99 to ensure it sits above everything else */}
      <nav className="fixed top-0 left-0 w-full z-[99] bg-neutral-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center relative">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="block group relative cursor-pointer" 
            aria-label="Home"
          >
            <span className="font-serif text-3xl font-bold tracking-tighter text-neutral-900 dark:text-white transition-colors">
              AN<span className="text-[#cc5500]">.</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-8 font-mono text-xs tracking-widest text-neutral-600 dark:text-neutral-400">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                PROJECTS
              </a>
              <a 
                href="#expertise" 
                onClick={(e) => scrollToSection(e, 'expertise')}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                STACK
              </a>
              <a 
                href="#blog" 
                onClick={(e) => scrollToSection(e, 'blog')}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                BLOGS
              </a>
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-[#cc5500] transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>

            <a 
              href="#lead-magnet" 
              onClick={(e) => scrollToSection(e, 'lead-magnet')}
              className="font-mono text-xs border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden z-[100]">
             <button 
              onClick={toggleTheme}
              className="p-2 text-neutral-600 dark:text-neutral-400 cursor-pointer"
            >
               {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-900 dark:text-white cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>

          {/* Mobile Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-neutral-50 dark:bg-[#0a0a0a] z-50 flex flex-col items-center justify-center gap-8 md:hidden">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="font-serif text-3xl text-neutral-900 dark:text-white hover:text-[#cc5500]"
              >
                PROJECTS
              </a>
              <a 
                href="#expertise" 
                onClick={(e) => scrollToSection(e, 'expertise')}
                className="font-serif text-3xl text-neutral-900 dark:text-white hover:text-[#cc5500]"
              >
                STACK
              </a>
              <a 
                href="#blog" 
                onClick={(e) => scrollToSection(e, 'blog')}
                className="font-serif text-3xl text-neutral-900 dark:text-white hover:text-[#cc5500]"
              >
                BLOGS
              </a>
              <a 
                href="#lead-magnet" 
                onClick={(e) => scrollToSection(e, 'lead-magnet')}
                className="font-mono text-sm border border-neutral-300 dark:border-neutral-700 px-6 py-3 mt-4"
              >
                CONTACT
              </a>
            </div>
          )}
        </div>
      </nav>

      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Blog onPostClick={setSelectedPost} />
        <LeadMagnet />
      </main>

      <Footer />

      <BlogPostModal 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </div>
  );
};

export default App;