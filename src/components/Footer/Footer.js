import React from 'react';

import logo from '../../Img/NavBar/logo.png'

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <img src={logo} alt='Ecomin Logo' className='logo' />
            </div>
            <div className='containerUno'>
                <p className='texto'><strong>© ECOMIN</strong> Todos los derechos reservados.</p>
            </div>
            <div className='containerDos'>
            <a href='https://galide.com.ar' target='__blank'>Web desarrollada por <strong>GALIDÉ</strong></a>
                </div>
        </footer>
    );
}

export default Footer;