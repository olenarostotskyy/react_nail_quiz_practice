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
import LoginForm from "./pages/LoginForm";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
// import axios from "axios";
// import { useEffect, useState } from "react";

function App() {
  // const [usersData, setUser] = useState([]);

  // //post new user
  // const makeNewUser = (data) => {
  //   axios
  //     .post("https://inspirational-board.herokuapp.com/boards", data)
  //     .then(() => {
  //       getBoardsFromAPI();
  //     })
  //     .catch((error) => {
  //       console.log("Can't make a new Board.", error);
  //     });
  // };

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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/test" element={<Test />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
