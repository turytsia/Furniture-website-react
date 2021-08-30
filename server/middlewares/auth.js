import jwt from "jsonwebtoken";

export async function Auth(req, res, next) {
    try {
        const token = req.cookies.token
        const user = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
    } catch (err) {
        req.user = null
        res.status(200).json({ success: false, message: 'Unauthorized' })
    }
    next()
}