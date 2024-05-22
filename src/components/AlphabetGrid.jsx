"use client";
import AlphabetTile from './AlphabetTile';

const AlphabetGrid = ({ onTileClick }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div className="grid grid-cols-6 gap-2 justify-center mt-5">
      {alphabet.map((letter) => (
        <AlphabetTile key={letter} letter={letter} onClick={onTileClick} />
      ))}
    </div>
  );
};

export default AlphabetGrid;
