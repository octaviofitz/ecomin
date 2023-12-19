import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../Img/Banner/default.jpg';

import './banner.css';

function Banner() {
  return (
    <Carousel className='banner'>

      <Carousel.Item>
        <img src={ExampleCarouselImage} text="First slide" className='img' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={ExampleCarouselImage} text="Second slide"  className='img' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={ExampleCarouselImage} text="Third slide"  className='img' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;