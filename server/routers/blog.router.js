import { Router } from "express";
import { addBlog, updateBlog, deleteBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";
import { Auth } from '../middlewares/auth.js'
const router = Router()

import multer from "multer"

//storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/blogs')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + file.originalname)
    }
})

//init
const upload = multer({ storage })

router.use(Auth)

router.get('/', getBlogs)
router.post('/new', upload.single('file'), addBlog)
router.route('/:blog')
    .get(getBlog)
    .patch(updateBlog)
    .delete(deleteBlog)

export default router