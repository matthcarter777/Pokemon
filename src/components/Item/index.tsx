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
    url_image_back: string;
    url_image_front: string;
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
            filter: 'brightness(0.9)'
          }}
        >
          
          <Flex>

            <Flex
              marginTop="-20px"
              marginStart="-20px"
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
              marginTop="-15px"
              marginRight="10px"
              bg="#F25D52"
              w="52px"
              h="30px"
              alignItems="center"
              justifyContent="center"
              borderRadius="5px"
            >
              {pokemon.type}
            </Flex>

          </Flex>

          <Flex
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >

            <Image
              w="200px"
              h="150px"
              marginBottom="35px" 
              src={pokemon.url_image_front}
              alt="Pockemon"
            />


          </Flex>

          <Flex
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          > 
            <Flex
              marginTop="-200px"
              opacity="0"
              transition="opacity 0.2s"
              _hover={{
                opacity: "1"
              }}
            >
          
              <Button
                  as="a"
                  size="sm"
                  h="50px"
                  w="50px"
                  borderRadius="50%"
                  bg=" #49DBDF;"
                  marginEnd="15px"
                >
                  <Icon as={RiEyeFill} fontSize="30" />
                </Button>
                <Button
                  as="a"
                  size="sm"
                  h="50px"
                  w="50px"
                  borderRadius="50%"
                  bg="#3AA05B"
                  onClick={() => addPokemon(pokemon)}
                >
                  <Icon as={RiAddLine} fontSize="30" />
                </Button>
              </Flex>
          </Flex>
          
          <Flex
            w="100%"
            justifyContent="center"
          >
            <Flex
              bg="#7E7394"
              w="147px"
              h="57px"
              marginTop="-40px"
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

        </Flex>


      </Flex>
    </>
  )
}