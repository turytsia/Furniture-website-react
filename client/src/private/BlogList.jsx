import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faPlus, faTrash, faMinus } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from './Admin'
//http
import http from '../services.js'


//components
function NewBlog({ editedBlog, setActivePost, getBlogs, setTitle, setBody, setCategory, setTags, tags, category, title, body }) {

    let lastInput = null
    const [errorMessage, setErrorMessage] = useState('')

    function selectTag(e) {
        const text = e.target.textContent
        e.target.parentNode.parentNode.style.display = 'none'
        const newTags = `${[...tags].toString().trim()} ${text}`
        setTags(newTags.split(','))
    }

    function selectCategory(e) {
        const text = e.target.textContent
        e.target.parentNode.parentNode.style.display = 'none'
        setCategory(text)
    }

    function selectInput(e) {
        const input = e.target
        const display = input.nextSibling.style.display === 'block'
        if (lastInput && lastInput !== input)
            lastInput.nextSibling.style.display = 'none'
        input.nextSibling.style.display = display ? 'none' : 'block'
        lastInput = input
    }

    async function addBlog(e) {
        e.preventDefault()
        try {
            if (!title || !body || !tags.length || !category)
                throw new Error('Please enter all the fields')
            const { data } = await http.post('/blog/new', { title, body, tags, category })
            if (!data.success)
                throw new Error(data.message)
            await getBlogs()
            setActivePost(false)

        } catch (err) {
            setErrorMessage(err.message)
        }
    }
    async function updateBlog(e, id) {
        e.preventDefault()
        try {
            if (!title || !body || !tags.length || !category)
                throw new Error('Please enter all the fields')
            const { data } = await http.patch(`/blog/${editedBlog._id}`, { title, body, tags, category })
            if (!data.success)
                throw new Error(data.message)
            await getBlogs()
            setActivePost(false)

        } catch (err) {
            setErrorMessage(err.message)
        }
    }
    return (<form onSubmit={(e) => editedBlog ? updateBlog(e) : addBlog(e)} className="admin-blog-form">
        <div className="admin-blog-form-input">
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title. Hello, World!" />
        </div>
        <div className="admin-blog-form-input">
            <input value={tags} onChange={(e) => setTags(e.target.value)} type="text" placeholder="Category" onClick={(e) => selectInput(e)} />
            <div className="admin-blog-form-inner">
                <div className="admin-blog-form-list">
                    <span onClick={(e) => { selectTag(e) }}>Interior</span>
                    <span onClick={(e) => { selectTag(e) }}>Interior</span>
                    <span onClick={(e) => { selectTag(e) }}>Interior</span>
                </div>
            </div>
        </div>
        <div className="admin-blog-form-input">
            <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="What is your blog about?" ></textarea>
        </div>
        <div className="admin-blog-form-input">
            <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" onClick={(e) => selectInput(e)} />
            <div className="admin-blog-form-inner">
                <div className="admin-blog-form-list">
                    <span onClick={(e) => { selectCategory(e) }}>Table</span>
                    <span onClick={(e) => { selectCategory(e) }}>Chair</span>
                    <span onClick={(e) => { selectCategory(e) }}>Bed</span>
                    <span onClick={(e) => { selectCategory(e) }}>Office</span>
                    <span onClick={(e) => { selectCategory(e) }}>Dining room</span>
                    <span onClick={(e) => { selectCategory(e) }}>Bedroom</span>
                    <span onClick={(e) => { selectCategory(e) }}>Hall</span>
                    <span onClick={(e) => { selectCategory(e) }}>Bath room</span>
                    <span onClick={(e) => { selectCategory(e) }}>Kitchen</span>
                </div>
            </div>
        </div>
        <button type="submit">{`${editedBlog ? 'Save' : 'Submit'}`}</button>
        {errorMessage && <h4 className="auth-error">{errorMessage}</h4>}
    </form>)
}

export default function BlogList({ setUser }) {
    //context
    const user = useContext(AuthContext)

    const [blogs, setBlogs] = useState([])
    const [isActivePost, setActivePost] = useState(false)

    //blog states
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [category, setCategory] = useState('')
    const [editedBlog, setEditedBlog] = useState(null)

    //queries
    async function deletePost(id) {
        const { data } = await http.delete(`/blog/${id}`)
        if (data.success)
            await getBlogs()
    }
    async function getBlogs() {
        const { data } = await http.get('/blog')
        if (data.success) {
            setBlogs(data.blogs)
            setUser(data.user)
        }
    }
    async function startEditBlog(id) {
        const { data } = await http.get(`/blog/${id}`)
        if (data.success) {
            setActivePost(true)
            setEditedBlog(data.blog)
            setTitle(data.blog.title)
            setBody(data.blog.body)
            setCategory(data.blog.category)
            setTags(data.blog.tags)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    //props for adding blog component
    const props = {
        setEditedBlog,
        editedBlog,
        setActivePost,
        getBlogs,
        setTitle,
        setBody,
        setCategory,
        setTags,
        tags,
        category,
        title,
        body
    }

    return (
        <section className="admin-blog">
            <div className="wrapper">
                <div className="admin-inner">
                    <div className="admin-filter">
                        <button onClick={() => setActivePost(!isActivePost)}>
                            <FontAwesomeIcon icon={isActivePost ? faMinus : faPlus} />
                            <h5>{`${isActivePost ? 'Remove Blog' : 'Write a Blog'}`}</h5>
                        </button>
                    </div>
                    {isActivePost ? <NewBlog {...props} /> :
                        <div className="admin-blog-list">
                            {blogs.map(blog => (
                                <span className="admin-list-item" key={blog._id}>
                                    <Link className="admin-blog-title" to={`/blog/${blog._id}`}>
                                        <h5>{blog.title}</h5>
                                    </Link>
                                    <div className="admin-blog-content">
                                        <span>35</span>
                                        <FontAwesomeIcon icon={faComment} />
                                        {user.blogs.indexOf(blog._id) !== -1 && <>
                                            <FontAwesomeIcon onClick={() => startEditBlog(blog._id)} className="admin-blog-btn" icon={faEdit} />
                                            <FontAwesomeIcon onClick={() => deletePost(blog._id)} className="admin-blog-btn" icon={faTrash} />
                                        </>}
                                    </div>
                                </span>
                            ))}
                        </div>}
                </div>
            </div>
        </section>
    )
}
