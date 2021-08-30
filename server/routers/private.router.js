import { Router } from "express";
import { Auth } from '../middlewares/auth.js'
const router = Router()

router.get('/', Auth, (req, res) => {
    const user = req.user
    res.json({ success: true, user })
})

export default router