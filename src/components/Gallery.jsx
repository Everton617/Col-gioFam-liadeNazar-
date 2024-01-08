import React, { useState } from 'react';
import '../css/Gallery.css';
import img1 from '../assets/img/galeria/galeria1.jpg'
import img2 from '../assets/img/galeria/galeria2.jpg'
import img3 from '../assets/img/galeria/galeria3.jpg'
import img4 from '../assets/img/galeria/galeria4.jpg'
import img5 from '../assets/img/galeria/galeria5.jpg'
import img6 from '../assets/img/galeria/galeria6.jpg'
import img7 from '../assets/img/galeria/galeria7.jpg'
import img8 from '../assets/img/galeria/galeria8.jpg'
import img9 from '../assets/img/galeria/galeria9.jpg'


const Gallery = () => {


  return (
    <div className='area-gallery' id='galeria'>
      <h1>Nossa Galeria de Imagens</h1>
      <div className="container-gallery">
      
         <div className="box-gallery">
              <img src={img1} alt="" className="img-galeria img-fluid" />
              <img src={img2} alt="" className="img-galeria img-fluid" />
              <img src={img3} alt="" className="img-galeria img-fluid" />
              <img src={img4} alt="" className="img-galeria img-fluid" />
              <img src={img5} alt="" className="img-galeria img-fluid" />
              <img src={img6} alt="" className="img-galeria img-fluid" />
              <img src={img7} alt="" className="img-galeria img-fluid" />
              <img src={img8} alt="" className="img-galeria img-fluid" />
              <img src={img9} alt="" className="img-galeria img-fluid" />
         </div>
      </div>
    </div>
  );
}

export default Gallery;