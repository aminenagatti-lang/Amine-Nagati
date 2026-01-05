import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      const isClickable = target.closest('a') || target.closest('button') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[200] mix-blend-difference hidden md:block"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className={`transition-all duration-150 ease-out bg-white ${isPointer ? 'w-8 h-8 opacity-50' : 'w-3 h-3'} rounded-none`} />
    </div>
  );
};

export default CustomCursor;