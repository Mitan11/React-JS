import React, { useEffect, useState } from 'react'

function Header({ handleLogout }) {
    const [user, setUser] = useState('');
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userStatus')));
    }, []);
console.log(user);

    return (
        <div className='flex items-center justify-between mb-12'>
            <div>
                <h2 className='text-4xl font-bold text-gray-800'>{user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User'} Dashboard</h2>
                <h3 className='text-xl text-gray-600'>
                    Welcome, <span className='font-semibold text-indigo-600'> {user.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : 'Guest'}
                    </span> 👋🏻
                </h3>
            </div>
            <button
                onClick={handleLogout}
                className='px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300'
            >
                Logout
            </button>
        </div>
    )
}

export default Header