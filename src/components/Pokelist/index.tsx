import {
  ListItem,
  Text,
  OrderedList,
  Flex,
  Box,
  Image,
  Button,
  Icon
 } from '@chakra-ui/react';
import { RiEyeFill, RiDeleteBin5Line } from "react-icons/ri";

import { usePokedexContext } from '../../hooks/usePokedex';

export function PokeList() {

  const { pokemon, removePokemon } = usePokedexContext();

  return (
  <OrderedList listStyleType="none">

    { pokemon?.map(pokemon => {
      return (
        <ListItem key={pokemon.id} paddingBottom="20px">
          <Flex
            w="100%"
            h="10%"
            background="#fff"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="10px"
            borderRadius="5px"
          >
            <Box
              w="60px"
              h="60px"
              border="2px solid #100B16"
            >
              <Image 
                src={pokemon.url_image_front}
                alt="Image"
                w="80px"
                h="60px"
              />
            </Box>
    
            <Box>
              <Text fontWeight="bold" fontSize="20px" color="#535662">{ pokemon.name }</Text>
            </Box>
    
            <Flex
              h="30px"
              w="52px"
              background="#F25D52"
              borderRadius="5px"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="bold"> { pokemon.type } </Text>
            </Flex>
    
            <Box>
              <Flex>
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
                    as="a"
                    size="sm"
                    h="50px"
                    w="50px"
                    borderRadius="50%"
                    colorScheme="red"
                    onClick={() => removePokemon(pokemon.id)}
                  >
                    <Icon as={RiDeleteBin5Line} fontSize="30" />
                  </Button>
              </Flex>
            </Box>
    
          </Flex>
       </ListItem>
      )
    }) }
  </OrderedList>
  )
}