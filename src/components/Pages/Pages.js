import React from 'react';
import Nosotros from '../Nosotros/Nosotros';
import Unidades from '../Unidades/Unidades';
import Responsabilidad from '../Responsabilidad/Responsabilidad';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';

function Pages() {
    return (
        <div>
            <Nosotros />
            <Unidades />
            <Responsabilidad />
            <Contact />
            <Map />
        </div>
    );
}

export default Pages;