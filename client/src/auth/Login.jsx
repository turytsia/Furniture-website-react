import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
//http
import http from '../services.js'
export default function Login({setAuthorized}) {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const history = useHistory()

    async function login(e) {
        e.preventDefault()
        try {
            if (!password || !email)
                throw new Error('Please provide provide more info')

                const { data } = await http.post('/auth/login', { password, email })
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
            <form onSubmit={(e) => login(e)} className="auth-form">
                <h3>Login</h3>
                <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="auth-btn">
                    <button type="submit">Login</button>
                    <Link to={'/admin/register'}>Or create account</Link>
                </div>
                {errorMessage && <h4 className="auth-error">{errorMessage}</h4>}
            </form>
        </section>
    )
}
