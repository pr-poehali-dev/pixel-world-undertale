
import React from 'react';

export const GameWorld: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden pixelated">
      {/* Фон подвала */}
      <div 
        className="absolute inset-0 bg-[#1c1c28] pixelated"
        style={{
          imageRendering: 'pixelated'
        }}
      >
        {/* Каменная текстура стен */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-16 grid-rows-10 h-full w-full">
            {Array.from({ length: 160 }).map((_, i) => (
              <div
                key={i}
                className="pixelated"
                style={{
                  backgroundColor: 
                    i % 21 === 0 ? '#2c2c3a' : 
                    i % 7 === 0 ? '#252533' : 
                    i % 11 === 0 ? '#20202e' : 
                    '#1c1c28',
                  height: '100%',
                  width: '100%',
                  borderRight: i % 16 === 15 ? '1px solid #33334d' : 'none',
                  borderBottom: i % 10 === 9 ? '1px solid #33334d' : 'none'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Пол подвала */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 pixelated">
          <div className="grid grid-cols-20 grid-rows-8 h-full w-full">
            {Array.from({ length: 160 }).map((_, i) => (
              <div
                key={`floor-${i}`}
                className="pixelated"
                style={{
                  backgroundColor: 
                    (i % 2 === 0 && Math.floor(i / 20) % 2 === 0) || 
                    (i % 2 === 1 && Math.floor(i / 20) % 2 === 1) 
                      ? '#443f5d' : '#3d384f',
                  height: '100%',
                  width: '100%'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Колонны */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div 
            key={`column-${i}`}
            className="absolute w-6 h-24 bg-gray-700 pixelated"
            style={{
              top: '60px',
              left: `${90 + i * 140}px`,
              backgroundImage: 'linear-gradient(to bottom, #3f3f5f, #2d2d45)',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-3 bg-gray-600"></div>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gray-800"></div>
          </div>
        ))}
        
        {/* Факелы */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div 
            key={`torch-${i}`}
            className="absolute w-4 h-8 pixelated"
            style={{
              top: '70px',
              left: `${120 + i * 80}px`,
            }}
          >
            <div className="w-full h-4 bg-[#654321]"></div>
            <div className="w-5 h-5 -ml-1 -mt-1 bg-orange-500 animate-pulse rounded-full" style={{filter: 'blur(2px)'}}></div>
            <div className="w-3 h-3 absolute top-0 left-0 bg-yellow-500 animate-pulse rounded-full" style={{filter: 'blur(1px)'}}></div>
          </div>
        ))}
        
        {/* Лужи на полу */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={`puddle-${i}`}
            className="absolute pixelated"
            style={{
              width: `${15 + Math.random() * 20}px`,
              height: `${8 + Math.random() * 12}px`,
              bottom: `${30 + Math.random() * 50}px`,
              left: `${60 + i * 70 + Math.random() * 20}px`,
              backgroundColor: 'rgba(68, 68, 102, 0.4)',
              borderRadius: '50%',
              transform: 'rotateX(60deg)'
            }}
          ></div>
        ))}
        
        {/* Паутина в углах */}
        <div className="absolute top-0 left-0 w-16 h-16" style={{
          backgroundImage: 'radial-gradient(circle at top left, transparent 70%, rgba(255,255,255,0.1) 90%)'
        }}></div>
        <div className="absolute top-0 right-0 w-16 h-16" style={{
          backgroundImage: 'radial-gradient(circle at top right, transparent 70%, rgba(255,255,255,0.1) 90%)'
        }}></div>
        
        {/* Указатель направления */}
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-white pixelated text-sm">
          → Выход →
        </div>
      </div>
    </div>
  );
};
