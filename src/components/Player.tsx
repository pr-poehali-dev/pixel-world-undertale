
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
        position: 'absolute',
        zIndex: 10,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='none'/%3E%3Crect x='12' y='6' width='8' height='8' fill='%23ff0000'/%3E%3Crect x='8' y='14' width='16' height='12' fill='%230000ff'/%3E%3Crect x='8' y='26' width='4' height='4' fill='%23000000'/%3E%3Crect x='20' y='26' width='4' height='4' fill='%23000000'/%3E%3C/svg%3E")`,
        backgroundSize: 'contain',
        imageRendering: 'pixelated'
      }}
    />
  );
};
