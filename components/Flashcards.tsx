import React, { useState } from 'react';
import { Flashcard } from '../types';

interface FlashcardsProps {
  cards: Flashcard[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ cards }) => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const handleFlip = (id: string) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative h-48 w-full perspective-1000 cursor-pointer group"
          onClick={() => handleFlip(card.id)}
        >
          <div
            className={`relative w-full h-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-xl border border-slate-200 bg-white ${
              flippedId === card.id ? 'rotate-y-180' : ''
            }`}
            style={{ transformStyle: 'preserve-3d', transform: flippedId === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* Front */}
            <div 
              className="absolute w-full h-full flex flex-col justify-center items-center p-4 backface-hidden rounded-xl bg-gradient-to-br from-white to-slate-50"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <span className="text-xs font-bold text-academic-500 uppercase tracking-widest mb-2">Begrepp</span>
              <h3 className="text-xl font-bold text-slate-800">{card.term}</h3>
              <p className="text-sm text-slate-400 mt-4">(Klicka för definition)</p>
            </div>

            {/* Back */}
            <div
              className="absolute w-full h-full flex flex-col justify-center items-center p-6 backface-hidden rounded-xl bg-academic-700 text-white rotate-y-180"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <span className="text-xs font-bold text-academic-200 uppercase tracking-widest mb-2">Förklaring</span>
              <p className="text-md font-medium leading-relaxed">{card.definition}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;