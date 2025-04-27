
import React, { useState, useEffect } from 'react';

interface DialogBoxProps {
  text: string;
  onNext: () => void;
}

export const DialogBox: React.FC<DialogBoxProps> = ({ text, onNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setTextIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (textIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[textIndex]);
        setTextIndex(textIndex + 1);
      }, 40);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [textIndex, text]);

  const handleClick = () => {
    if (isComplete) {
      onNext();
    } else {
      // Если текст печатается, показать весь текст сразу
      setDisplayedText(text);
      setTextIndex(text.length);
      setIsComplete(true);
    }
  };

  return (
    <div 
      className="dialog-box bg-black text-white p-6 w-[500px] h-[150px] mx-auto relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-xl pixelated" style={{ fontFamily: 'Determination Mono, monospace' }}>
        {displayedText}
      </div>
      
      {isComplete && (
        <div className="absolute bottom-4 right-6 animate-pulse">
          ▼
        </div>
      )}
    </div>
  );
};
