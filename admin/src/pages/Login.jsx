import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
            const response = await axios.post(`${apiUrl}/auth/login`, {
                email,
                password
            })

            localStorage.setItem('token', response.data.token) // Store JWT token
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/')
        } catch (err) {
            console.error('Login error:', err)
            setError(err.response?.data?.message || 'Invalid credentials')
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
