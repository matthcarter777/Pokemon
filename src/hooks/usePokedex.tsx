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
  url_image: string;
  species: string;
  abilities: Abilities[];
  moves: Moves[];
}


interface PokemonCartContextProps {
  children: ReactNode;
}

interface PokemonCartContextData {
  pokemons: PokemonItem[];
  loadPokemons: () => void;
  removePokemon: (id: string) => void;
  addPokemon: (pokemon: PokemonItem) => void;
}

const PokedexContext = createContext<PokemonCartContextData>({} as PokemonCartContextData);

export function PokedexProvider({ children }: PokemonCartContextProps) {

  const [ pokemons, setPokemons ] = useState<PokemonItem[]>([]);

  function loadPokemons() {
    const pokemonData = [
      { id: '21212', name: 'Charmander', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
      { id: '21213', name: 'Charmander 1', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
      { id: '21214', name: 'Charmander 2', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
    ];

    //setPokemons(pokemonData);
  }

  function addPokemon(pokemonData: PokemonItem) {
    setPokemons([...pokemons, pokemonData]);

    return;
  }

  function removePokemon(id: string) {
    const findPokemon = pokemons.filter(pokemon => pokemon.id !== id);

    setPokemons(findPokemon);
  }

  return(
    <PokedexContext.Provider
      value={{
        pokemons,
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