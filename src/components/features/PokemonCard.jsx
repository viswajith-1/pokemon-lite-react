import { FaHeart, FaRegHeart } from 'react-icons/fa';

const typeColors = {
  fire: 'bg-red-500', water: 'bg-blue-500', grass: 'bg-green-500',
  electric: 'bg-yellow-400', psychic: 'bg-pink-500', default: 'bg-gray-500',
};

const PokemonCard = ({ pokemon, isFavorite, onToggleFavorite, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer relative"
      onClick={onClick}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
        className="absolute top-2 right-2 z-10 p-2 bg-white/50 rounded-full hover:bg-white"
      >
        {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
      </button>
      
      <div className="p-4 flex flex-col items-center">
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="w-45 h-45" />
        <h3 className="font-bold capitalize mt-2">{pokemon.name}</h3>
        <div className="flex gap-1 mt-1">
          {pokemon.types.map(t => (
            <span key={t.type.name} className={`text-xs px-2 py-0.5 rounded text-white ${typeColors[t.type.name] || typeColors.default}`}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;