import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;