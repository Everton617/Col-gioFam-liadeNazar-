import React, { useState } from 'react';
import '../css/Values.css';
import img1 from '../assets/img/missao.png'
import img2 from '../assets/img/visao.png'
import img3 from '../assets/img/valores.png'

const Values = () => {


  return (
    <div className="container-valores"  id='principios'>
       <h1>Nossos Princípios</h1>
        <div className="box-valores">

            <div className="area-valores">
                <img className='img-fluid' src={img1} alt="" />
                <div className='text-valores'>
                  <h3>Missão</h3>
                  <p>Comprometemo-nos a criar um ambiente onde a fé se entrelaça organicamente com a educação acadêmica.</p>
                </div>
            </div>

            <div className="area-valores">
                <img src={img2} alt="" />
                <div className='text-valores'>
                  <h3>Visão</h3>
                  <p>Uma escola que vai além de ser um mero local de ensino. Visualizamos um ambiente educacional dinâmico e inclusivo, onde cada aluno é encorajado a explorar seu potencial único. </p>
                </div>
            </div>
              
            <div className="area-valores">
                <img src={img3}  alt="" />
                <div className='text-valores'>
                  <h3>Valores</h3>
                  <p>- Responsabilidade Social. <br />
                     - Cidadania Ativa     <br />
                     - Inovação Pedagógica      <br />
                     - Cultura de Respeito e Cooperação
                   </p>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Values;