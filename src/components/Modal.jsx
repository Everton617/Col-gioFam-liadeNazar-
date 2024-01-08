import React, { useState } from 'react';
import '../css/Modal.css';

import kid1 from '../assets/img/kid2.png'
import kid2 from '../assets/img/img3.png'

const Modal = () => {


  return (
    <div className="container-modal" id='segmentos'>
            <h1>Segmentos do Colégio  Família de Nazaré</h1>
        <div className="box-modal">

            <div className="area-modal">
                <img className='img-fluid' src={kid1} alt="" />
                <h3>Ensino Infantil</h3>
                <p>Nossas salas de aula são mais do que espaços de ensino; são ambientes acolhedores e estimulantes que nutrem a imaginação e incentivam a expressão criativa. </p>
            </div>
            
            <div className="area-modal">
                <img className='img-fluid' src={kid2} alt="" />
                <h3>Ensino Fundamental - Anos Iniciais</h3>
                <p>No Ensino Fundamental, não apenas transmitimos conhecimentos, mas cultivamos habilidades que preparam nossos alunos para enfrentar os desafios do futuro. </p>
            </div>

        </div>
    </div>
  );
}

export default Modal;