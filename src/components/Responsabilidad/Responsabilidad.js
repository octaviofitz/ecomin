import React from 'react';

import imgResponsabilidad from '../../Img/Responsabilidad/default.jpg'

import './responsabilidad.css';

function Responsabilidad() {
    return (
        <section className='responsabilidad'>
            <div className='container'>
            <div>
                <img src={imgResponsabilidad} className='img' alt='Minería sustentable' />
            </div>
           <div>
            <h4 className='titulo'><strong>ECOMIN:</strong> Líder en Minería Sustentable</h4>
            <p className='texto'>ECOMIN destaca en la industria minera por su enfoque vanguardista en prácticas sustentables. Comprometidos con la reducción de la huella ambiental, empleamos tecnologías innovadoras para una extracción eficiente y respetuosa. Nuestra responsabilidad social se refleja en proyectos comunitarios y diálogo transparente. Certificaciones internacionales respaldan nuestro compromiso. ECOMIN: extracción responsable para un futuro sostenible.</p>
            </div>
            </div>
        </section>
    );
}

export default Responsabilidad;