import { createContext, ReactNode, useContext, useEffect, useState } from 'react';


type Abilities = {
  name: string;
}

type Moves = {
  name: string;
}

interface PokemonItem {
  id: string;
  name: string;
  type: string;
  url_image_back: string;
  url_image_front: string;
  species: string;
  abilities: Abilities[];
  moves: Moves[];
}


interface PokemonCartContextProps {
  children: ReactNode;
}

interface PokemonCartContextData {
  pokemons: PokemonItem[];
  pokemon: PokemonItem[];
  loadPokemons: () => void;
  removePokemon: (id: string) => void;
  addPokemon: (pokemon: PokemonItem) => void;
}

const PokedexContext = createContext<PokemonCartContextData>({} as PokemonCartContextData);

export function PokedexProvider({ children }: PokemonCartContextProps) {

  const [ pokemons, setPokemons ] = useState<PokemonItem[]>([]);
  const [ pokemon, setPokemon ] = useState<PokemonItem[]>([]);

  function loadPokemons() {
    var pokemonArray = JSON.parse(localStorage.getItem('pokemon'));

    setPokemon(pokemonArray);
  }

  function setPokemonOnLocalStorage() {
    var pokemonParsed = JSON.stringify(pokemons);

    localStorage.setItem("pokemon", pokemonParsed);
  }

  function removerPokemonOnLocalStorage() {
    localStorage.removeItem('pokemon')
  }

  function addPokemon(pokemonData: PokemonItem) {
    setPokemons([...pokemons, pokemonData]);

    if(pokemon.length > 0) {
      removerPokemonOnLocalStorage()
    } 

    setPokemonOnLocalStorage();
    
    return;
  }

  function removePokemon(id: string) {
    const findPokemon = pokemon.filter(pokemon => pokemon.id !== id);

    if(pokemon.length > 0) {
      removerPokemonOnLocalStorage()
    } 

    setPokemon(findPokemon);
  }

  return(
    <PokedexContext.Provider
      value={{
        pokemons,
        pokemon,
        loadPokemons,
        removePokemon,
        addPokemon
      }}
    >
      { children }
    </PokedexContext.Provider>
  )
}

export function usePokedexContext() {
  const context = useContext(PokedexContext);

  return context;
}