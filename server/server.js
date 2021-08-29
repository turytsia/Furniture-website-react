import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import appRouter from './routers/app.router.js'
import authRouter from './routers/auth.router.js'
import privateRouter from './routers/private.router.js'

dotenv.config()
const app = express()

//middlewares
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

//routers
app.use('/', appRouter)
app.use('/auth', authRouter)
app.use('/admin', privateRouter)

export default app