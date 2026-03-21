import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-20 relative">

      {/* Glass Background */}
      <div className="backdrop-blur-xl bg-white/40 border-t border-white/30 shadow-inner">
        
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Cake by Khushi
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Homemade eggless cakes crafted with love in Ahmedabad.
              Perfect for birthdays, celebrations, and sweet moments 💖
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li className="hover:text-pink-500 cursor-pointer">Home</li>
              <li className="hover:text-pink-500 cursor-pointer">Cakes</li>
              <li className="hover:text-pink-500 cursor-pointer">About</li>
              <li className="hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <p className="mt-4 text-gray-600 text-sm">
              📍 Ahmedabad, India
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              📞 +91 XXXXX XXXXX
            </p>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white text-sm shadow-md"
            >
              Chat on WhatsApp
            </motion.button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center py-4 text-gray-500 text-xs border-t border-white/30">
          © 2026 Cake by Khushi • Made with ❤️
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-100 via-white to-yellow-100 blur-3xl opacity-50"></div>

    </footer>
  );
}