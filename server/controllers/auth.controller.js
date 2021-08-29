import employeeModel from '../models/employee.js'

export async function Register(req, res) {
    const { name, surname, password, email, secret } = req.body
    try {
        //validation
        if (await employeeModel.findOne({ email }))
            throw new Error('Account with this e-mail already exists')
        if (secret !== process.env.EMPLOYEE_SECRET)
            throw new Error('Wrong secret code')

        const user = new employeeModel({ name, surname, password, email })
        user.save()

        res
            .cookie('token', user.getSignedToken(), { httpOnly: true })
            .status(200).json({ success: true })

    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}

export async function Login(req, res) {
    try {
        const { password, email } = req.body
        const user = await employeeModel.findOne({ email })
        if (!user)
            throw new Error('Wrong email or password')
        if (!await user.matchPasswords(password))
            throw new Error('Wrong email or password')

        res
            .cookie('token', user.getSignedToken(), { httpOnly: true })
            .status(200).json({ success: true })

    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}

export async function Logout(req, res) {
    res
        .cookie('token', '', { httpOnly: true, expires: new Date(0) })
        .status(200).json({ success: true })
}