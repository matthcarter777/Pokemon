import { Flex, Box, Button, Input, Image } from "@chakra-ui/react";
import { Filter } from "./Filter";

export function Header() {
  
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
      
      <Button
        bg="#7E7394"
        border="2px solid #000"
        marginEnd="10"
        marginStart="5"
        borderRadius="10px"
        w="113px"
        h="42px"
      >
        Login
      </Button>
      <Box>
        COMPETI
      </Box>
    </Flex>
  )
}