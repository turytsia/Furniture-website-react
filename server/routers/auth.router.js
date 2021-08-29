import { Router } from "express";
import { Login, Register, Logout } from "../controllers/auth.controller.js";
const router = Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/logout', Logout)

export default router