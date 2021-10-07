import { Flex, Text, Image } from '@chakra-ui/react';


export function Item() {

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
        >
          <Flex>

            <Flex
              marginTop="-10px"
              bg="#535662"
              w="46.69px"
              h="48.35px"
              border="2px solid #100B16"
              transform="rotate(-43deg)"
              alignItem="center"
              justifyContent="center"
              marginEnd="130px"
              borderRadius="10px"
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
              src="https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png"
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
                Charmander
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}