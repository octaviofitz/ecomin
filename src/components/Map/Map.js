import React from 'react';

import './map.css';

function Map() {
    return (
        <section className='mapContainer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.1381834363765!2d-69.54593530518832!3d-41.32911093522874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96045361862f8e1d%3A0xa44c955556b3277f!2sEcomin%20SRL!5e0!3m2!1ses-419!2sar!4v1703732783466!5m2!1ses-419!2sar" className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
}

export default Map;