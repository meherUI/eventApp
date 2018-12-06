import React, { Component } from 'react';
import Slider from "react-slick";
import i1 from '../../resources/images/slide_one.jpg';
import i2 from '../../resources/images/slide_two.jpg';
import i3 from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true
    }
    return ( 
        <div className="carrousel_wrapper"
             style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
             }}>
        <Slider {...settings}>
        <div>
          <div className="carrousel_image"
                style={{
                    background:`url(${i1})`,
                    height:`${window.innerHeight}px`,
                }}
          ></div>
          
        </div>
        <div>
        <div className="carrousel_image"
                style={{
                    background:`url(${i2})`,
                    height:`${window.innerHeight}px`,
                }}
          ></div>
        </div>
        <div>
        <div className="carrousel_image"
                style={{
                    background:`url(${i3})`,
                    height:`${window.innerHeight}px`,
                }}
          ></div>
        </div>
        
      
        
      
      </Slider>
      </div>
     );
}
 
export default Carousel;