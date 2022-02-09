/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { 
  Box, 
  Text, 
  Flex, 
  Heading, 
  Button, 
  Icon, 
  Table, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td, 
  useBreakpointValue, 
  Spinner, 
  AlertDialog ,
  AlertDialogBody ,
  AlertDialogFooter ,
  AlertDialogHeader ,
  AlertDialogContent ,
  AlertDialogOverlay ,
  Image 
} from "@chakra-ui/react";
import { RiEyeFill, RiDeleteBin5Line } from "react-icons/ri";
import { useEffect } from "react";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuth } from "../hooks/useLogin";
import { usePokedexContext } from '../hooks/usePokedex';


export default function Home() {

  const { loggedIn } = useAuth();
  const { pokemons, loadPokemons, removePokemon } = usePokedexContext();

  useEffect(() => {
    getUser();
    loadPokemons();
  }, [])


  async function getUser() {
    await loggedIn()
  }

  return (
    <Flex 
      direction="column" 
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        h="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        justifyContent="center"
        flexDirection="row"
      >
        <Flex
          marginTop="-6"
          bg="#D4C3A3"
          height="100%"
          width="70%"
          direction="column"
        >
          <Flex
            direction="column"
            w="100%"
            h="10%"
            borderBottom="1px solid #707070"
          >
            <Flex
              marginTop="10"
              marginStart="20"
              direction="column"
            >

              <Text color="#535662">
                Pokedex Usuário
              </Text>
              
            </Flex>

          </Flex>
          
          <Flex
            padding="50"
          >

            <Table 
              colorScheme="whiteAlpha"
            >
              <Thead>
                <Tr>
                  <Th>Foto</Th>
                  <Th>Nome</Th>
                  <Th>Tipo</Th>
                  <Th width="8">Ação</Th>
                </Tr>
              </Thead>
              <Tbody>

                { pokemons.map( pokemon => {
                  return (
                    <Tr 
                      key={pokemon.id}
                    >

                      <Td>
                        <Box
                          w="60px"
                          h="60px"
                          border="2px solid #100B16"
                        >
                          <Image 
                            src={pokemon.img}
                            alt="Image"
                            w="50px"
                            h="50px"
                          />
                        </Box>
                      </Td>

                      <Td>
                          <Box>
                              <Text fontWeight="bold" fontSize="20px" color="#535662">{ pokemon.name }</Text>
                          </Box>
                      </Td>
   
                      <Td>
                        <Flex>
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
                        </Flex>
                      </Td>

                      <Td>
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
                      </Td>

                    </Tr>
                  )
                }) }

              </Tbody>
            
            </Table> 
        
          </Flex>
  
        </Flex>

      </Flex>

      <Footer />

    </Flex>
  )
}
