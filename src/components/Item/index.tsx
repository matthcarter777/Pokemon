import { Flex, Text, Image, Button, Icon  } from '@chakra-ui/react';
import { type } from 'os';

import { RiEyeFill, RiAddLine } from "react-icons/ri";
import { usePokedexContext } from '../../hooks/usePokedex';

type Abilities = {
  name: string;
}

type Moves = {
  name: string;
}

interface PokemonItem {
  pokemon: {
    id: string;
    name: string;
    type: string;
    url_image: string;
    species: string;
    abilities: Abilities[];
    moves: Moves[];
  }
}


export function Item({ pokemon }: PokemonItem) {

  const { addPokemon } = usePokedexContext();

  function handleAddPokemon(pokemon) {
    addPokemon(pokemon);
  }

  return (
    <>
      <Flex
        h="200px"
        w="200px"
        margin="35px"
      >
        <Flex
          bg="#aba6b6"
          border="2px solid #100B16"
          direction="column"
          w="250px"
          _hover={{
            filter: "brightness(0.7)"
          }}
        >
          <Flex>

            <Flex
              marginTop="-10px"
              marginStart="-24px"
              bg="#535662"
              w="46.69px"
              h="48.35px"
              border="2px solid #100B16"
              transform="rotate(-43deg)"
              alignItems="center"
              justifyContent="center"
              marginEnd="150px"
              borderRadius="12px"
            >
              <Text
                fontSize="22px"
                transform="rotate(+43deg)" 
              >
                {pokemon.id}
              </Text>
            </Flex>

            <Flex
              marginTop="-4"
              bg="#F25D52"
              w="52px"
              h="30px"
              alignItems="center"
              justifyContent="center"
              borderRadius="5px"
            >
              {type}
            </Flex>

          </Flex>

          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              w="200px"
              h="160px" 
              src={pokemon.url_image}
              alt="Pockemon"
            />


          </Flex>
          
          <Flex
            w="100%"
            justifyContent="center"
          >
            <Flex
              bg="#7E7394"
              w="147px"
              h="57px"
              marginBottom="-30px"
              alignItems="center"
              justifyContent="center"
              border="2px solid #100B16"
              borderRadius="15px"
            >
              <Text fontSize="20px">
                {pokemon.name}
              </Text>
            </Flex>

          </Flex>

          <Flex
            h="245px"
            w="245px"
            position="absolute"
            alignItems="center"
            justifyContent="center"

          >
            <Button
              as="a"
              size="sm"
              h="50px"
              w="50px"
              borderRadius="50%"
              colorScheme=" #49DBDF;"
              marginEnd="15px"
            >
              <Icon as={RiEyeFill} fontSize="30" />
            </Button>
            <Button
              size="sm"
              h="50px"
              w="50px"
              borderRadius="50%"
              colorScheme=" #3AA05B;"
              marginEnd="15px"
              onClick={() => handleAddPokemon(pokemon)}
            >
              <Icon as={RiAddLine} fontSize="30" />
            </Button>
    
          </Flex>
        </Flex>


      </Flex>
    </>
  )
}