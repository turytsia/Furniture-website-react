import React from 'react'
import { Link } from 'react-router-dom'
//images
import envelope from '../img/envelope.svg'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import pinterest from '../img/Pinterest.svg'
import whatsapp from '../img/whatsapp.svg'
import youtube from '../img/youtube.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-inner">
                    <div className="footer-list">
                        <h5 className="footer-list-title">Contact Us</h5>
                        <p>Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy</p>
                        <div className="footer-list-email">
                            <img src={envelope} alt="envelope" />
                            <Link to={''}>ouremailaddress@email.com</Link>
                        </div>
                        <div className="footer-list-input">
                            <input type="text" placeholder="Subscribe by email" />
                            <button>Send</button>
                        </div>
                    </div>
                    <div className="footer-list">
                        <Link to={''} className="footer-item">
                            <img src={facebook} alt="facebook" />
                            <p>Facebook</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <img src={instagram} alt="instagram" />
                            <p>Instagram</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <img src={pinterest} alt="pinterest" />
                            <p>Pinterest</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <img src={whatsapp} alt="whatsapp" />
                            <p>WhatsApp</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <img src={youtube} alt="youtube" />
                            <p>Youtube</p>
                        </Link>
                    </div>
                    <div className="footer-list">
                        <Link to={''} className="footer-item">
                            <p>Delivery</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <p>FAQ</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <p>Help</p>
                        </Link>
                        <Link to={''} className="footer-item">
                            <p>More About Us</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">
                    674 Gonzales Drive.   Washington, PA 15301
                </p>
            </div>
        </footer>
    )
}
