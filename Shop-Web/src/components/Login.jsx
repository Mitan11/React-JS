import React, { useState } from 'react';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router';


function Login({ handlesubmit }) {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});

    const validate = () => {
        const newErrors = {};

        if (username === '') newErrors.username = 'Username is required';
        if (password === '') newErrors.password = 'Password is required';

        setError(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const submit = (e) => {
        e.preventDefault();
        if (validate()) { 
            handlesubmit(username, password);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-gray-900">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img
                            className="w-auto h-7 sm:h-8"
                            src="https://merakiui.com/images/logo.svg"
                            alt=""
                        />
                    </div>
                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                        Welcome Back
                    </h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                        Login or create account
                    </p>
                    <form onSubmit={(e) => submit(e)}>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 dark:bg-gray-900 dark:text-gray-300 placeholder-gray-500 bg-white border rounded-lg  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Username or Email"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                            {error.username && <span className="text-red-500 text-sm">{error.username}</span>}
                        </div>
                        <div className="w-full mt-4 relative">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                aria-label="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-4 flex items-center text-gray-600 dark:text-gray-400"
                                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                            >
                                {showPassword ? <BiHide /> : <BiShowAlt />}
                            </button>
                            {error.password && <span className="text-red-500 text-sm">{error.password}</span>}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a
                                href="#"
                                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                            >
                                Forget Password?
                            </a>
                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">
                        Don't have an account?{" "}
                    </span>
                    <Link to="/signup">
                        <button
                            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                        >
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
