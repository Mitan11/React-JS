// src/App.js
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Components/Login";
import Home from "./Components/Home"; // Assuming you have this component
import Signup from "./Components/Signup"; // Assuming you have this component
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { setUserData, userData, GoogleAuth, handleLogin, handleSignUp } =
    useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !userData ? (
              <Login GoogleAuth={GoogleAuth} handleLogin={handleLogin} />
            ) : (
              <Home userData={userData} setUserData={setUserData}/>
            )
          }
        />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/signup"
          element={<Signup handleSignUp={handleSignUp} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
