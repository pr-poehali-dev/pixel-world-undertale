
import React, { useState, useEffect } from 'react';

interface DialogBoxProps {
  text: string;
  onNext?: () => void;
  speed?: number;
}

export const DialogBox: React.FC<DialogBoxProps> = ({ 
  text, 
  onNext,
  speed = 30 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typeSound] = useState(new Audio('https://vgmsite.com/soundtracks/undertale/gvyypyxy/01%20Once%20Upon%20a%20Time.mp3'));

  useEffect(() => {
    typeSound.volume = 0.2;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        
        // Воспроизведение звука печатания
        if (text[currentIndex] !== ' ' && text[currentIndex] !== '*') {
          typeSound.currentTime = 0;
          typeSound.play().catch(e => console.log("Звук заблокирован:", e));
        }
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, typeSound]);

  const handleClick = () => {
    if (isComplete && onNext) {
      onNext();
    } else if (!isComplete) {
      // Если текст еще печатается, показываем весь текст сразу
      setDisplayedText(text);
      setCurrentIndex(text.length);
      setIsComplete(true);
    }
  };

  return (
    <div 
      className="dialog-box w-96 max-w-full p-4 bg-black border-4 border-white rounded pixelated relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-white font-pixelated text-xl leading-relaxed pixelated" style={{ fontFamily: 'Determination Mono, monospace' }}>
        {displayedText}
      </div>
      
      {isComplete && (
        <div className="absolute bottom-2 right-4 animate-bounce text-white">
          ▼
        </div>
      )}
    </div>
  );
};
