import React from 'react';

import logo from '../../Img/NavBar/logo.png'

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <img src={logo} alt='Ecomin Logo' className='logo' />
            </div>
            <div>
                <p className='texto'><strong>© ECOMIN</strong> Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;