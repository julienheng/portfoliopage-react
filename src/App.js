import { motion } from "framer-motion";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <SocialLinks />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
