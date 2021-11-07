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
  Select 
} from "@chakra-ui/react";
import { RiEyeLine, RiDeleteBin5Line } from "react-icons/ri";

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export default function Home() {
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
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>Foto</Th>
                  <Th>Nome</Th>
                  <Th>Tipo</Th>
                  <Th width="8">Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg="#fff">
                  <Td>
                      <Box>
                          <Text fontWeight="bold">TESTE</Text>
                      </Box>
                  </Td>
                  <Td>
                      <Box>
                          <Text fontWeight="bold">TESTE</Text>
                      </Box>
                  </Td>
                  <Td>
                      <Box>
                          <Text fontWeight="bold">TESTE</Text>
                      </Box>
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
                              <Icon as={RiEyeLine} fontSize="30" />
                            </Button>
                            <Button
                              as="a"
                              size="sm"
                              h="50px"
                              w="50px"
                              borderRadius="50%"
                              colorScheme="red"
                            >
                              <Icon as={RiDeleteBin5Line} fontSize="30" />
                            </Button>
                        </Flex>
                      </Box>
                  </Td>
                </Tr>
              </Tbody>
            
            </Table> 
        
          </Flex>
  
        </Flex>

      </Flex>

      <Footer />

    </Flex>
  )
}
