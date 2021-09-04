import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//images
import instagram from './img/instagram.svg'
import facebook from './img/facebook.svg'
import pinterest from './img/Pinterest.svg'
import whatsapp from './img/whatsapp.svg'
import youtube from './img/youtube.svg'
import envelope from './img/envelope.svg'
//components
import SliderLine from './components/SliderLine'
//http
import http from './services.js'
export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    async function addCustomer(e) {
        e.preventDefault()
        try {
            if (!name || !email || !message)
                throw new Error('Please enter all the fields')
            const { data } = await http.post('/customer', { name, email, message })
            if (!data.success) throw new Error(data.message)
            setErrorMessage('Contact was sent')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            setErrorMessage(err.message)
        }

    }
    return (
        <section className="contact">
            <iframe title="map" className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20502.990474487673!2d14.481034989952105!3d50.03246034983804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b923122a80c53%3A0x84a94840a752db88!2sChodov%2C%20Prague%2011!5e0!3m2!1sen!2scz!4v1630172213666!5m2!1sen!2scz" width="600" height="450" Style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            <div className="wrapper">
                <div className="contact-content">
                    <h3 className="underline-left">Contact Us</h3>
                    <div className="contact-content-inner">
                        <div className="contact-content-socials">
                            <Link to={''}><img src={instagram} alt="socials" /></Link>
                            <Link to={''}><img src={facebook} alt="socials" /></Link>
                            <Link to={''}><img src={pinterest} alt="socials" /></Link>
                            <Link to={''}><img src={whatsapp} alt="socials" /></Link>
                            <Link to={''}><img src={youtube} alt="socials" /></Link>
                        </div>
                        <p>
                            Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock
                        </p>
                        <span>(415) 829-7934</span>
                        <span>725 Green St</span>
                        <span>San Francisco, California(CA), 94133</span>
                        <div className="contact-content-email">
                            <img src={envelope} alt="icon" />
                            <Link to={''}>ouremailaddress@email.com</Link>
                        </div>
                        <form onSubmit={(e) => addCustomer(e)} className="contact-content-form">
                            <div className="contact-content-form-inner">
                                <input placeholder="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                <input placeholder="Your e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button type="submit">Send</button>
                            {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
                        </form>
                    </div>
                </div>
            </div>
            <SliderLine />
        </section>
    )
}
