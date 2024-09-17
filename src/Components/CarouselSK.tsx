import Carousel from 'react-bootstrap/Carousel';
import i1 from '../Assets/i01.png';
import i2 from '../Assets/i02.png';
import i3 from '../Assets/i03.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export const CarouselSK: React.FC<{}> = () => { 
    
    return <>
    
    <Carousel fade>
      <Carousel.Item>
        <img src={i1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={i2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={i3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </>




}