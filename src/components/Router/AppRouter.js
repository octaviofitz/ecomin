import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Nosotros from '../Nosotros/Nosotros';
import Map from '../Map/Map';
import Unidades from '../Unidades/Unidades';
import Responsabilidad from '../Responsabilidad/Responsabilidad';

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <main>
            <Banner />
            <Nosotros />
            <Unidades />
            <Responsabilidad />
            <Contact />
            <Map />
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;