import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import { Flex, Text, Select } from '@chakra-ui/react';

import { Item } from "../Item";



export function CarouselComponent () {


  return (
    <Slider 
      dots={true} 
      infinite={true} 
      speed={500} 
      slidesToShow={5} 
      slidesToScroll={2}
    >
      <Item name="Teste 1" urlImage="#" />
      <Item name="Teste 2" urlImage="#" />
      <Item name="Teste 3" urlImage="#" />
      <Item name="Teste 4" urlImage="#" />
      <Item name="Teste 5" urlImage="#" />
    </Slider>
  )
}