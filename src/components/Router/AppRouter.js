import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'


import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import BannerMobile from '../Banner/BannerMobile/BannerMobile';
import BannerDesktop from '../Banner/BannerDesktop/BannerDesktop';
import Industrial from '../Unidades/Industrial/Industrial';
import Mascotas from '../Unidades/Mascotas/Mascotas';
import Sanidad from '../Unidades/Sanidad/Sanidad';
import Pages from '../Pages/Pages';

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <main>
            <BannerMobile />
            <BannerDesktop />
            <Routes>

            <Route path='/' element={<Pages />} />
            <Route path='/industrial' element={<Industrial />} />
            <Route path='/mascotas' element={<Mascotas />} />
            <Route path='/sanidad' element={<Sanidad />} />

            </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;