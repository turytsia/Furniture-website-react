import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './Admin'
//http
import http from '../services.js'
export default function BlogList() {
    //context
    const user = useContext(AuthContext)

    const [blogs, setBlogs] = useState([])

    async function getBlogs() {
        const { data } = await http.get('/blog')
        setBlogs(data.blogs)
    }

    useEffect(() => {
        getBlogs()
    },[])
    return (
        <section className="admin-blog">
            <div className="wrapper">
                <div className="admin-inner">
                    <div className="admin-filter">
                        <button>
                            <FontAwesomeIcon icon={faPlus} />
                            <h5>Write a Blog</h5>
                        </button>
                    </div>
                    <div className="admin-blog-list">
                        {blogs.map(blog=>(
                            <Link to={`/blog/${blog._id}`} className="admin-list-item" key = {blog._id}>
                            <h5 className="admin-blog-title">{blog.title}</h5>
                            <div className="admin-blog-content">
                                <span>35</span>
                                <FontAwesomeIcon icon={faComment} />

                                <FontAwesomeIcon className="admin-blog-btn" icon={faEdit} />
                                <FontAwesomeIcon className="admin-blog-btn" icon={faTrash} />
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
