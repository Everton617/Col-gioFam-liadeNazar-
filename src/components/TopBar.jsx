import React, { useState } from 'react';
import '../css/TopBar.css';


const TopBar = () => {
    return (
        <div className='container-topbar'>
            <div className="area_topbar">
                <div className='feature'>
                    <i class="fa-solid fa-map-location-dot"></i>
                    <a href="#footer"> Conheça a nossa unidade</a>
                </div>
                <div className='feature'>
                    <i class="fa-solid fa-graduation-cap"></i>
                    <a href="#footer"> Matículas Abertas</a>
                </div>

            </div>
            <div className="area_topbar">
                <div className='feature'>
                    <a href="https://wa.me/984293279" target='_blank'>
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>

                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ0qn0xsaDAxUFp5UCHbjLAwYQFnoECCEQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fcolegiofamiliadenazare%2F&usg=AOvVaw2tHfSgAyH6knwqHOv4T5EN&opi=89978449" target='_blank'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ0qn0xsaDAxUFp5UCHbjLAwYQFnoECBAQAQ&url=https%3A%2F%2Fwww.facebook.com%2FColegioFamiliaDeNazare%2F%3Flocale%3Dpt_BR&usg=AOvVaw3AJ1-HVbXAN-GuZfHhwh2L&opi=89978449" target='_blank'>
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                </div>
                <div className='feature'>
                    <i class="fa-regular fa-image"  style={{ marginRight: '10px' }}></i>
                    <a href="#galeria">Nossa Galeria</a>
                </div>
            </div>
        </div>
    )
}

export default TopBar;