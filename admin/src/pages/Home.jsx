import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [messages, setMessages] = useState([])
    const [filteredMessages, setFilteredMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedMessage, setSelectedMessage] = useState(null)

    // Filter States
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [showOnlySaved, setShowOnlySaved] = useState(false)

    useEffect(() => {
        fetchDashboardData()
    }, [])

    useEffect(() => {
        let result = messages

        // Search Filter (checks Name, Email, Company, and Role)
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase()
            result = result.filter(msg =>
                msg.fullName.toLowerCase().includes(lowerTerm) ||
                msg.email.toLowerCase().includes(lowerTerm) ||
                msg.companyName.toLowerCase().includes(lowerTerm) ||
                msg.role.toLowerCase().includes(lowerTerm)
            )
        }

        // Date Filter
        if (selectedDate) {
            const filterDate = new Date(selectedDate).toDateString()
            result = result.filter(msg =>
                new Date(msg.createdAt).toDateString() === filterDate
            )
        }

        // Saved Filter
        if (showOnlySaved) {
            result = result.filter(msg => msg.isSaved)
        }

        setFilteredMessages(result)
    }, [messages, searchTerm, selectedDate, showOnlySaved])

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem('token')
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

            const response = await axios.get(`${apiUrl}/contact`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setMessages(response.data)
            setFilteredMessages(response.data)
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

    const handleDeleteMessage = async (id, e) => {
        e.stopPropagation()
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                const token = localStorage.getItem('token')
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
                await axios.delete(`${apiUrl}/contact/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setMessages(messages.filter(msg => msg._id !== id))
                if (selectedMessage && selectedMessage._id === id) {
                    setSelectedMessage(null)
                }
            } catch (err) {
                console.error('Error deleting message:', err)
                if (err.response && err.response.status === 401) {
                    window.location.href = '/login'
                    return
                }
                alert('Failed to delete message')
            }
        }
    }

    const handleToggleSave = async (msg, e) => {
        e.stopPropagation()
        try {
            const token = localStorage.getItem('token')
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
            const updatedSaveState = !msg.isSaved

            const response = await axios.put(`${apiUrl}/contact/${msg._id}`, 
                { isSaved: updatedSaveState },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            const updatedMessages = messages.map(m => m._id === msg._id ? { ...m, isSaved: response.data.isSaved } : m)
            setMessages(updatedMessages)
            
            if (selectedMessage && selectedMessage._id === msg._id) {
                setSelectedMessage({ ...selectedMessage, isSaved: response.data.isSaved })
            }
        } catch (err) {
            console.error('Error updating message save state:', err)
            if (err.response && err.response.status === 401) {
                window.location.href = '/login'
                return
            }
            alert('Failed to update message')
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
        <div className="flex-1 flex justify-center items-center h-[calc(100vh-80px)] text-red-655 font-medium bg-stone-50">
            {error}
        </div>
    )

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header and filters */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-stone-900 font-sans tracking-tight">Contact Enquiries</h1>
                    <p className="text-stone-500 mt-1.5 text-sm sm:text-base font-light">Review and manage contact submissions from the website.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => setShowOnlySaved(!showOnlySaved)}
                        className={`px-4 py-2.5 border rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                            showOnlySaved 
                                ? 'bg-amber-50 border-amber-200 text-amber-700 shadow-sm' 
                                : 'bg-white border-stone-250 text-stone-650 hover:bg-stone-50'
                        }`}
                    >
                        <span className="material-symbols-outlined text-[18px]">
                            {showOnlySaved ? 'star' : 'star_border'}
                        </span>
                        Starred
                    </button>

                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Search enquiries..."
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

                    {(searchTerm || selectedDate || showOnlySaved) && (
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedDate(''); setShowOnlySaved(false); }}
                            className="text-sm text-stone-500 hover:text-stone-900 underline ml-2 cursor-pointer font-medium"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Messages Table Card */}
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-stone-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-stone-150">
                        <thead className="bg-stone-900 text-stone-50">
                            <tr>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider w-8"></th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Company</th>
                                <th scope="col" className="px-6 py-4.5 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-4.5 text-right text-xs font-bold uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-stone-100">
                            {filteredMessages.map((msg) => (
                                <tr
                                    key={msg._id}
                                    className="hover:bg-stone-50/70 transition-colors group cursor-pointer"
                                    onClick={() => setSelectedMessage(msg)}
                                >
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-center">
                                        <button
                                            onClick={(e) => handleToggleSave(msg, e)}
                                            className="text-stone-300 hover:text-amber-500 transition-colors cursor-pointer"
                                        >
                                            <span className={`material-symbols-outlined text-[20px] ${msg.isSaved ? 'text-amber-500' : ''}`}>
                                                {msg.isSaved ? 'star' : 'star_border'}
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-550 font-medium">
                                        {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm font-semibold text-stone-900">
                                        {msg.fullName}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-500">
                                        <a
                                            href={`mailto:${msg.email}`}
                                            className="text-stone-600 hover:text-stone-950 hover:underline decoration-stone-300 underline-offset-2 transition-colors inline-flex items-center gap-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined text-[16px]">mail</span>
                                            {msg.email}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-900 font-semibold">
                                        {msg.companyName}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-sm text-stone-600 font-light">
                                        {msg.role}
                                    </td>
                                    <td className="px-6 py-4.5 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={(e) => handleDeleteMessage(msg._id, e)}
                                                className="p-2 text-stone-400 hover:text-red-650 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                                title="Delete"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedMessage(msg); }}
                                                className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100/70 rounded-full transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                                title="View Details"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredMessages.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="px-6 py-16 text-center text-stone-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-stone-300">search_off</span>
                                            <p className="text-base font-semibold text-stone-400">No enquiries match your filters</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Message Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedMessage(null)}
                    ></div>

                    <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden border border-stone-150 animate-in fade-in zoom-in-95 duration-200">
                        <div className="bg-stone-50/50 px-6 py-5 border-b border-stone-100 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-stone-900 font-sans">Contact Enquiry Details</h3>
                                <p className="text-xs text-stone-500 mt-1 font-light">
                                    Received on {new Date(selectedMessage.createdAt).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => handleToggleSave(selectedMessage, e)}
                                    className="text-stone-400 hover:text-amber-500 transition-colors p-1.5 rounded-full hover:bg-stone-200/50 cursor-pointer"
                                    title={selectedMessage.isSaved ? "Unstar" : "Star"}
                                >
                                    <span className={`material-symbols-outlined ${selectedMessage.isSaved ? 'text-amber-500' : ''}`}>
                                        {selectedMessage.isSaved ? 'star' : 'star_border'}
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className="text-stone-400 hover:text-stone-600 transition-colors p-1.5 rounded-full hover:bg-stone-200/50 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>

                        <div className="px-8 py-6 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Full Name</label>
                                    <p className="text-stone-900 font-semibold text-lg">{selectedMessage.fullName}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Email</label>
                                    <a href={`mailto:${selectedMessage.email}`} className="text-stone-600 hover:text-stone-950 underline decoration-stone-250 hover:decoration-stone-900 flex items-center gap-2 font-medium">
                                        {selectedMessage.email}
                                    </a>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Phone Number</label>
                                    <a href={`tel:${selectedMessage.phone}`} className="text-stone-600 hover:text-stone-950 underline decoration-stone-250 hover:decoration-stone-900 flex items-center gap-2 font-medium">
                                        {selectedMessage.phone}
                                    </a>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Company Name</label>
                                    <p className="text-stone-900 font-semibold">{selectedMessage.companyName}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Company Website</label>
                                    {selectedMessage.companyWebsite ? (
                                        <a href={selectedMessage.companyWebsite.startsWith('http') ? selectedMessage.companyWebsite : `https://${selectedMessage.companyWebsite}`} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-950 underline decoration-stone-250 hover:decoration-stone-900 flex items-center gap-2 break-all font-medium">
                                            {selectedMessage.companyWebsite}
                                            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                        </a>
                                    ) : (
                                        <p className="text-stone-500 italic font-light">Not provided</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">Role / Profession</label>
                                    <p className="text-stone-900 font-medium">{selectedMessage.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50/50 px-6 py-4 border-t border-stone-100 flex justify-end gap-3">
                            <button
                                onClick={(e) => handleDeleteMessage(selectedMessage._id, e)}
                                className="inline-flex items-center px-5 py-2.5 border border-red-200 rounded-full text-xs font-semibold text-red-650 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all cursor-pointer shadow-sm"
                            >
                                <span className="material-symbols-outlined mr-1.5 text-[18px]">delete</span>
                                Delete Message
                            </button>
                            <button
                                onClick={() => setSelectedMessage(null)}
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