import React from 'react'
import { Link } from 'react-router-dom'

//images
import logo from '../img/logo.png'
import menu from '../img/icon_menu.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-inner">
                    <div className="header-link-wrapper">
                        <Link to={''} className="header-link">
                            About
                        </Link>
                        <Link to={''} className="header-link">
                            Gallery
                        </Link>
                    </div>

                    <Link to={''} className="header-link">
                        <img className="header-img-logo" src={logo} alt="logo" />
                    </Link>
                    <div className="header-link-wrapper">
                        <Link to={''} className="header-link">
                            Blog
                        </Link>
                        <Link to={''} className="header-link">
                            Content
                        </Link>
                        <div className="header-menu">
                            <img className="header-img-menu" src={menu} alt="menu" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
