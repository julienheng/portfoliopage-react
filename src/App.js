import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
