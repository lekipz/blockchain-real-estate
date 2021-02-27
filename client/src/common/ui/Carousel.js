import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';

export default function Carousel({ pictures }) {
  return (
    <Carousel className={classes.carousel}>
      {pictures.map(({ url, legend }) => (
        <div>
          <img className={classes.carouselImg} src={url} alt={legend}/>
          <p>{legend}</p>
        </div>
      ))}
    </Carousel>
  );
};
