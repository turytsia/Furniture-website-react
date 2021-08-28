import React from 'react'
import { Link } from 'react-router-dom'

//images
import blogItem2 from './img/blogItem3.png'
import arrowRight from './img/arrowRight.svg'
import arrowLeft from './img/arrowLeft.svg'
//components
import Navigation from './components/Navigation'

export default function Blog() {
    return (
        <section className="blog-page">
            <div className="wrapper">
                <div className="blog-inner">
                    <section className="blog-list">
                        <div className="blog-item">
                            <img src={blogItem2} alt="blog" />
                            <div className="blog-info">
                                <span className="blog-date">March 12, 2020</span>
                                <span> | by </span>
                                <Link to={''} className="blog-author">Ann Summers</Link>
                                <span> | </span>
                                <Link to={''} className="blog-category">Inrerior</Link>
                            </div>
                            <Link className="blog-title" to={''}>
                                <h4>Red selfies edison bulb four dollar toast humblebrag for the furniture </h4>
                            </Link>
                            <p className="blog-text">
                                Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                            </p>
                            <div className="blog-cite-content">
                                <cite className="blog-cite underline-center">
                                    “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                                </cite>
                                <h5 className="blog-author">Paul Rand</h5>
                            </div>
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
                            <Link className="blog-title" to={''}>
                                <h4>Red selfies edison bulb four dollar toast humblebrag for the furniture </h4>
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
                            <Link className="blog-title" to={''}>
                                <h4>Red selfies edison bulb four dollar toast humblebrag for the furniture </h4>
                            </Link>
                            <p className="blog-text">
                                Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                            </p>
                        </div>
                    </section>
                    <Navigation/>
                </div>
                <div className="pagination">
                    <Link to={''} className="pagination-arrow">
                        <img src={arrowLeft} alt="icon" />
                    </Link>
                    <span className = "pagination-current">1</span>
                    <span>2</span>
                    <Link to={''} className="pagination-arrow">
                        <img src={arrowRight} alt="icon" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
