import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
//images
import icon1 from '../img/sliderImg1.png'
import icon2 from '../img/sliderImg2.png'
import icon3 from '../img/sliderImg3.png'
import icon4 from '../img/sliderImg4.png'
import icon5 from '../img/sliderImg5.png'

export default function SliderLine() {
    const SliderSettings = {
        slidesToShow:5,
            infinite:true,
            autoplay:true,
            slidesToScroll:5,
            swipe:false,
            arrows:false,
            speed:3000,
            autoplaySpeed:10000
    }
    return (
        <Slider {...SliderSettings} className="slider-line">
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon1})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon2})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon3})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon4})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon5})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon1})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon2})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon3})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon4})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
            <Link className="slider-line-item" to={''}>
                <div className="slider-line-outer" style={{ backgroundImage: `url(${icon5})` }}>
                    <div className="slider-line-inner">
                        <h5 className="slider-line-title underline-center">Truffaut literally trust</h5>
                        <p className="slider-line-subtitle">Living room furntiture | Chair</p>
                    </div>
                </div>
            </Link>
        </Slider>
    )
}
