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
import { PokeList } from "../components/Pokelist";


export default function Home() {

  const { loggedIn } = useAuth();
  const { loadPokemons, removePokemon } = usePokedexContext();

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

              <Text 
                color="#535662"
                fontWeight="bold"
              >
                Pokedex Usuário
              </Text>
              
            </Flex>

          </Flex>
          
          <Flex
            padding="50"
            display="flex"
            flexDirection="column"
          >
            
          <Flex
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="#535662"
            padding="20px"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            <Text>Foto</Text>
            <Text>Nome</Text>
            <Text>Tipo</Text>
            <Text>Ação</Text>
          </Flex>

            
            <PokeList />

        
          </Flex>
  
        </Flex>

      </Flex>

      <Footer />

    </Flex>
  )
}
