import React from 'react';
import Slider from 'react-slick';

import banner1 from "../../../assets/images/banner/banner-slider-1.jpeg";
import banner2 from "../../../assets/images/banner/banner-slider-2.jpeg";

function HeroSlider(props) {

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
    };

    return (
        <Slider {...sliderSettings}>
            <div>
                <img className="w-full h-[500px] object-cover" src={banner1} alt="banner1"/>
            </div>
            <div>
                <img className="w-full h-[500px] object-cover" src={banner2} alt="banner2"/>
            </div>
        </Slider>
    );
}

export default HeroSlider;