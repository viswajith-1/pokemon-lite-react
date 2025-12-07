import { useState, useEffect } from 'react';
import { getPokemonList, getPokemonDetails } from '../api/pokeApi';

export const usePokemonData = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemonList(LIMIT, offset);
        const promises = data.results.map((p) => getPokemonDetails(p.url));
        const results = await Promise.all(promises);
        setPokemon(results);
      } catch (err) {
        setError('Failed to fetch Pokemon. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [offset]);

  const nextPage = () => setOffset((prev) => prev + LIMIT);
  const prevPage = () => setOffset((prev) => Math.max(0, prev - LIMIT));

  return { pokemon, loading, error, nextPage, prevPage, offset, setPokemon };
};
