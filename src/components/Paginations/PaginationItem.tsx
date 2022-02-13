import { Button, Text } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ number, onPageChange, isCurrent = false }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="#535662"
        disabled
        border="solid 2px #000"
        _disabled={{
          bgColor: '#535662',
          cursor: 'default',
        }}
      >
       { number }
      </Button>
    )
  } 

  return (
    <>
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bg="#B4ADBE"
        border="solid 2px #000"
        _hover={{
          bg: 'gray.500'
        }}
        onClick={() => onPageChange(number)}
        bor
      >
        { number }
      </Button>
    </>
  );

}