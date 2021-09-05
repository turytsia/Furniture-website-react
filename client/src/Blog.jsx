import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//images
import blogItem2 from './img/blogItem3.png'
import arrowRight from './img/arrowRight.svg'
import arrowLeft from './img/arrowLeft.svg'
//components
import Navigation from './components/Navigation'
//http
import http from './services.js'

export default function Blog() {
    const [blogs, setBlogs] = useState(null)
    const [recentBlogs, setRecentBlogs] = useState(null)

    const [page, setPage] = useState(0)
    const [pageLength, setPageLength] = useState(0)
    async function getBlogs() {
        const { data } = await http.get(`/blog?page=${page}`)
        if (data.success) {
            setBlogs(data.blogs)
            setRecentBlogs(data.recentBlogs.slice(0, 3))
            setPageLength(data.pageLength)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [page])
    return (
        <section className="blog-page">
            {blogs && <div className="wrapper">
                <div className="blog-inner">
                    <section className="blog-list">
                        {blogs && blogs.map(blog => <div className="blog-item" key={blog._id}>
                            <img src={`http://localhost:5000/${blog.blogImg}`} alt="blog" />
                            <div className="blog-info">
                                <span className="blog-date">March 12, 2020</span>
                                <span> | by </span>
                                <Link to={''} className="blog-author">{blog.author.name} {blog.author.surname}</Link>
                                <span> | </span>
                                <Link to={''} className="blog-category">{blog.category}</Link>
                            </div>
                            <Link className="blog-title" to={`/blog/${blog._id}`}>
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
                    <Navigation recentBlogs={recentBlogs} />
                </div>
                <div className="pagination">
                    {page > 0 && <>
                        <button onClick={() => setPage(page - 1)} className="pagination-arrow">
                            <img src={arrowLeft} alt="icon" />
                        </button>
                        <span>{page}</span>
                    </>}

                    <span className="pagination-current">{page + 1}</span>

                    {page < pageLength && <>
                        <span>{page + 2}</span>
                        <button onClick={() => setPage(page + 1)} className="pagination-arrow">
                            <img src={arrowRight} alt="icon" />
                        </button>
                    </>}
                </div>
            </div>}

        </section>
    )
}
