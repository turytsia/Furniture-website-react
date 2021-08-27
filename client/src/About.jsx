import React from 'react'

//images
import company1 from './img/company1.png'
import company2 from './img/company2.svg'

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
