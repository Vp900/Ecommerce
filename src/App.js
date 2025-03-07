import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Shop from "./components/Shop";
import Blog from "./components/Blog";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
    
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Default Home Route */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
