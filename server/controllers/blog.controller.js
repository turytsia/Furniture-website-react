import blogModel from "../models/blog.js"
import employeeModel from "../models/employee.js"

export async function getBlogs(req, res) {
    const filter = {}
    const sort = {}
    try {

        const blogs = await blogModel.find(filter).sort(sort)

        const user = await employeeModel.findById(req.user.id)
        res.status(200).json({ success: true, blogs, user })
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
    const { title, body, tags, category } = req.body
    try {
        const user = await employeeModel.findById(req.user.id, '-password -email')

        const blog = new blogModel({ title, body, tags, author: user, category })
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
        await blogModel.findByIdAndDelete(blogID)
        res.status(200).json({ success: true })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })

    }
}