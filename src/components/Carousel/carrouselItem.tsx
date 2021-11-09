import { Flex, Text, Image, Button, Icon  } from '@chakra-ui/react';

import { RiEyeFill, RiAddLine } from "react-icons/ri";


type ItemProps = {
  name: string;
  urlImage: string;
  level: string;
}

export function CarrouselItem({ name, urlImage, level }: ItemProps) {

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
              marginTop="-20px"
              marginStart="50px"
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
              flexDirection="row"
            >
              <Flex
                marginTop="-10"
                bg="#F25D52"
                w="52px"
                h="30px"
                alignItems="center"
                justifyContent="center"
                borderRadius="5px"
              >
                Fire
              </Flex>

              <Text fontSize="15px" marginTop="15px" marginStart="-40px">
                {name}
              </Text>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </>
  )
}