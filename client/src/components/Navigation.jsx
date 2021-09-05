import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import pinterest from '../img/Pinterest.svg'
import whatsapp from '../img/whatsapp.svg'
import youtube from '../img/youtube.svg'
import search from '../img/search.svg'
export default function Navigation({ recentBlogs }) {
    return (
        <aside className="blog-nav">
            <div className="blog-nav-search">
                <input type="text" placeholder="Search" />
                <img src={search} alt="icon" />
            </div>
            <div className="blog-nav-list">
                <h5>Categories</h5>
                <Link to={''}>Dining room (1)</Link>
                <Link to={''}>Office furniture (12)</Link>
                <Link to={''}>Simple interiror design (2)</Link>
                <Link to={''}>Design (4)</Link>
                <Link to={''}>Bedroom Furniture (1)</Link>
            </div>
            {recentBlogs && <div className="blog-nav-list">
                <h5>Recent Posts</h5>
                {recentBlogs.map(blog => <span className="blog-nav-item" key = {blog._id}>
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    <span>August 10, 2020 | by
                        <Link to={`/blog/${blog._id}`}>
                            {blog.author.name} {blog.author.surname}
                        </Link>
                    </span>
                </span>)}
            </div>}
            <div className="blog-nav-list">
                <h5>Tags</h5>
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
            <div className="blog-nav-social">
                <Link to={''}>
                    <img src={instagram} alt="socials" />
                </Link>
                <Link to={''}>
                    <img src={facebook} alt="socials" />
                </Link>
                <Link to={''}>
                    <img src={pinterest} alt="socials" />
                </Link>
                <Link to={''}>
                    <img src={whatsapp} alt="socials" />
                </Link>
                <Link to={''}>
                    <img src={youtube} alt="socials" />
                </Link>
            </div>
        </aside>
    )
}
