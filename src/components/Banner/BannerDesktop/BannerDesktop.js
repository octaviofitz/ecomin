import Carousel from 'react-bootstrap/Carousel';

import BannerPC from '../../../Img/Banner/default.png'

import './bannerDesktop.css';

function BannerDesktop() {
  return (

    <section className='BannerPC'>
      <img src={BannerPC} className='img'/>
    </section>
  );
}

export default BannerDesktop;