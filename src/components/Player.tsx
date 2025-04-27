
import React from 'react';

interface PlayerProps {
  x: number;
  y: number;
}

export const Player: React.FC<PlayerProps> = ({ x, y }) => {
  return (
    <div 
      className="player pixelated"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '32px',
        height: '32px',
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: 10,
        backgroundImage: `url('https://images.unsplash.com/photo-1535376472810-5d229c65da09?w=32&h=32&fit=crop&crop=center')`,
        backgroundSize: 'contain',
        imageRendering: 'pixelated'
      }}
    />
  );
};
