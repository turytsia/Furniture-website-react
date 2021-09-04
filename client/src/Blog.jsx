import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

//images
import blogItem2 from './img/blogItem3.png'
import arrowRight from './img/arrowRight.svg'
import arrowLeft from './img/arrowLeft.svg'
//components
import Navigation from './components/Navigation'
//http
import http from './services.js'

export default function Blog({ setBlog }) {
    const [blogs, setBlogs] = useState(null)

    async function getBlogs() {
        const { data } = await http.get('/blog')
        if (data.success) {
            setBlogs(data.blogs)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <section className="blog-page">
            <div className="wrapper">
                <div className="blog-inner">
                    <section className="blog-list">
                        {blogs && blogs.map(blog => <div className="blog-item" key={blog._id}>
                            <img src={blogItem2} alt="blog" />
                            <div className="blog-info">
                                <span className="blog-date">March 12, 2020</span>
                                <span> | by </span>
                                <Link to={''} className="blog-author">{blog.author.name} {blog.author.surname}</Link>
                                <span> | </span>
                                <Link to={''} className="blog-category">{blog.category}</Link>
                            </div>
                            <Link className="blog-title" onClick={() => setBlog(blog)} to={`/blog/${blog._id}`}>
                                <h4>{blog.title}</h4>
                            </Link>
                            <p className="blog-text">
                                {blog.body.slice(0, 255)}...
                            </p>
                            {blog.cite && <div className="blog-cite-content">
                                <cite className="blog-cite underline-center">
                                    “{blog.cite}”
                                </cite>
                                <h5 className="blog-author">Paul Rand</h5>
                            </div>}
                        </div>)}
                    </section>
                    <Navigation />
                </div>
                <div className="pagination">
                    <Link to={''} className="pagination-arrow">
                        <img src={arrowLeft} alt="icon" />
                    </Link>
                    <span className="pagination-current">1</span>
                    <span>2</span>
                    <Link to={''} className="pagination-arrow">
                        <img src={arrowRight} alt="icon" />
                    </Link>
                </div>
            </div>

        </section>
    )
}
