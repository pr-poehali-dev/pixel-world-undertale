
import React from 'react';

export const GameWorld: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden pixelated">
      {/* Фон подвала */}
      <div 
        className="absolute inset-0 bg-gray-900 pixelated"
        style={{
          imageRendering: 'pixelated'
        }}
      >
        {/* Каменная текстура стен */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-20 grid-rows-15 h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
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
                  borderRight: i % 20 === 19 ? '1px solid #33334d' : 'none',
                  borderBottom: i % 15 === 14 ? '1px solid #33334d' : 'none'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Пол подвала */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 pixelated">
          <div className="grid grid-cols-30 grid-rows-12 h-full w-full">
            {Array.from({ length: 360 }).map((_, i) => (
              <div
                key={`floor-${i}`}
                className="pixelated"
                style={{
                  backgroundColor: 
                    (i % 2 === 0 && Math.floor(i / 30) % 2 === 0) || 
                    (i % 2 === 1 && Math.floor(i / 30) % 2 === 1) 
                      ? '#332f4d' : '#2d2a44',
                  height: '100%',
                  width: '100%'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Колонны */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={`column-${i}`}
            className="absolute w-8 h-32 bg-gray-700 pixelated"
            style={{
              top: '100px',
              left: `${150 + i * 180}px`,
              backgroundImage: 'linear-gradient(to bottom, #3f3f5f, #2d2d45)',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-4 bg-gray-600"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800"></div>
          </div>
        ))}
        
        {/* Факелы */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div 
            key={`torch-${i}`}
            className="absolute w-4 h-10 pixelated"
            style={{
              top: '120px',
              left: `${220 + i * 350}px`,
            }}
          >
            <div className="w-full h-6 bg-brown-800"></div>
            <div className="w-6 h-6 -ml-1 -mt-1 bg-orange-500 animate-pulse rounded-full" style={{filter: 'blur(4px)'}}></div>
            <div className="w-4 h-4 absolute top-0 left-0 bg-yellow-500 animate-pulse rounded-full" style={{filter: 'blur(2px)'}}></div>
          </div>
        ))}
        
        {/* Лужи на полу */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`puddle-${i}`}
            className="absolute pixelated"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${10 + Math.random() * 20}px`,
              bottom: `${50 + Math.random() * 100}px`,
              left: `${100 + i * 120 + Math.random() * 60}px`,
              backgroundColor: 'rgba(68, 68, 102, 0.4)',
              borderRadius: '50%',
              transform: 'rotateX(60deg)'
            }}
          ></div>
        ))}
        
        {/* Трещины на стенах */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`crack-${i}`}
            className="absolute pixelated"
            style={{
              width: '2px',
              height: `${10 + Math.random() * 30}px`,
              top: `${50 + Math.random() * 200}px`,
              left: `${50 + i * 90 + Math.random() * 40}px`,
              backgroundColor: '#1a1a25',
              transform: `rotate(${Math.random() * 60 - 30}deg)`
            }}
          ></div>
        ))}
        
        {/* Паутина в углах */}
        <div className="absolute top-0 left-0 w-20 h-20" style={{
          backgroundImage: 'radial-gradient(circle at top left, transparent 70%, rgba(255,255,255,0.1) 90%)'
        }}></div>
        <div className="absolute top-0 right-0 w-20 h-20" style={{
          backgroundImage: 'radial-gradient(circle at top right, transparent 70%, rgba(255,255,255,0.1) 90%)'
        }}></div>
        
        {/* Тайные руны на стенах */}
        <div className="absolute top-1/4 left-1/5 text-xs text-purple-900 opacity-20 pixelated">●︎</div>
        <div className="absolute top-1/3 right-1/4 text-xs text-purple-900 opacity-20 pixelated">♒︎</div>
        <div className="absolute bottom-1/3 left-1/3 text-xs text-purple-900 opacity-20 pixelated">♋︎</div>
      </div>
    </div>
  );
};
