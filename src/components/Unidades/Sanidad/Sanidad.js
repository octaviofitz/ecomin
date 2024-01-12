import React from 'react';

import Diactosec from '../../../Img/Unidades/Industrial/sanidad.jpg'

import './sanidad.css';

function Sanidad() {
    return (
        <section className='sanidad'>
            <div className='container'>
                <img src={Diactosec} alt='Absorbente industrial' className='img' />
                <h5 className='titulo'>Diatosec</h5>
                <p className='texto'>La industria minera ha dado un paso significativo hacia la contribución a la salud animal con la creación de un producto revolucionario conocido como Diatosec. Este compuesto, fabricado por empresas mineras especializadas, ha captado la atención de la comunidad veterinaria por sus propiedades únicas y beneficios para la sanidad animal.</p>
                <p className='texto'>Diatosec se elabora a partir de diatomeas, microorganismos unicelulares fosilizados que se extraen de yacimientos minerales. Estos microorganismos, ricos en nutrientes y minerales esenciales, se someten a un proceso de refinamiento avanzado para obtener un producto final altamente efectivo. La pureza de Diatosec lo convierte en una opción prometedora para mejorar la salud y el bienestar de los animales.</p>
                <p className='texto'>El uso de Diatosec en la alimentación animal ha demostrado beneficios notables. Su alta concentración de minerales fortalece el sistema inmunológico de los animales, promueve la salud ósea y contribuye al desarrollo de un pelaje saludable. Además, su capacidad para controlar parásitos internos en el tracto digestivo de los animales ha generado un interés particular en la prevención de enfermedades comunes en la ganadería.</p>
                <p className='texto'>La fabricación de Diatosec no solo destaca por sus beneficios para la salud animal, sino también por su enfoque sostenible. Las empresas mineras responsables están comprometidas con prácticas ambientalmente amigables y éticas. La extracción de diatomeas se realiza de manera selectiva y sostenible, minimizando el impacto ambiental y garantizando la preservación de los ecosistemas circundantes.</p>
                <p className='texto'>Diatosec representa un emocionante avance en la intersección entre la minería y la sanidad animal. A medida que se continúa investigando y desarrollando nuevos productos derivados de minerales para mejorar la salud de los animales, es probable que este campo experimente un crecimiento significativo. La colaboración entre la industria minera y la salud animal promete una contribución valiosa al bienestar global de los animales, al tiempo que fomenta prácticas sostenibles y socialmente responsables.</p>
                </div>
        </section>
    );
}

export default Sanidad;