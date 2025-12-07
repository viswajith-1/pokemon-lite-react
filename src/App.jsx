import { useState } from 'react';
import { usePokemonData } from './hooks/usePokemonData';
import { useFavorites } from './hooks/useFavorites';
import { getPokemonByName } from './api/pokeApi';

// Components
import Header from './components/layout/Header';
import MainContainer from './components/layout/MainContainer';
import Spinner from './components/ui/Spinner';
import Modal from './components/ui/Modal';
import PokemonCard from './components/features/PokemonCard';
import SearchBar from './components/features/SearchBar';
import TypeFilter from './components/features/TypeFilter';
import PaginationControls from './components/features/PaginationControls';
import Footer from './components/layout/Footer';

function App() {
  const { pokemon, loading, error, nextPage, prevPage, offset, setPokemon } = usePokemonData();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [selectedType, setSelectedType] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Search Logic
  const handleSearch = async (term) => {
    if (!term) return;
    try {
      setErrorMsg('');
      const data = await getPokemonByName(term);
      setPokemon([data]); 
    } catch (err) {
      setErrorMsg('Pokemon not found!');
    }
  };

  // Filter Logic
  const filteredList = pokemon.filter(p => {
    if (selectedType) return p.types.some(t => t.type.name === selectedType);
    return true;
  });

  return (
    <>
      <Header>
        <SearchBar onSearch={handleSearch} />
      </Header>

      <MainContainer>
        {/* Controls Bar */}
        <div className="flex flex-wrap justify-between items-center my-6 gap-4">
          <TypeFilter selectedType={selectedType} onSelectType={setSelectedType} />
          <PaginationControls onNext={nextPage} onPrev={prevPage} isStart={offset === 0} />
        </div>

        {/* State Handling */}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {errorMsg && <div className="text-red-500 text-center text-xl">{errorMsg}</div>}
        
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredList.map((p) => (
              <PokemonCard 
                key={p.id} 
                pokemon={p}
                isFavorite={isFavorite(p.id)}
                onToggleFavorite={() => toggleFavorite(p.id)}
                onClick={() => setSelectedPokemon(p)}
              />
            ))}
          </div>
        )}
      </MainContainer>

      <Modal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
        <Footer />
    </>
  );
}

export default App;
