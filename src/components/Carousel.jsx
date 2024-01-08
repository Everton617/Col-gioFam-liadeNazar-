import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from "../assets/img/banner1.png"
import banner2 from "../assets/img/banner2.png"
import banner3 from "../assets/img/banner3.png"
import banner4 from "../assets/img/banner4.png"
import '../css/Carrosel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Carrosel = () => {
 

  return (
    <div id='container-carousel'>

    <div className="container-img-md">
      <a className='fixed-link' href="">Matricule-já!</a>
      <img src={banner4} className='img-fluid' alt="" />
    </div>

       <div className='box-carousel'>
        <Carousel indicators={false} interval={2000} >
          <Carousel.Item>
            <div className='carousel-area'>
            <a className='fixed-link' href="">Matricule-se já!</a>
              <img
                className="d-block w-100 img-fluid"
                src={banner1}
                alt="Primeiro slide" 
              />
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className=''>
              <img
                className="d-block w-100 img-fluid"
                src={banner2}
                alt="Segundo slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=''>
              <img
                className="d-block w-100 img-fluid"
                src={banner3}
                alt="Terceiro slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    
    </div>
  );
};

export default Carrosel;