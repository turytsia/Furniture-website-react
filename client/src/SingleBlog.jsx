import React from 'react'
import { Link } from 'react-router-dom'
//images
import blogItem2 from './img/blogItem3.png'
import blowArrowRight from './img/blowArrowRight.svg'
import blowArrowLeft from './img/blowArrowLeft.svg'
//components
import Navigation from './components/Navigation'

export default function SingleBlog() {
    return (
        <section className="blog-page">
            <div className="wrapper">
                <div className="blog-inner">
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
                        <div className="single-blog-cite-content">
                            <cite className="single-blog-cite underline-left">
                                “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                            </cite>
                            <h5 className="single-blog-author">Paul Rand</h5>
                        </div>
                        <p className="blog-text">
                            Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                        </p>
                        <div className="single-blog-tags">
                            <h4>Tags</h4>
                            <div className="single-blog-tags-list">
                            <Link to={''} className="blog-tag">
                                Dining room futniture
                            </Link>
                            <Link to={''} className="blog-tag">
                                Chair
                            </Link>
                            <Link to={''} className="blog-tag">
                                Table
                            </Link>
                            <Link to={''} className="blog-tag">
                                Bedroom
                            </Link>
                            <Link to={''} className="blog-tag">
                                Office Furniture
                            </Link>
                            </div>
                        </div>
                        <div className="blog-pagination">

                        </div>
                    </div>
                    <Navigation />
                </div>
            </div>
        </section>
    )
}
