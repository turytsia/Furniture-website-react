import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
//http
import http from '../services.js'
export default function Register({ setAuthorized }) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [secret, setSecret] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const history = useHistory()

    async function register(e) {
        e.preventDefault()
        try {
            if (!name || !surname || !password || !passwordConfirm || !email || !secret)
                throw new Error('Please provide provide more info')
            if (password !== passwordConfirm)
                throw new Error('Passwords don\'t match')
            const { data } = await http.post('/auth/register', { name, surname, password, email, secret })
            if (data.success) {
                history.push('/admin')
                setAuthorized(true)
            }
            else setErrorMessage(data.message)

        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    return (
        <section className="auth">
            <form onSubmit={(e) => register(e)} className="auth-form">
                <h3>Register</h3>
                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Your surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Repeat your password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Secret Code" value={secret} onChange={(e) => setSecret(e.target.value)} />
                <div className="auth-btn">
                    <button type="submit">Sign Up</button>
                    <Link to={'/admin/login'}>Already have an account?</Link>
                </div>
                {errorMessage && <h4 className="auth-error">{errorMessage}</h4>}
            </form>
        </section>
    )
}
