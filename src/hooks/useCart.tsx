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
}

const PokemonCartContext = createContext<PokemonCartContextData>({} as PokemonCartContextData);

export function PokemonCart({ children }: PokemonCartContextProps) {

  const [ pokemons, setPokemons ] = useState<PokemonItem[]>([]);

  const pokemondata = [
    { id: '21212', name: 'Charmander', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
    { id: '21213', name: 'Charmander 1', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
    { id: '21214', name: 'Charmander 2', type: 'Fire', img: 'https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png' },
  ]

  setPokemons(pokemondata);

  return(
    <PokemonCartContext.Provider
      value={{pokemons}}
    >
      { children }
    </PokemonCartContext.Provider>
  )
}

export function usePokemonCart() {
  const context = useContext(PokemonCartContext);

  return context;
}