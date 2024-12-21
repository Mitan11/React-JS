import React from "react";

function Home({ user }) {

  const logout = ()=>{
    localStorage.removeItem('user');
    window.location.reload()
  }

  return (
    <div>
      <h2>{user.displayName}</h2>
      <button onClick={logout} >Logout</button>
    </div>
  );
}

export default Home;
