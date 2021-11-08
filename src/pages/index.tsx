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
  Input
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Item } from '../components/Item';
import { CarouselComponent } from '../components/Carousel';
import { useAuth } from '../hooks/useLogin';

export default function Home() {
  const cancelRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const { openModal, isOpen, closeModal } = useAuth();


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
            h="30%"
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
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

            </Flex>

          </Flex>
          
          <Flex
            padding="50"
          >
            <Item name="Charmander" urlImage="https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png"/>
          </Flex>
  
        </Flex>




      </Flex>
      <Flex
        padding="50"
        width="100%"
      >

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
                color="#7E7394"
                _placeholder={{
                  color:"#7E7394;" 
                }}
              />
              <Input  
                type="password" 
                placeholder="Senha"  
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
                  console.log('login')
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
