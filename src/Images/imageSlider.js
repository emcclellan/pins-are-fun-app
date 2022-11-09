import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
//import "./style.css"
import './../assets/css/style.css'  
import React from 'react'

const ImageSlider = ({images}) => {
    const settings = {
        Infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="mainContainer">
            <div className="tag"><h2>Image Gallery</h2></div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} className="carouselImage"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default ImageSlider;
