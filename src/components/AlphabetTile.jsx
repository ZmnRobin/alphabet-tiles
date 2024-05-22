"use client";
const AlphabetTile = ({ letter, onClick }) => {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 border border-gray-400 cursor-pointer select-none hover:bg-black transition duration-200 ease-in-out hover:text-white text-2xl font-bold"
      onClick={() => onClick(letter)}
    >
      {letter}
    </div>
  );
};

export default AlphabetTile;
