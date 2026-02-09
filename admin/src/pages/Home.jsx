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
    const [showSavedOnly, setShowSavedOnly] = useState(false)

    useEffect(() => {
        fetchMessages()
    }, [])

    useEffect(() => {
        let result = messages

        // Search Filter
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase()
            result = result.filter(msg =>
                msg.name.toLowerCase().includes(lowerTerm) ||
                msg.email.toLowerCase().includes(lowerTerm) ||
                msg.message.toLowerCase().includes(lowerTerm)
            )
        }

        // Date Filter
        if (selectedDate) {
            // Create date objects for comparison (ignoring time)
            const filterDate = new Date(selectedDate).toDateString()
            result = result.filter(msg =>
                new Date(msg.createdAt).toDateString() === filterDate
            )
        }

        // Saved Filter
        if (showSavedOnly) {
            result = result.filter(msg => msg.isSaved)
        }

        setFilteredMessages(result)
    }, [messages, searchTerm, selectedDate, showSavedOnly])

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token')
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

            const response = await axios.get(`${apiUrl}/contact`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMessages(response.data)
            setFilteredMessages(response.data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching messages:', err)
            if (err.response && err.response.status === 401) {
                // Token invalid or expired
                localStorage.removeItem('token')
                localStorage.removeItem('isAuthenticated')
                window.location.href = '/login'
                return
            }
            setError('Failed to load messages')
            setLoading(false)
        }
    }

    const handleDelete = async (id, e) => {
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

    const handleSave = async (id, currentStatus, e) => {
        e.stopPropagation()
        try {
            const token = localStorage.getItem('token')
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
            const response = await axios.put(`${apiUrl}/contact/${id}`, {
                isSaved: !currentStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMessages(messages.map(msg =>
                msg._id === id ? { ...msg, isSaved: response.data.isSaved } : msg
            ))
        } catch (err) {
            console.error('Error updating message:', err)
            if (err.response && err.response.status === 401) {
                window.location.href = '/login'
                return
            }
            alert('Failed to update message')
        }
    }

    if (loading) return (
        <div className="flex-1 flex justify-center items-center h-[calc(100vh-64px)] text-stone-500">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-stone-900 border-t-transparent rounded-full animate-spin"></div>
                <p>Loading messages...</p>
            </div>
        </div>
    )

    if (error) return (
        <div className="flex-1 flex justify-center items-center h-[calc(100vh-64px)] text-red-600 font-medium">
            {error}
        </div>
    )

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-stone-900 font-serif">Inbox</h1>
                    <p className="text-stone-500 mt-1">Manage your incoming contact requests.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none text-sm w-full md:w-64"
                        />
                    </div>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none text-sm text-stone-600 font-sans"
                    />

                    <button
                        onClick={() => setShowSavedOnly(!showSavedOnly)}
                        className={`inline-flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${showSavedOnly ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'}`}
                    >
                        <span className="material-symbols-outlined mr-2 text-[20px]">{showSavedOnly ? 'bookmark' : 'bookmark_border'}</span>
                        Saved Only
                    </button>

                    {(searchTerm || selectedDate || showSavedOnly) && (
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedDate(''); setShowSavedOnly(false); }}
                            className="text-sm text-stone-500 hover:text-stone-900 underline ml-2"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-stone-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-stone-200">
                        <thead className="bg-stone-900 text-stone-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Message</th>
                                <th scope="col" className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-stone-100">
                            {filteredMessages.map((msg) => (
                                <tr
                                    key={msg._id}
                                    className="hover:bg-stone-50 transition-colors group cursor-pointer"
                                    onClick={() => setSelectedMessage(msg)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500 font-medium">
                                        {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-stone-900 group-hover:text-stone-700">
                                        {msg.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                                        <a
                                            href={`mailto:${msg.email}`}
                                            className="text-stone-600 hover:text-stone-900 hover:underline decoration-stone-400 underline-offset-2 transition-colors inline-flex items-center gap-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="material-symbols-outlined text-[16px]">mail</span>
                                            {msg.email}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-stone-600 max-w-lg">
                                        <p className="line-clamp-2 leading-relaxed">{msg.message}</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={(e) => handleSave(msg._id, msg.isSaved, e)}
                                                className={`p-2 rounded-full transition-colors ${msg.isSaved ? 'text-amber-500 bg-amber-50' : 'text-stone-400 hover:bg-stone-100 hover:text-amber-500'}`}
                                                title={msg.isSaved ? "Unsave" : "Save"}
                                            >
                                                <span className="material-symbols-outlined text-[20px]">{msg.isSaved ? 'bookmark_added' : 'bookmark_add'}</span>
                                            </button>
                                            <button
                                                onClick={(e) => handleDelete(msg._id, e)}
                                                className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100" // Only this is hidden on hover
                                                title="Delete"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedMessage(msg); }}
                                                className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors opacity-0 group-hover:opacity-100" // View hidden on hover
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
                                    <td colSpan="5" className="px-6 py-12 text-center text-stone-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-stone-300">search_off</span>
                                            <p className="text-lg font-medium text-stone-400">No messages match your filters</p>
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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedMessage(null)}
                    ></div>

                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">Message Details</h3>
                                <p className="text-sm text-stone-500 mt-1">
                                    Received on {new Date(selectedMessage.createdAt).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="text-stone-400 hover:text-stone-600 transition-colors p-1 rounded-full hover:bg-stone-200"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="px-6 py-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">From</label>
                                    <p className="text-stone-900 font-medium text-lg">{selectedMessage.name}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Email</label>
                                    <a href={`mailto:${selectedMessage.email}`} className="text-stone-600 hover:text-stone-900 underline decoration-stone-300 hover:decoration-stone-900 flex items-center gap-2">
                                        {selectedMessage.email}
                                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Message</label>
                                <div className="bg-stone-50 rounded-xl p-4 text-stone-700 leading-relaxed border border-stone-100 whitespace-pre-wrap max-h-96 overflow-y-auto custom-scrollbar">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex justify-end gap-3">
                            <button
                                onClick={() => handleDelete(selectedMessage._id, { stopPropagation: () => { } })}
                                className="inline-flex items-center px-4 py-2 border border-red-200 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                            >
                                <span className="material-symbols-outlined mr-2 text-[18px]">delete</span>
                                Delete
                            </button>
                            <button
                                onClick={() => {
                                    handleSave(selectedMessage._id, selectedMessage.isSaved, { stopPropagation: () => { } });
                                    setSelectedMessage({ ...selectedMessage, isSaved: !selectedMessage.isSaved });
                                }}
                                className={`inline-flex items-center px-4 py-2 border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${selectedMessage.isSaved ? 'border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100 focus:ring-amber-500' : 'border-stone-300 text-stone-700 bg-white hover:bg-stone-50 focus:ring-stone-500'}`}
                            >
                                <span className="material-symbols-outlined mr-2 text-[18px]">{selectedMessage.isSaved ? 'bookmark_added' : 'bookmark_add'}</span>
                                {selectedMessage.isSaved ? 'Saved' : 'Save'}
                            </button>
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="inline-flex items-center px-4 py-2 bg-stone-900 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-colors shadow-sm"
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