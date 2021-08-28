import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

//images
import chair from './img/chair.png'
import aesthetic from './img/aesthetic.png'
import measure from './img/measure.png'
import tools from './img/tools.svg'
import sofa from './img/sofa.svg'

import blogItem1 from './img/blogItem1.png'
import blogItem2 from './img/blogItem2.png'
//components
import SliderLine from './components/SliderLine'
import Gallery from './Gallery'

export default function Home() {


    const SliderSettings = {
        dots: true,
        slidesToShow: 1,
        fade: true,
        arrows: false
    }

    return (
        <section className="home">
            <Slider {...SliderSettings} className="home-slider">
                <div className="home-slider-item">
                    <div className="home-slider-inner wrapper">
                        <img src={chair} alt="chair" />
                        <div className="home-slider-text">
                            <h1 className="home-slider-title underline-left">
                                Furniture collection
                            </h1>
                            <p className="home-slider-subtitle">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-slider-item">
                    <div className="home-slider-inner wrapper">
                        <img src={chair} alt="chair" />
                        <div className="home-slider-text">
                            <h1 className="home-slider-title underline-left">
                                Furniture collection
                            </h1>
                            <p className="home-slider-subtitle">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-slider-item">
                    <div className="home-slider-inner wrapper">
                        <img src={chair} alt="chair" />
                        <div className="home-slider-text">
                            <h1 className="home-slider-title underline-left">
                                Furniture collection
                            </h1>
                            <p className="home-slider-subtitle">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <section className="collection">
                <h3 className="collection-title underline-center">Furniture new collection</h3>
                <p className="collection-subtitle">
                    Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                </p>
                <SliderLine />
            </section>

            <section className="aesthetic" style={{ backgroundImage: `url(${aesthetic})` }}>
                <div className="aesthetic-outer">
                    <div className="wrapper">
                        <div className="aesthetic-inner">
                            <h2 className="aesthetic-title underline-left">Aesthetic ethical drinking</h2>
                            <p className="aesthetic-subtitle">Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="progress">
                <div className="wrapper">
                    <div className="progress-inner">
                        <div className="progress-item">
                            <div className="progress-title">
                                <img src={tools} alt="tools" />
                                <h5>Designer Consultation</h5>
                            </div>
                            <p className="progress-subtitle">
                                Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                            </p>
                        </div>
                        <div className="progress-item">
                            <div className="progress-title">
                                <img src={sofa} alt="sofa" />
                                <h5>Production</h5>
                            </div>
                            <p className="progress-subtitle">
                                Everyday carry actually neutra authentic kogi shabby chic
                            </p>
                        </div>
                        <div className="progress-item">
                            <div className="progress-title">
                                <img src={measure} alt="measure" />
                                <h5>Measurements</h5>
                            </div>
                            <p className="progress-subtitle">
                                Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery/>

            <section className="inspiration">
                <h3 className="inspiration-title">More inspiration ideas in our blog</h3>
                <div className="wrapper">
                    <div className="inspiration-content">
                        <div className="blog-item">
                            <img src={blogItem1} alt="blog" />
                            <div className="blog-info">
                                <span className="blog-date">March 12, 2020</span>
                                <span> | by </span>
                                <Link to={''} className="blog-author">Ann Summers</Link>
                                <span> | </span>
                                <Link to={''} className="blog-category">Inrerior</Link>
                            </div>
                            <Link to={''}>
                                <h4>Listicle actually selvage activated charcoal for the drinking vinegar </h4>
                            </Link>
                        </div>
                        <div className="blog-item">
                            <img src={blogItem2} alt="blog" />
                            <div className="blog-info">
                                <span className="blog-date">March 12, 2020</span>
                                <span> | by </span>
                                <Link to={''} className="blog-author">Ann Summers</Link>
                                <span> | </span>
                                <Link to={''} className="blog-category">Inrerior</Link>
                            </div>
                            <Link to={''}>
                                <h4>Red selfies edison bulb four dollar toast humblebrag </h4>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}
