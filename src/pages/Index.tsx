
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UndertaleTitle } from "@/components/UndertaleTitle";
import { GameMenu } from "@/components/GameMenu";
import { useEffect } from "react";

const Index = () => {
  // Воспроизведение музыки при загрузке страницы
  useEffect(() => {
    const audio = new Audio("https://vgmsite.com/soundtracks/undertale/pjiocehy/02%20Start%20Menu.mp3");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play().catch(e => console.log("Автовоспроизведение заблокировано браузером:", e));
    
    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative pixelated">
      {/* Фоновая анимация звездного неба */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <StarryBackground />
      </div>
      
      <div className="z-10 flex flex-col items-center justify-center space-y-6 p-4">
        <UndertaleTitle />
        
        <div className="mt-8">
          <GameMenu />
        </div>
        
        <div className="fixed bottom-4 left-4 text-white text-xs opacity-70 font-pixelated">
          Undertale-inspired game ● 2025
        </div>
      </div>
    </div>
  );
};

// Компонент для создания звездного неба
const StarryBackground = () => {
  return (
    <div className="absolute inset-0 bg-black">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.9,
            animationDuration: `${3 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default Index;
