import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CakeCustomizer from "./pages/CakeCustomizer";
import Cakes from "./pages/Cakes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/customize" element={<CakeCustomizer />} />
    </Routes>
  );
}

export default App;