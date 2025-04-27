
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DialogBox } from '@/components/DialogBox';
import { GameWorld } from '@/components/GameWorld';
import { Player } from '@/components/Player';
import { Button } from '@/components/ui/button';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(0);
  const [showDialog, setShowDialog] = useState(true);
  const [playerPosition, setPlayerPosition] = useState({ x: 400, y: 300 });
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const introDialogs = [
    "* Давным-давно, два народа правили Землей: ЛЮДИ и МОНСТРЫ.",
    "* Однажды между ними разразилась война.",
    "* После долгой битвы победили люди.",
    "* Они запечатали монстров под горой мощным магическим барьером.",
    "* Легенда гласит, что те, кто поднимаются на гору, никогда не возвращаются...",
    "* Много лет спустя...",
    "* Гора Эбот, 201X год",
    "* Ты, человек, упал в подземелье и оказался в мире монстров.",
    "* Теперь твоё путешествие начинается."
  ];

  useEffect(() => {
    // Воспроизведение музыки при загрузке страницы
    const audio = new Audio("https://vgmsite.com/soundtracks/undertale/taqhiqlb/03%20Your%20Best%20Friend.mp3");
    audio.volume = 0.5;
    audio.loop = true;
    
    if (gameStarted) {
      audio.play().catch(e => console.log("Автовоспроизведение заблокировано браузером:", e));
    }
    
    return () => {
      audio.pause();
    };
  }, [gameStarted]);

  const handleNextDialog = () => {
    if (currentDialog < introDialogs.length - 1) {
      setCurrentDialog(currentDialog + 1);
    } else {
      setShowDialog(false);
      setGameStarted(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!gameStarted) return;
    
    const speed = 10;
    const gameArea = gameAreaRef.current;
    if (!gameArea) return;
    
    const bounds = gameArea.getBoundingClientRect();
    const newPosition = { ...playerPosition };
    
    switch (e.key) {
      case 'ArrowUp':
        newPosition.y = Math.max(newPosition.y - speed, 0);
        break;
      case 'ArrowDown':
        newPosition.y = Math.min(newPosition.y + speed, bounds.height - 32);
        break;
      case 'ArrowLeft':
        newPosition.x = Math.max(newPosition.x - speed, 0);
        break;
      case 'ArrowRight':
        newPosition.x = Math.min(newPosition.x + speed, bounds.width - 32);
        break;
    }
    
    setPlayerPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPosition, gameStarted]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden game-container">
      {!gameStarted && (
        <div className="absolute top-4 left-4 z-20">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-yellow-200">
              ← Вернуться в меню
            </Button>
          </Link>
        </div>
      )}
      
      <div 
        ref={gameAreaRef}
        className="game-area w-full max-w-4xl h-[600px] mx-auto relative"
      >
        {gameStarted ? (
          <>
            <GameWorld />
            <Player x={playerPosition.x} y={playerPosition.y} />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {showDialog && (
              <DialogBox 
                text={introDialogs[currentDialog]} 
                onNext={handleNextDialog}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
