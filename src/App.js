import { motion } from "framer-motion";
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

      <Experience />
      <Contact />
      <SocialLinks />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
