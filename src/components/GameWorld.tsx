
import React from 'react';

export const GameWorld: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Фоновая карта */}
      <div 
        className="absolute inset-0 pixelated"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=800&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          imageRendering: 'pixelated',
          filter: 'brightness(0.7) contrast(1.2)'
        }}
      >
        {/* Декоративные элементы */}
        <div className="absolute left-[100px] top-[150px] w-16 h-16 pixelated">
          <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse" 
               style={{animationDuration: '3s'}}></div>
        </div>
        
        <div className="absolute right-[150px] bottom-[100px] w-12 h-24 pixelated">
          <div className="w-full h-full bg-green-800" 
               style={{clipPath: 'polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%)'}}></div>
        </div>
        
        {/* Руины */}
        <div className="absolute top-[50px] left-[300px] w-[200px] h-[150px] pixelated">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518723185408-67b6afbbf517?w=200&h=150&fit=crop')`,
              backgroundSize: 'cover',
              imageRendering: 'pixelated'
            }}
          ></div>
        </div>
        
        {/* Цветы */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-6 h-6 pixelated"
            style={{
              left: `${200 + i * 50}px`,
              top: `${400 + (i % 2) * 20}px`,
              backgroundColor: i % 2 === 0 ? '#f9e44c' : '#e3c74c',
              clipPath: 'polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
