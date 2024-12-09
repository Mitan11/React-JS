import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import axios from 'axios'
import AdminDashboard from './components/AdminDashboard';
import UserDashBoard from './components/UserDashBoard';

function App() {
  const [users, setUser] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

      // Save login status and user info to localStorage
      localStorage.setItem('userStatus', JSON.stringify(user));
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear the user data and login status
    setLoginStatus(false);
    setCurrentUser(null);

    // Remove the user status from localStorage
    localStorage.removeItem('userStatus');
  };

  return (
    <>
      {!loginStatus ? (<Login handlesubmit={handlesubmit} />) : (
        currentUser?.role === 'admin' ? <AdminDashboard handleLogout={handleLogout} /> : <UserDashBoard handleLogout={handleLogout} />
      )}
      
    </>
  );
}

export default App;
