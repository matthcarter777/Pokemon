import { Flex, Text, Image, Button, Icon  } from '@chakra-ui/react';

import { RiEyeFill, RiAddLine } from "react-icons/ri";


type ItemProps = {
  name: string;
  urlImage: string;
}

export function Item({ name, urlImage }: ItemProps) {

  return (
    <>
      <Flex
        h="245px"
        w="245px"
      >
        <Flex
          bg="#aba6b6"
          border="2px solid #100B16"
          direction="column"
          w="250px"
          _hover={{
            filter: "brightness(0.7)"
          }}
        >
          <Flex>

            <Flex
              marginTop="-10px"
              marginStart="-24px"
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
                4
              </Text>
            </Flex>

            <Flex
              marginTop="-4"
              bg="#F25D52"
              w="52px"
              h="30px"
              alignItems="center"
              justifyContent="center"
              borderRadius="5px"
            >
              Fire
            </Flex>

          </Flex>

          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              w="200px"
              h="160px" 
              src={urlImage}
              alt="Pockemon"
            />


          </Flex>
          
          <Flex
            w="100%"
            justifyContent="center"
          >
            <Flex
              bg="#7E7394"
              w="147px"
              h="57px"
              marginBottom="-30px"
              alignItems="center"
              justifyContent="center"
              border="2px solid #100B16"
              borderRadius="15px"
            >
              <Text fontSize="20px">
                {name}
              </Text>
            </Flex>

          </Flex>

          <Flex
            h="245px"
            w="245px"
            position="absolute"
            alignItems="center"
            justifyContent="center"

          >
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
              colorScheme=" #3AA05B;"
              marginEnd="15px"
            >
              <Icon as={RiAddLine} fontSize="30" />
            </Button>
    
          </Flex>
        </Flex>


      </Flex>
    </>
  )
}