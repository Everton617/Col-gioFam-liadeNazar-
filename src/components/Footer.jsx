import React, { useState } from 'react';
import '../css/Footer.css';
import { FaPhone } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";



const Footer = () => {


    return (
        <div className="container-footer" id='footer'>
            <div className="box-footer">
                <div className='footer-info'>
                    <h4>Sobre Nós</h4>
                    <p>Do Infantil ao Fundamental</p>
                    <div className='info'>
                        <FaPhone /> <p>Fone: (81) 98429-3279</p>
                    </div>
                    <div  className='info'>
                        <MdOutlineMail /><p>Email: juliedy.sf@gmail.com</p>
                    </div>
                    <div  className='info'>
                        <FaMapMarkerAlt /><p>Rua Dos Topografos, 29 - Imbi, Camaragibe - PE - CEP 54768-170</p>
                    </div>
                    <a href="https://wa.me/984293279" target='_blank'><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ0qn0xsaDAxUFp5UCHbjLAwYQFnoECCEQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fcolegiofamiliadenazare%2F&usg=AOvVaw2tHfSgAyH6knwqHOv4T5EN&opi=89978449" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ0qn0xsaDAxUFp5UCHbjLAwYQFnoECBAQAQ&url=https%3A%2F%2Fwww.facebook.com%2FColegioFamiliaDeNazare%2F%3Flocale%3Dpt_BR&usg=AOvVaw3AJ1-HVbXAN-GuZfHhwh2L&opi=89978449" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                </div>
                <div className="footer-map">
                <h4>VEJA ONDE ESTAMOS:</h4>
                    <a href="https://www.google.com/maps/place/Colégio+Família+de+Nazaré/@-8.0167566,-34.9947848,15z/data=!4m6!3m5!1s0x7ab1bf2e2600a75:0xea232d744d544a9f!8m2!3d-8.0167566!4d-34.9947848!16s%2Fg%2F11ftm78vd4?entry=ttu" target='_blank'>
                        <div className="box-map">
                            <p>Ver mapa Ampliado</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="area-credits">
                
                <p>Developed by <a href="https://beamish-dragon-8e8add.netlify.app">@Everton Marinho</a></p>
            </div>
        </div>
    );
}

export default Footer;