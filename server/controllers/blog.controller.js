import blogModel from "../models/blog.js"
import employeeModel from "../models/employee.js"
import fs from 'fs'
export async function getBlogs(req, res) {
    const filter = {}
    const sort = {}
    const page = parseInt(req.query.page)
    const blogsToShow = 3

    try {
        let blogs = []
        blogs = await blogModel.find(filter).sort({ 'date': -1 })
        const pageLength = parseInt(blogs.length / blogsToShow)

        if (page + 1)
            blogs = blogs.slice(page * blogsToShow, page * blogsToShow + blogsToShow)
        else
            blogs = await blogModel.find(filter).sort()
        const recentBlogs = await blogModel.find().sort({ 'date': -1 })
        const user = await employeeModel.findById(req.user.id)

        res.status(200).json({ success: true, blogs, recentBlogs, pageLength, user })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}

export async function getBlog(req, res) {
    const blogID = req.params.blog
    try {
        const blog = await blogModel.findById(blogID)

        res.status(200).json({ success: true, blog })
    } catch (err) {
        res.status(200).json({ success: false, message: 'Blog doesn\'t exist' })

    }
}

export async function addBlog(req, res) {

    const blogImg = req.file.path
    try {
        const { title, body, tags, category } = req.body
        const user = await employeeModel.findById(req.user.id, '-password -email')
        const blog = new blogModel({ title, body, tags, author: user, category, blogImg })
        await blog.save()
        await user.addBlog(blog._id)
        await user.save()

        res.status(200).json({ success: true })

    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}
export async function updateBlog(req, res) {
    const blogID = req.params.blog
    try {
        const blog = await blogModel.findByIdAndUpdate(blogID, req.body)
        await blog.save()

        res.status(200).json({ success: true, blog })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })

    }
}
export async function deleteBlog(req, res) {
    const blogID = req.params.blog
    try {
        const blog = await blogModel.findById(blogID)
        const path = blog.blogImg
        fs.unlink('./' + path, (err) => {
            if (err) throw new Error(`Unable to remove file: ${err.message}`)
        })
        await blogModel.findByIdAndDelete(blogID)

        res.status(200).json({ success: true })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })

    }
}