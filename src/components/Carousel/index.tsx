import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'react-slick';

import { Item } from "../Item";
import { CarrouselItem } from "./carrouselItem";

export function CarouselComponent () {

  return (
    <Slider 
      dots={true} 
      infinite={true} 
      speed={500} 
      slidesToShow={1} 
      slidesToScroll={1}
    >
      <CarrouselItem name="Teste" urlImage="https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png" level="4" />
    </Slider>
  )
}