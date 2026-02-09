import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const adminMail = import.meta.env.VITE_USER_MAIL
        const adminPwd = import.meta.env.VITE_USER_PWD

        // Remove quotes if they exist in the env var string
        const cleanMail = adminMail.replace(/['"]+/g, '')
        const cleanPwd = adminPwd.replace(/['"]+/g, '')

        if (email === cleanMail && password === cleanPwd) {
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/')
        } else {
            setError('Invalid credentials')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-stone-200">
                <h2 className="text-2xl font-bold text-center text-stone-900 mb-8 font-serif">Admin Login</h2>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-stone-900 text-white font-medium py-2 px-4 rounded-lg hover:bg-stone-800 transition-colors shadow-md"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
