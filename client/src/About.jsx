import React from 'react'
import { Link } from 'react-router-dom'

//images
import company1 from './img/company1.png'
import company2 from './img/company2.svg'
import chair from './img/chair-only.png'
import videoBtn from './img/video-btn.png'
//components
import SliderLine from './components/SliderLine'

export default function About() {
    return (
        <section className="about">
            <div className="about-wall">
                <h2 className="about-wall-title">About Us</h2>
            </div>
            <section className="about-desc">
                <div className="wrapper">
                    <h3 className="about-desc-title underline-left">Balance in the simple through an informed marriage of design, functional and craft</h3>
                    <p className="about-desc-text">Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave literally post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art. Enamel pin vaporware wayfarers, organic succulents hella sustainable cardigan.</p>
                    <p className="about-desc-text">Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly single-origin coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral intelligentsia leggings raw denim kombucha tote bag messenger bag chambray vape coloring book scenester. Activated charcoal wayfarers church-key tote bag synth brunch. Retro cornhole</p>
                </div>
            </section>

            <section className="about-video">
                <Link to='' className="about-video-btn">
                    <img src={videoBtn} alt="video" />
                </Link>
            </section>

            <section className="details">
                <div className="wrapper">
                    <div className="details-inner">
                        <img src={chair} alt="chair" />
                        <div className="details-info">
                            <h3 className="details-title underline-left">Our Inspiration in details</h3>
                            <p className="details-subtitle">Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.</p>
                            <div className="details-values">
                                <h5 className="details-progressline">
                                    <span>
                                        Design and technical drawings
                                    </span>
                                    <span>
                                        80%
                                    </span>
                                    <span className="details-line" style={{ width: '80%' }}></span>
                                </h5>
                                <h5 className="details-progressline">
                                    <span>
                                        Measurments
                                    </span>
                                    <span>
                                        70%
                                    </span>
                                    <span className="details-line" style={{ width: '70%' }}></span>
                                </h5>
                                <h5 className="details-progressline">
                                    <span>
                                        Furniture functionality analysis
                                    </span>
                                    <span>
                                        75%
                                    </span>
                                    <span className="details-line" style={{ width: '75%' }}></span>
                                </h5>
                                <h5 className="details-progressline">
                                    <span>
                                        Interior visualization
                                    </span>
                                    <span>
                                        40%
                                    </span>
                                    <span className="details-line" style={{ width: '40%' }}></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="company">
                <img src={company1} alt="company" className="company-item" />
                <img src={company2} alt="company" className="company-item" />
                <img src={company1} alt="company" className="company-item" />
                <img src={company2} alt="company" className="company-item" />
                <img src={company1} alt="company" className="company-item" />
            </section>
            <SliderLine />
        </section>
    )
}
