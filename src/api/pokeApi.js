import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getPokemonDetails = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getPokemonTypes = async () => {
  const response = await axios.get(`${API_URL}/type`);
  return response.data;
};

export const getPokemonByName = async (name) => {
  const response = await axios.get(`${API_URL}/pokemon/${name.toLowerCase()}`);
  return response.data;
};