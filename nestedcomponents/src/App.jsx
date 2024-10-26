import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
