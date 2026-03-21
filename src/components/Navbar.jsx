import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      
      {/* Glass Navbar */}
      <div className="backdrop-blur-md bg-white/60 border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent cursor-pointer"
          >
            Cake by Khushi
          </motion.h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {["Home", "Cakes", "About", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -2 }}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Order Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-md hover:shadow-lg transition"
            >
              Order Now
            </motion.button>

            {/* Mobile Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md px-6 py-6 space-y-4 shadow-lg"
        >
          {["Home", "Cakes", "About", "Contact"].map((item, i) => (
            <a key={i} href="#" className="block text-gray-700 text-lg">
              {item}
            </a>
          ))}

          <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-full">
            Order Now
          </button>
        </motion.div>
      )}
    </header>
  );
}