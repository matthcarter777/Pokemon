/* eslint-disable react-hooks/exhaustive-deps */
import { 
  Flex, 
  Text, 
  Select,
  Button,   
  AlertDialog ,
  AlertDialogBody ,
  AlertDialogFooter ,
  AlertDialogHeader ,
  AlertDialogContent ,
  AlertDialogOverlay ,
  Input,
  Box
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Item } from '../components/Item';
import { useAuth } from '../hooks/useLogin';
import { getTypes } from '../services/types';
import { getPokemon } from '../services/pokemon';
import { Pagination } from '../components/Paginations';


type Type = {
  name: string;
  url: string;
}

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

export default function Home() {
  const cancelRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [types, setTypes] = useState<Type[]>([] as Type[]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([] as Pokemon[]);
  const [page, setPage] = useState(1); 
  
  const { openModal, isOpen, closeModal, login, loggedIn } = useAuth();

  useEffect(() => {
    getUser();
    getTypes();

    getData();
  }, []);

  async function getData() {
    const typesByApi = await getTypes();

    const pokemons = await getPokemon(1, 6);

    setTypes(typesByApi);
    setPokemon(pokemons);
  }

  async function getUser() {
    await loggedIn()
  }
 
  async function loginForm() {
    await login({ user, password });
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
            h="20%"
            borderBottom="1px solid #707070"
          >
            
            <Flex
              marginTop="10"
              marginStart="20"
              direction="column"
            >

              <Text color="#535662">
                Filter
              </Text>
              
              <Select 
                w="204px"
                h="45px"
                placeholder="Fire"
                color="#535662"
                bg="#fff"
              >
                { types.map(type => {
                  return (
                    <option key={type.name} value={type.name}>{ type.name }</option>
                  )
                }) }
              </Select>

            </Flex>

          </Flex>
          
          <Flex
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
          >

            { pokemon.map(pokemon => {
              return (
                <Item key={pokemon.id} pokemon={pokemon}/>
              )
            }) }

          </Flex>

          <Flex
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            padding="30px"
          >
            <Pagination 
              totalCountOfRegisters={6}
              currentPage={3}
              onPageChange={setPage}
            />
          </Flex>

        </Flex>
      </Flex>

      <Footer />


      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeModal}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            bgColor="#D4C3A3;"
          >
            <AlertDialogHeader 
              fontSize="lg" 
              fontWeight="bold" 
             >
              LOGIN - COMPETI
            </AlertDialogHeader>

            <AlertDialogBody>
              <Input  
                type="text" 
                placeholder="Usuarios" 
                marginBottom="10px"
                value={user}
                onChange={event => setUser(event.target.value) }
                color="#7E7394"
                _placeholder={{
                  color:"#7E7394;" 
                }}
              />
              <Input  
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={event => setPassword(event.target.value) }  
                color="#7E7394"
                _placeholder={{
                  color:"#7E7394;" 
                }}
              />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button color="#535662;" ref={cancelRef} onClick={closeModal}>
                Cancelar
              </Button>
              <Button 
                colorScheme="#3AA05B;" 
                onClick={() => 
                  loginForm()
                } 
                ml={3}>
                Entrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>



    </Flex>
  )
}
