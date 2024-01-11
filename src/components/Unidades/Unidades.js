import React from 'react';

import Mascotas from '../../Img/Unidades/Industrial/mascotas.jpeg'
import Sanidad from '../../Img/Unidades/Industrial/sanidad.jpg'
import Industrial from '../../Img/Unidades/Industrial/industrial.jpg'

import './unidades.css';
import { Link } from 'react-router-dom';

function Unidades() {
    return (
        <section className='unidades' id='negocio'>
            <h2 className='titulo'>Unidades de negocio</h2>

            <div className='container'>
 
            <article className='cards'>
            <Link to='mascotas'>
                <img src={Mascotas} alt='Unidad Mascotas' className='img' />
              <p className='unidad'>MASCOTAS</p>
              </Link>
            </article>

            <article className='cards'>
                <Link to='sanidad'>
                <img src={Sanidad} alt='Sanidad Animal' className='img' />
                <p className='unidad'>SANIDAD ANIMAL</p>
                </Link>
             </article>

                <article className='cards'>
                    <Link to='industrial'>
                    <img src={Industrial} alt='Unidad industrial' className='img' />
                    <p className='unidad'>INDUSTRIAL</p>
                    </Link>
                        </article>
                        </div>
        </section>
    );
}

export default Unidades;