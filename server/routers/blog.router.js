import { Router } from "express";
import { addBlog, updateBlog, deleteBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";
import { Auth } from '../middlewares/auth.js'
const router = Router()

router.use(Auth)

router.get('/', getBlogs)
router.post('/new', addBlog)
router.route('/:blog')
    .get(getBlog)
    .patch(updateBlog)
    .delete(deleteBlog)

export default router