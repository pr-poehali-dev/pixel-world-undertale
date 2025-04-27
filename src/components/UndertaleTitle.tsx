
import React from 'react';

export const UndertaleTitle: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold mb-2 text-white pixelated" style={{ fontFamily: 'Determination Mono, monospace' }}>
        UNDERTALE
      </h1>
      <div className="pixelated w-64 h-64 mx-auto my-4">
        <img 
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&h=300&fit=crop"
          alt="Undertale Logo" 
          className="pixelated w-full h-full object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <p className="text-white text-lg mt-2 pixelated" style={{ fontFamily: 'Determination Mono, monospace' }}>
        ВЕЛИКОЕ ПРИКЛЮЧЕНИЕ ЖДЕТ
      </p>
    </div>
  );
};
