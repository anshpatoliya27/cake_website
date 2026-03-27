import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cakes", path: "/cakes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo — just the brand name */}
        <Link to="/" className="navbar-logo">
          <motion.span whileHover={{ scale: 1.02 }}>
            Cake by Khushi
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="navbar-link"
            >
              <motion.span whileHover={{ y: -2 }}>
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Right Side — Buttons */}
        <div className="navbar-actions">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/customize")}
            className="navbar-btn navbar-btn--outline"
          >
            Customize Cake
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="navbar-btn navbar-btn--primary"
          >
            Order Now
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="navbar-hamburger-bar"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="navbar-hamburger-bar"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="navbar-hamburger-bar"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="navbar-mobile-inner">
              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    className="navbar-mobile-link"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <div className="navbar-mobile-btns">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/customize");
                  }}
                  className="navbar-btn navbar-btn--outline navbar-btn--full"
                >
                  Customize Cake
                </button>
                <button className="navbar-btn navbar-btn--primary navbar-btn--full">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}