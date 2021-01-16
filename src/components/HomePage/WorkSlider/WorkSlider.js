import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import work1 from "../../../images/carousel-1.png";
import work2 from "../../../images/carousel-2.png";
import work3 from "../../../images/carousel-3.png";
import work4 from "../../../images/carousel-4.png";
const WorkSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1240 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Carousel responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={4000}
            >
            <img src={work1} alt=""/>
            <img src={work2} alt=""/>
            <img src={work3} alt=""/>
            <img src={work4} alt=""/>
            </Carousel>;

        </div>
    );
};

export default WorkSlider;