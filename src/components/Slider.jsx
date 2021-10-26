import React from 'react'
import {Carousel} from "react-bootstrap"
import {images} from "../data/silider-imgaes"
function Slider() {
 return (
 <Carousel>
  {images.map((img,i)=>{
   return(
    <Carousel.Item key={i} interval={3000}>
    <img
      className="d-block w-100"
      src={img}
      alt="Slide image"
    />
  </Carousel.Item>
   )
  })}
 </Carousel>
 )
}

export default Slider
