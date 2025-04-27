
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UndertaleTitle } from "@/components/UndertaleTitle";
import { GameMenu } from "@/components/GameMenu";
import { useEffect, useState } from "react";

const Index = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audio] = useState(new Audio("https://vgmsite.com/soundtracks/undertale/pjiocehy/02%20Start%20Menu.mp3"));

  // Воспроизведение музыки при загрузке страницы
  useEffect(() => {
    audio.volume = 0.5;
    audio.loop = true;
    
    const playMusic = () => {
      audio.play().catch(e => console.log("Автовоспроизведение заблокировано браузером:", e));
      setMusicPlaying(true);
      document.removeEventListener('click', playMusic);
    };
    
    document.addEventListener('click', playMusic);
    
    return () => {
      audio.pause();
      document.removeEventListener('click', playMusic);
    };
  }, [audio]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative pixelated">
      {/* Фоновая анимация пиксельного мира */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <PixelatedBackground />
      </div>
      
      <div className="z-10 flex flex-col items-center justify-center space-y-6 p-4">
        <UndertaleTitle />
        
        <div className="mt-12">
          <GameMenu />
        </div>
        
        <div className="mt-8 text-gray-400 text-xs pixelated max-w-md text-center">
          Нажмите на экран, чтобы включить музыку. Используйте стрелки для навигации по меню.
        </div>
        
        <div className="fixed bottom-4 left-4 text-white text-xs opacity-70 font-pixelated">
          JAILPIXEL ● 2025
        </div>
        
        {!musicPlaying && (
          <div className="absolute top-4 right-4 text-gray-400 text-xs animate-pulse">
            Нажмите для включения звука
          </div>
        )}
      </div>
    </div>
  );
};

// Компонент для создания пиксельного фона
const PixelatedBackground = () => {
  return (
    <div className="absolute inset-0 bg-gray-900 pixelated">
      {/* Сетка пикселей */}
      <div className="grid grid-cols-24 grid-rows-18 h-full w-full">
        {Array.from({ length: 432 }).map((_, i) => (
          <div
            key={i}
            className="pixelated"
            style={{
              backgroundColor: i % 23 === 0 || i % 17 === 0
                ? 'rgba(41, 41, 61, 0.8)'
                : i % 7 === 0
                  ? 'rgba(30, 30, 45, 0.6)'
                  : 'rgba(20, 20, 35, 0.4)',
              height: '100%',
              width: '100%'
            }}
          />
        ))}
      </div>
      
      {/* Пиксельные звезды */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white pixelated animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.9,
            animationDuration: `${3 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Пиксельные руны */}
      <div className="absolute left-10 top-1/4 text-2xl text-purple-600 opacity-30 pixelated">
        ⚐︎
      </div>
      <div className="absolute right-20 top-1/3 text-2xl text-blue-600 opacity-30 pixelated">
        ☜︎
      </div>
      <div className="absolute left-1/3 bottom-1/4 text-2xl text-yellow-600 opacity-30 pixelated">
        ⬧︎
      </div>
      <div className="absolute right-1/4 bottom-1/3 text-2xl text-green-600 opacity-30 pixelated">
        ⧫︎
      </div>
    </div>
  );
};

export default Index;
