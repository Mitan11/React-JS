import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import axios from 'axios'
import AdminDashboard from './components/AdminDashboard';
import UserDashBoard from './components/UserDashBoard';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [users, setUser] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


  const success = (msg) => toast.success(msg);

  const error = (msg) => toast.error(msg);

  // Check user login status and role from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userStatus'));
    if (savedUser) {
      setCurrentUser(savedUser);
      setLoginStatus(true);
    }
  }, []);

  // Fetch users data from API
  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      setUser(response.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  // Handle login form submission
  const handlesubmit = (username, password) => {
    const user = users.find(u => u.username === username || u.email === username);
    if (user && user.password === password) {
      setLoginStatus(true);
      setCurrentUser(user);
      localStorage.setItem('userStatus', JSON.stringify(user));
      success(`Logged in as ${user.username}`);
    } else {
      error('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear the user data and login status
    setLoginStatus(false);
    setCurrentUser(null);
    localStorage.removeItem('userStatus');
    success('Logged out successfully');
  };

  return (
    <div>
      <Toaster />
      {!loginStatus ? (<Login handlesubmit={handlesubmit} />) : (
        currentUser?.role === 'admin' ? <AdminDashboard handleLogout={handleLogout} /> : <UserDashBoard handleLogout={handleLogout} />
      )}

    </div>
  );
}

export default App;
