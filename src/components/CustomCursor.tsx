import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', updateCursorType);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Trail dots */}
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
          style={{
            left: dot.x - 2,
            top: dot.y - 2,
            width: 4 - (index * 0.3),
            height: 4 - (index * 0.3),
            background: `linear-gradient(45deg, #14b8a6, #8b5cf6)`,
            opacity: 1 - (index * 0.15),
            transform: `scale(${1 - (index * 0.1)})`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-all duration-200 ease-out mix-blend-difference ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          width: 16,
          height: 16,
          background: 'linear-gradient(45deg, #14b8a6, #8b5cf6)',
          boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)'
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full border-2 transition-all duration-300 ease-out ${
          isPointer ? 'scale-200 border-purple-400' : 'scale-100 border-teal-400'
        }`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderColor: isPointer ? '#a855f7' : '#14b8a6',
          opacity: 0.6
        }}
      />
    </>
  );
};

export default CustomCursor;