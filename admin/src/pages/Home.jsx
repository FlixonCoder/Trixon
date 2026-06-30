import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [betaApps, setBetaApps] = useState([])
    const [filteredBetaApps, setFilteredBetaApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedBetaApp, setSelectedBetaApp] = useState(null)

    // Filter States
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDate, setSelectedDate] = useState('')

    useEffect(() => {
        fetchDashboardData()
    }, [])

    useEffect(() => {
        let result = betaApps

        // Search Filter
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase()
            result = result.filter(app =>
                app.fullName.toLowerCase().includes(lowerTerm) ||
                app.email.toLowerCase().includes(lowerTerm) ||
                app.productInterest.toLowerCase().includes(lowerTerm) ||
                app.role.toLowerCase().includes(lowerTerm)
            )
        }

        // Date Filter
        if (selectedDate) {
            const filterDate = new Date(selectedDate).toDateString()
            result = result.filter(app =>
                new Date(app.createdAt).toDateString() === filterDate
            )
        }

        setFilteredBetaApps(result)
    }, [betaApps, searchTerm, selectedDate])

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem('token')
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

            const response = await axios.get(`${apiUrl}/beta-program`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setBetaApps(response.data)
            setFilteredBetaApps(response.data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching dashboard data:', err)
            if (err.response && err.response.status === 401) {
                // Token invalid or expired
                localStorage.removeItem('token')
                localStorage.removeItem('isAuthenticated')
                window.location.href = '/login'
                return
            }
            setError('Failed to load dashboard data')
            setLoading(false)
        }
    }

    const handleDeleteBeta = async (id, e) => {
        e.stopPropagation()
        if (window.confirm('Are you sure you want to delete this beta application?')) {
            try {
                const token = localStorage.getItem('token')
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
                await axios.delete(`${apiUrl}/beta-program/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setBetaApps(betaApps.filter(app => app._id !== id))
                if (selectedBetaApp && selectedBetaApp._id === id) {
                    setSelectedBetaApp(null)
                }
            } catch (err) {
                console.error('Error deleting beta application:', err)
                if (err.response && err.response.status === 401) {
                    window.location.href = '/login'
                    return
                }
                alert('Failed to delete application')
            }
        }
    }

    if (loading) return (
        <div className="flex-1 flex justify-center items-center h-[calc(100vh-80px)] text-stone-500 bg-stone-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-stone-900 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-medium">Loading dashboard data...</p>
            </div>
        </div>
    )

    if (error) return (
        <div className="flex-1 flex justify-center items-center h-[calc(100vh-80px)] text-red-600 font-medium bg-stone-50">
            {error}
        </div>
    )

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header and filters */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-stone-900 font-sans tracking-tight">Beta Program Applications</h1>
                    <p className="text-stone-500 mt-1.5 text-sm sm:text-base font-light">Review, analyze, and manage applications for Trixon beta software.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Search applications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 border border-stone-250 bg-white rounded-xl focus:border-stone-500 outline-none text-sm w-full md:w-64 transition-all"
                        />
                    </div>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-4 py-2.5 border border-stone-250 bg-white rounded-xl focus:border-stone-500 outline-none text-sm text-stone-600 font-sans transition-all"
                    />

                    {(searchTerm || selectedDate) && (
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedDate(''); }}
                            className="text-sm text-stone-500 hover:text-stone-900 underline ml-2 cursor-pointer font-medium"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Applications Table Card */}
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-stone-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-stone-150">
                        <thead className="bg-stone-900 text-stone-50">
                            <tr>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Product Interest</th>
                                <th scope="col" className="px-6 py-4.5 text-right text-xs font-bold uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-stone-100">
                            {filteredBetaApps.map((app) => (
                                <tr
                                    key={app._id}
                                    className="hover:bg-stone-50/70 transition-colors group cursor-pointer"
                                    onClick={() => setSelectedBetaApp(app)}
                                >
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-500 font-medium">
                                        {new Date(app.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm font-semibold text-stone-900">
                                        {app.fullName}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-500">
                                        <a
                                            href={`mailto:${app.email}`}
                                            className="text-stone-600 hover:text-stone-950 hover:underline decoration-stone-300 underline-offset-2 transition-colors inline-flex items-center gap-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined text-[16px]">mail</span>
                                            {app.email}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-600 font-light">
                                        {app.role}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            {app.productInterest}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={(e) => handleDeleteBeta(app._id, e)}
                                                className="p-2 text-stone-400 hover:text-red-650 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                                title="Delete"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedBetaApp(app); }}
                                                className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100/70 rounded-full transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                                title="View Details"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredBetaApps.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-16 text-center text-stone-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-stone-300">search_off</span>
                                            <p className="text-base font-semibold text-stone-400">No applications match your filters</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Beta Application Modal */}
            {selectedBetaApp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedBetaApp(null)}
                    ></div>

                    <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full mx-auto overflow-hidden border border-stone-150 animate-in fade-in zoom-in-95 duration-200">
                        <div className="bg-stone-50/50 px-6 py-5 border-b border-stone-100 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-stone-900 font-sans">Beta Application Details</h3>
                                <p className="text-xs text-stone-500 mt-1 font-light">
                                    Received on {new Date(selectedBetaApp.createdAt).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedBetaApp(null)}
                                className="text-stone-400 hover:text-stone-600 transition-colors p-1.5 rounded-full hover:bg-stone-200/50 cursor-pointer"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="px-8 py-6 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Full Name</label>
                                    <p className="text-stone-900 font-semibold text-lg">{selectedBetaApp.fullName}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Email</label>
                                    <a href={`mailto:${selectedBetaApp.email}`} className="text-stone-600 hover:text-stone-950 underline decoration-stone-250 hover:decoration-stone-900 flex items-center gap-2 font-medium">
                                        {selectedBetaApp.email}
                                    </a>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">LinkedIn Profile</label>
                                    {selectedBetaApp.linkedin ? (
                                        <a href={selectedBetaApp.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-950 underline decoration-stone-250 hover:decoration-stone-900 flex items-center gap-2 break-all font-medium">
                                            {selectedBetaApp.linkedin}
                                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                        </a>
                                    ) : (
                                        <p className="text-stone-500 italic font-light">Not provided</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Company</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.company || <span className="text-stone-500 italic font-light">Not provided</span>}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Role / Profession</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.role}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Industry</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.industry}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Years of Experience</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.experienceYears} years</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Product to Test</label>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 mt-1">
                                        {selectedBetaApp.productInterest}
                                    </span>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Availability / Commitment</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.availability}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Tested Software Before?</label>
                                    <p className="text-stone-900 font-medium">{selectedBetaApp.testingExperience}</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-stone-100">
                                <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Product Categories of Interest</label>
                                <div className="flex flex-wrap gap-2">
                                    {selectedBetaApp.categories.map((cat, i) => (
                                        <span key={i} className="text-xs font-semibold text-stone-700 bg-stone-50 border border-stone-200/55 px-3 py-1.5 rounded-lg">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedBetaApp.feedbackStyle && (
                                <div className="pt-4 border-t border-stone-100">
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">Typical Feedback Style</label>
                                    <p className="text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-sm whitespace-pre-wrap leading-relaxed font-light">{selectedBetaApp.feedbackStyle}</p>
                                </div>
                            )}

                            {selectedBetaApp.motivation && (
                                <div className="pt-4 border-t border-stone-100">
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">Motivation / Reasons to Join</label>
                                    <p className="text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-sm whitespace-pre-wrap leading-relaxed font-light">{selectedBetaApp.motivation}</p>
                                </div>
                            )}
                        </div>

                        <div className="bg-stone-50/50 px-6 py-4 border-t border-stone-100 flex justify-end gap-3">
                            <button
                                onClick={(e) => handleDeleteBeta(selectedBetaApp._id, e)}
                                className="inline-flex items-center px-5 py-2.5 border border-red-200 rounded-full text-xs font-semibold text-red-650 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all cursor-pointer shadow-sm"
                            >
                                <span className="material-symbols-outlined mr-1.5 text-[18px]">delete</span>
                                Delete Application
                            </button>
                            <button
                                onClick={() => setSelectedBetaApp(null)}
                                className="inline-flex items-center px-5 py-2.5 bg-stone-900 border border-transparent rounded-full text-xs font-semibold text-white hover:bg-stone-850 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all shadow-md cursor-pointer hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Home