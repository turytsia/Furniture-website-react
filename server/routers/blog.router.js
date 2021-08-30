import { Router } from "express";
import { addBlog, updateBlog, deleteBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";
import { Auth } from '../middlewares/auth.js'
const router = Router()

router.get('/', getBlogs)
router.get('/:blog', getBlog)
router.post('/new', Auth, addBlog)
router.patch('/update/:blog', Auth, updateBlog)
router.delete('/delete/:blog', Auth, deleteBlog)

export default router