
import React, { useEffect, useState } from 'react';

export const UndertaleTitle: React.FC = () => {
  const [titleAnimation, setTitleAnimation] = useState(false);

  useEffect(() => {
    // Запускаем анимацию после загрузки компонента
    const timer = setTimeout(() => {
      setTitleAnimation(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center pixelated">
      <div 
        className={`text-6xl font-bold text-white mb-4 transition-all duration-1000 pixelated ${
          titleAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ 
          fontFamily: 'Determination Mono, monospace',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      >
        JAILPIXEL
      </div>
      
      <div className="relative w-64 h-1 my-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-yellow-400 to-purple-900 animate-pulse"></div>
      </div>
      
      <div className="text-sm text-gray-400 mt-4 pixelated max-w-md">
        Погрузись в пиксельный мир, полный тайн и приключений
      </div>
    </div>
  );
};
