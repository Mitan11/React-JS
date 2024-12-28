import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { userData, GoogleAuth, handleLogin, handleSignUp, handleOut } =
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
              <Home userData={userData} handleOut={handleOut} />
            )
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignUp={handleSignUp} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
