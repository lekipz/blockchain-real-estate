import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';

export default function Carousel({ pictures }) {
  return (
    <ResponsiveCarousel>
      {pictures.map(url => (
        <img key={url} className={classes.image} src={url} alt={`IPFS at : ${url}`}/>
      ))}
    </ResponsiveCarousel>
  );
};
