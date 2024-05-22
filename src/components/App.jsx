"use client";
import { useState } from 'react';
import AlphabetGrid from './AlphabetGrid';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;
    newString = replaceConsecutiveLetters(newString);
    setOutputString(newString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, (match) => '_'.repeat(Math.ceil(match.length / 3)));
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-5">Alphabet Tile Interaction</h1>
      <AlphabetGrid onTileClick={handleTileClick} />
      <div id="outputString" className="mt-5 text-2xl">{outputString}</div>
    </div>
  );
};

export default App;
