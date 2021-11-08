import { Flex, Box, Button, Text, Image } from "@chakra-ui/react";
import { Filter } from "./Filter";

import { useAuth } from '../../hooks/useLogin';

export function Header() {

  const isLogger = false;

  const { openModal } = useAuth();
  
  return (
    <Flex
      as="header"
      w="100%"
      h="86px"
      mx="auto"
      px="6"
      align="center"
      justifyContent="center"
      bg="#524153"
    >
      <Image
        w="149.08px"
        h="53.08px" 
        src="https://github.com/FernandoRidam/pokemon/blob/master/src/assets/logo.png?raw=true" alt="logo" />
      <Filter />
      
      { isLogger ? 
        <Text as="a" href="/cart" margin="20px">
          Mateus
        </Text>
        : 
        <Button
        bg="#7E7394"
        border="2px solid #000"
        marginEnd="10"
        marginStart="5"
        borderRadius="10px"
        w="113px"
        h="42px"
        onClick={() => openModal()}
        >
        Login
        </Button> 
      }

      <Box>
        COMPETI
      </Box>
    </Flex>
  )
}