import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Kept for mobile menu CSS

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Cakes", path: "/cakes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  const checkActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    if (path === "/" && location.pathname === "/") return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out border-b ${scrolled
        ? "bg-white/40 backdrop-blur-[40px] saturate-[200%] shadow-[0_4px_40px_rgba(214,51,108,0.08)] border-white/50 py-2"
        : "bg-gradient-to-b from-[#ffeef3]/80 to-transparent backdrop-blur-[5px] border-transparent pt-4 pb-0"
      }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">

        {/* ─── LOGO (Big Brand Aesthetic) ─── */}
        <Link to="/" className="flex flex-shrink-0 group outline-none">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-['Playfair_Display'] text-[26px] md:text-[30px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">
              CAKE <span className="font-['Outfit'] font-normal italic text-pink-400 text-[20px] md:text-[24px] mx-1">by</span> KHUSHI
            </h1>
            <span className="font-['Outfit'] text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-rose-300 font-extrabold mt-1 ml-0.5">
              Premium Bakery
            </span>
          </motion.div>
        </Link>

        {/* ─── DESKTOP NAVIGATION ─── */}
        <nav className="hidden lg:flex items-center gap-8 pl-12">
          {navLinks.map((item, i) => {
            const isActive = checkActive(item.path);
            return (
              <Link
                key={i}
                to={item.path}
                className="relative px-2 py-2 group outline-none"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`relative z-10 font-['Outfit'] text-[15px] font-bold tracking-wide transition-colors duration-300 ${isActive
                      ? "text-rose-500"
                      : "text-[#1a1a2e] group-hover:text-pink-500"
                    }`}
                >
                  {item.name}
                </motion.span>

                {/* Active Indicator Line Effect */}
                {isActive ? (
                  <motion.div
                    layoutId="desktop-nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 to-rose-400 rounded-full shadow-[0_2px_8px_rgba(214,51,108,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-pink-200/50 rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ─── RIGHT SIDE BUTTONS ─── */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/customize")}
            className="px-6 py-2.5 rounded-full font-['Outfit'] font-bold text-sm tracking-wide text-rose-500 bg-white/60 backdrop-blur-md border border-white hover:bg-white hover:shadow-md hover:shadow-pink-100 transition-all"
          >
            Customize
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/menu")}
            className="px-7 py-2.5 rounded-full font-['Outfit'] font-bold text-sm tracking-wide text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-[0_8px_20px_rgba(214,51,108,0.25)] hover:shadow-[0_12px_25px_rgba(214,51,108,0.4)] transition-all"
          >
            Order Now
          </motion.button>
        </div>

        {/* ─── MOBILE HAMBURGER ─── */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] relative z-50 bg-white/40 backdrop-blur-md rounded-full shadow-sm border border-white/50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-[18px] h-[2px] bg-rose-500 rounded-full origin-center"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-[18px] h-[2px] bg-rose-500 rounded-full origin-center"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-[18px] h-[2px] bg-rose-500 rounded-full origin-center"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-[40px] saturate-[200%] border-b border-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex flex-col py-6 px-8 gap-1 border-t border-rose-100">
              {navLinks.map((item, i) => {
                const isActive = checkActive(item.path);
                return (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="relative py-3 group"
                  >
                    <motion.div
                      className={`font-['Outfit'] text-[22px] font-bold tracking-tight flex items-center justify-between ${isActive ? "text-rose-500" : "text-[#1a1a2e]"
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      {item.name}
                      {isActive && <span className="text-xl">✨</span>}
                    </motion.div>
                  </Link>
                );
              })}

              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-pink-100">
                <button
                  onClick={() => { setMenuOpen(false); navigate("/customize"); }}
                  className="w-full py-4 rounded-xl border-2 border-pink-200 text-pink-500 font-bold text-[16px] bg-white hover:bg-pink-50 transition-colors shadow-sm"
                >
                  Customize Cake
                </button>
                <button
                  onClick={() => { setMenuOpen(false); navigate("/menu"); }}
                  className="w-full py-4 rounded-xl text-white font-bold text-[16px] bg-gradient-to-r from-pink-500 to-rose-400 shadow-[0_8px_20px_rgba(214,51,108,0.25)]"
                >
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