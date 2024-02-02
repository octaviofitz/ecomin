import React from 'react';

import imgMascotas from '../../../Img/Unidades/Industrial/mascotas.jpeg'
import KittySan from '../../../Img/Unidades/Mascotas/KittySan.webp'
import DosGatos from '../../../Img/Unidades/Mascotas/DosGatos.webp'
import Roquitas from '../../../Img/Unidades/Mascotas/Roquitas.webp'


import './mascotas.css';
import { NavLink } from 'react-bootstrap';

function Mascotas() {
    return (
        <section className='mascotas'>
            <div className='container'>
                <div>
                    <img src={imgMascotas} alt='Mascotas' className='img' />
                </div>
                <div>
                    {/* <h4 className='titulo'>MASCOTAS</h4> */}
                    <p className='texto'>ECOMIN, líder en minería, se enorgullece de presentar sus piedras sanitarias para gatos, fabricadas con minerales naturales premium para un control efectivo del olor y una experiencia suave para las patas felinas. Priorizando la sostenibilidad, nuestras piedras también son respetuosas con el medio ambiente, reflejando el compromiso de ECOMIN con productos innovadores que cuidan tanto de las mascotas como del planeta.</p>
                    <div className='botones'>
                    <NavLink href='#kittySan'><button className='boton'>KITTY SAN</button></NavLink>
                    <NavLink href='#dosGatos'><button className='boton'>DOS GATOS</button></NavLink>
                    <NavLink href='#roquitas'><button className='boton'>ROQUITAS</button></NavLink>
                    </div>
                </div>
            </div>

            <article className='productos' id='kittySan'>
                <div>
                <img className='img' src={KittySan} alt='Producto Kitty San' />
                </div>
                <div>
                <h5 className='titulo'>KITTY SAN</h5>
                <p className='texto'>Kitty San es un producto mineral natural compuesto por granos seleccionados de diatomita de gran pureza y calidad, extraídos y procesados de forma sustentable en la Patagonia Argentina.</p>
                <p className='texto'> A diferencia de sanitarios minerales aglomerantes y de aquellos de origen orgánico o químico, la microporosidad natural de la diatomita no solo absorbe poderosamente la orina sino que encapsula de forma segura los compuestos volátiles responsables del mal olor y los neutraliza por 30 días.</p>
                <p className='texto'> Por ello Kitty San le permite conservar la frescura de su hogar y le ofrece a su mascota un cuidado higiénico, seguro y natural.</p>
                <p className='texto'> El bajo contenido de polvo y humedad controlada de Kitty San lo hacen un producto super liviano, de mayor rendimiento y calidad superior.</p>
                </div>
                
            </article>

            <article className='productos' id='dosGatos'>
                <div>
                <img className='img' src={DosGatos} alt='Producto Dos Gatos' />
                </div>
                
                <div>
                <h5 className='titulo'>DOS GATOS</h5>
                <p className='texto'>Mineral natural (Diatomita) no tóxico de primera calidad con gran capacidad de absorción

Elimina olores

Presentación: 2 y 4 kg

Recomendación de uso:

- Aplicar una capa de 5 cm

- Extenderla sobre la bandeja sanitaria

- Retirar los residuos sólidos con la palita

</p>
                </div>
                
            </article>

            <article className='productos' id='roquitas'>
                <div>
                <img className='img' src={Roquitas} alt='Producto Roquitas' />
                </div>
                <div>
                <h5 className='titulo'>ROQUITAS</h5>
                <p className='texto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. m quam semper libero, sit amet</p>
                </div>
                
            </article>
        </section>
    );
}

export default Mascotas;