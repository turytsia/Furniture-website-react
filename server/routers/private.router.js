import { Router } from "express";
import { Auth } from '../middlewares/auth.js'
const router = Router()

router.get('/', Auth, (req, res) => [
    res.json({ sucess: true })
])

export default router