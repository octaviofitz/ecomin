import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Nosotros from '../Nosotros/Nosotros';

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <main>
            <Banner />
            <Nosotros />
            <Contact />
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;