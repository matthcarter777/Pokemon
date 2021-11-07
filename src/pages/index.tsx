import { Flex, Text, Select } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Item } from '../components/Item';
import { CarouselComponent } from '../components/Carousel';

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
            <Item name="Charmander" urlImage="https://pokeapi.co/api/v2/ability/66/"/>
          </Flex>
  
        </Flex>




      </Flex>
      <Flex
        padding="50"
        width="100%"
      >
        <CarouselComponent />
      </Flex>

      <Footer />

    </Flex>
  )
}
