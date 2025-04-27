
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const GameMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['НАЧАТЬ ИГРУ', 'НАСТРОЙКИ', 'ИНФОРМАЦИЯ'];
  const [hoverSound] = useState(new Audio('https://vgmsite.com/soundtracks/undertale/ypdhdtlu/05%20Enemy%20Approaching.mp3'));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setSelectedOption((prev) => {
        hoverSound.currentTime = 0;
        hoverSound.volume = 0.2;
        hoverSound.play().catch(e => console.log("Звук заблокирован:", e));
        return prev > 0 ? prev - 1 : menuOptions.length - 1;
      });
    } else if (e.key === 'ArrowDown') {
      setSelectedOption((prev) => {
        hoverSound.currentTime = 0;
        hoverSound.volume = 0.2;
        hoverSound.play().catch(e => console.log("Звук заблокирован:", e));
        return prev < menuOptions.length - 1 ? prev + 1 : 0;
      });
    }
  };

  const playHoverSound = () => {
    hoverSound.currentTime = 0;
    hoverSound.volume = 0.2;
    hoverSound.play().catch(e => console.log("Звук заблокирован:", e));
  };

  return (
    <div 
      className="flex flex-col items-center space-y-3 pixelated" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      <div className="mb-4 w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      {menuOptions.map((option, index) => (
        <Link 
          key={option} 
          to={index === 0 ? '/game' : '/'}
          className={`w-64 text-center no-underline ${index === selectedOption ? 'focus:outline-none' : ''}`}
        >
          <Button
            variant="ghost"
            className={`w-full text-lg font-pixelated transition-all pixelated ${
              index === selectedOption 
                ? 'text-yellow-300 border-2 border-yellow-300 bg-black bg-opacity-50' 
                : 'text-white hover:text-yellow-200'
            }`}
            style={{ fontFamily: 'Determination Mono, monospace' }}
            onMouseEnter={() => {
              setSelectedOption(index);
              playHoverSound();
            }}
          >
            {index === selectedOption && '❯ '}{option}
          </Button>
        </Link>
      ))}
      <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </div>
  );
};
