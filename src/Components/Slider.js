import React, { Component } from 'react';
import Slider from "react-slick";
import Slide1 from "../Assets/helm.png"
import Slide2 from "../Assets/slidetwo.png"

export default class Imgslider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <div className='container'>
                <Slider className='slider' {...settings}>
                    <div>
                        <img src={Slide1} alt='' />
                    </div>
                    <div>
                        <img src={Slide2} alt='' />
                    </div>
                    <div>
                        <img src={Slide1} alt='' />
                    </div>

                </Slider>
            </div>
        );
    }
}