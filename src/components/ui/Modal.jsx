import { FaTimes } from 'react-icons/fa';

const Modal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        <div className="bg-red-600 p-4 flex justify-between items-center text-white">
          <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
          <button onClick={onClose}><FaTimes size={24} /></button>
        </div>
        
        <div className="p-6 flex flex-col items-center">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name}
            className="w-48 h-48 object-contain"
          />
          {/* Stats Section */}
          <div className="w-full mt-4">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="mb-2">
                <div className="flex justify-between text-sm capitalize text-gray-600">
                  <span>{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;