import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarouselStyle.css'

export default function DemoCarousel () {
        return (
            <Carousel className="carousel">
                <div>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1251a8d5-c247-450d-aa22-e42c7f601476/dcu03e8-5e621ebb-bdd9-411c-baa1-205b1cd1caee.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTI1MWE4ZDUtYzI0Ny00NTBkLWFhMjItZTQyYzdmNjAxNDc2XC9kY3UwM2U4LTVlNjIxZWJiLWJkZDktNDExYy1iYWExLTIwNWIxY2QxY2FlZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.58FBxnqJmryhAupSYgSCsTOSHk2t2CULdpZD_es01Pk" />
                    <p className="legend">Elle est belle</p>
                </div>
                <div>
                    <img src="https://www-s.mlo.me/upco/v/tb2013/tb201301/tb20130121/18d5dba6-79d4-477d-866f-5f245a4c2cb9.jpg" />
                    <p className="legend">Elle aussi</p>
                </div>
                <div>
                    <img src="https://wallup.net/wp-content/uploads/2016/05/14/33913-anime-anime_girls-schoolgirls-748x471.jpg" />
                    <p className="legend">PUTAIN JE LAIM</p>
                </div>
            </Carousel>
        );
};