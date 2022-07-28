import React from "react";
import "./App.css";
import Navbar from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import FleshCards from "./pages/flashCards";
import SignUp from "./pages/signUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="nav-bar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/flash-cards" element={<FleshCards />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
