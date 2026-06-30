import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
            const response = await axios.post(`${apiUrl}/auth/login`, {
                email,
                password
            })

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/')
        } catch (err) {
            console.error('Login error:', err)
            setError(err.response?.data?.message || 'Invalid credentials')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4 relative overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute inset-0 opacity-[0.03] text-stone-900 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-emerald-100/30 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none"></div>

            <div className="relative max-w-md w-full bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-stone-200/50 z-10">
                <div className="text-center mb-8">
                    <span className="text-3xl font-bold text-stone-900 tracking-tight font-sans">Trixon</span>
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md align-middle">
                        Admin
                    </span>
                    <h2 className="text-xl font-medium text-stone-600 mt-4">Secure Sign In</h2>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                            placeholder="admin@trixon.cloud"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-800 text-xs text-center bg-red-50 border border-red-100 p-3.5 rounded-xl leading-relaxed">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-stone-900 text-white font-medium py-3.5 px-4 rounded-xl hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
