import React from 'react'
import { Link } from 'react-router-dom'

export default function Pages() {
    return (
        <section className="admin-pages">
            <div className="wrapper">
                <div className="admin-inner">
                    <Link to={'pages'} className="admin-pages-item">
                        <h5 className="admin-pages-name">Main Page</h5>
                    </Link>
                    <Link to={'pages'} className="admin-pages-item">
                        <h5 className="admin-pages-name">About Us</h5>
                    </Link>
                    <Link to={'pages'} className="admin-pages-item">
                        <h5 className="admin-pages-name">Gallery</h5>
                    </Link>
                    <Link to={'pages'} className="admin-pages-item">
                        <h5 className="admin-pages-name">Contact</h5>
                    </Link>
                </div>
            </div>
        </section>
    )
}
