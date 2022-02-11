import { api } from './api';

type Pokemon = {
  id: string;
  name: string;
  type: string;
  url_image_back: string;
  url_image_front: string;
  species: string;
  abilities: Abilities[];
  moves: Moves[];
}

type Abilities = {
  name: string;
}

type Moves = {
  name: string;
}

export async function getPokemon(offset: number, limit: number): Promise<Pokemon[]> {
  const { data } = await api.get('/pokemon', {
    params: {
      offset,
      limit
    }
  });

  const pokemonData = data.results;
  let pokemons = [];

  if ( pokemonData.length > 0) {
    pokemons = await Promise.all(
      pokemonData.map( async pokemon => {
        const { data } = await api.get(pokemon.url);
        
        return data;
      })
    )
  }

  const pokemonFormatted = pokemons.map( pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      url_image_back: pokemon.sprites.back_default,
      url_image_front: pokemon.sprites.front_default,
      species: pokemon.species.name,
      abilities: pokemon.abilities.map( ability => {
        return {
          name: ability.ability.name
        }
      }),
      moves: pokemon.moves.map(move => {
        return {
          name: move.move.name
        }
      })
    }
  });
  
  console.log(pokemonFormatted);
  console.log(pokemons);

  return pokemonFormatted;
}