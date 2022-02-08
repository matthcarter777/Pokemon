import { Children, createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface PokemonItem {
  id: string;
  name: string;
  type: string;
  img: string;
}

interface PokemonCartContextProps {
  children: ReactNode;
}

interface PokemonCartContextData {
  pokemons: PokemonItem[];
  loadPokemons: () => void;
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

    setPokemons(pokemonData);
  }

  return(
    <PokedexContext.Provider
      value={{
        pokemons,
        loadPokemons
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