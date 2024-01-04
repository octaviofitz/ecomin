import React from 'react';

import Mascotas from '../../Img/Unidades/Industrial/mascotas.jpeg'
import Sanidad from '../../Img/Unidades/Industrial/sanidad.jpg'
import Industrial from '../../Img/Unidades/Industrial/industrial.jpg'

import './unidades.css';

function Unidades() {
    return (
        <section className='unidades'>
            <h2 className='titulo'>Unidades de negocio</h2>


            <div className='container'>
            <article className='cards'>
                <img src={Mascotas} alt='Unidad Mascotas' className='img' />
              <p className='unidad'>MASCOTAS</p>
            </article>

            <article className='cards'>
                <img src={Sanidad} alt='Sanidad Animal' className='img' />
                <p className='unidad'>SANIDAD ANIMAL</p>
             </article>

                <article className='cards'>
                    <img src={Industrial} alt='Unidad industrial' className='img' />
                    <p className='unidad'>INDUSTRIAL</p>
                        </article>
                        </div>
        </section>
    );
}

export default Unidades;