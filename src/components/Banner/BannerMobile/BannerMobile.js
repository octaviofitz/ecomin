import Carousel from 'react-bootstrap/Carousel';

import BannerMobile1 from '../../../Img/Banner/bannerMobile.png'

import './bannerMobile.css';

function BannerMobile() {
  return (
   /*  <Carousel className='banner'>

      <Carousel.Item>
        <img src={BannerMobile} text="First slide" className='img' id='mobile' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={ExampleCarouselImage} text="Second slide"  className='img' id='desktop' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel> */
    <section className='bannerCel'>
      <img src={BannerMobile1} className='img'/>
    </section>
  );
}

export default BannerMobile;