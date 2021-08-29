import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const emoloyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    blogs: {
        type: Array
    }
})

emoloyeeSchema.pre('save', async function() {
    if (!this.isModified(this.password))
        this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(16))
})

emoloyeeSchema.methods.getSignedToken = function() {
    const payload = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        blogs: this.blogs
    }
    return jwt.sign(payload, process.env.JWT_SECRET)
}

emoloyeeSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const employeeModel = mongoose.model('employee', emoloyeeSchema)

export default employeeModel