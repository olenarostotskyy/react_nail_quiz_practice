import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FlashCards from "./pages/flashCards";
import SignUp from "./pages/signUp";
import Footer from "./components/Footer";
import Test from "./pages/Test";

const apiUrl = "http://127.0.0.1:5000/questions";

function App() {
  return (
    <div>
      <div className="nav-bar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/flash-cards" element={<FlashCards />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
