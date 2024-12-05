import React from 'react'

function AdminDashboard({handleLogout}) {
  return (
    <div>AdminDashboard
       <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default AdminDashboard