
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const GameMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const menuOptions = ['НАЧАТЬ ИГРУ', 'НАСТРОЙКИ', 'ИНФОРМАЦИЯ'];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      setSelectedOption((prev) => (prev > 0 ? prev - 1 : menuOptions.length - 1));
    } else if (e.key === 'ArrowDown') {
      setSelectedOption((prev) => (prev < menuOptions.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div 
      className="flex flex-col items-center space-y-2" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      {menuOptions.map((option, index) => (
        <Link 
          key={option} 
          to={index === 0 ? '/game' : '/'}
          className={`w-48 text-center no-underline ${index === selectedOption ? 'focus:outline-none' : ''}`}
        >
          <Button
            variant="ghost"
            className={`w-full text-lg font-pixelated transition-all ${
              index === selectedOption 
                ? 'text-yellow-300 border-2 border-yellow-300' 
                : 'text-white hover:text-yellow-200'
            }`}
            style={{ fontFamily: 'Determination Mono, monospace' }}
            onMouseEnter={() => setSelectedOption(index)}
          >
            {index === selectedOption && '❯ '}{option}
          </Button>
        </Link>
      ))}
    </div>
  );
};
