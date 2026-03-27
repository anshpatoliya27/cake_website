import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy Data
const MENU_DATA = [
    {
        id: 1,
        name: "Classic Chocolate Truffle",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
        category: "Chocolate",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Wildberry Cheesecake",
        price: "₹850",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=600&fit=crop",
        category: "Cheesecake",
        tag: "New"
    },
    {
        id: 3,
        name: "Magical Unicorn Birthday",
        price: "₹1200",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&h=600&fit=crop",
        category: "Birthday",
        tag: "Popular"
    },
    {
        id: 4,
        name: "Gold Foil Premium Velvet",
        price: "₹1500",
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop",
        category: "Premium",
        tag: "Signature"
    },
    {
        id: 5,
        name: "Custom Memory Photo Cake",
        price: "₹750",
        image: "https://images.unsplash.com/photo-1621236378699-8587fb563a62?w=600&h=600&fit=crop",
        category: "Photo Cakes",
        tag: ""
    },
    {
        id: 6,
        name: "Hazelnut Nutella Overload",
        price: "₹800",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
        category: "Chocolate",
        tag: "Premium"
    },
    {
        id: 7,
        name: "Biscoff Lotus Cheesecake",
        price: "₹900",
        image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?w=600&h=600&fit=crop",
        category: "Cheesecake",
        tag: "Best Seller"
    },
    {
        id: 8,
        name: "Kids Superhero Birthday",
        price: "₹1100",
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=600&fit=crop",
        category: "Birthday",
        tag: ""
    }
];

const CATEGORIES = ["All", "Chocolate", "Birthday", "Photo Cakes", "Premium", "Cheesecake"];

export default function Menu() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All");

    const [likedItems, setLikedItems] = useState(() => {
        const saved = localStorage.getItem("menuLikedItems");
        return saved ? JSON.parse(saved) : [];
    });
    const [savedItems, setSavedItems] = useState(() => {
        const saved = localStorage.getItem("menuSavedItems");
        return saved ? JSON.parse(saved) : [];
    });

    // Sync to localStorage
    useEffect(() => localStorage.setItem("menuLikedItems", JSON.stringify(likedItems)), [likedItems]);
    useEffect(() => localStorage.setItem("menuSavedItems", JSON.stringify(savedItems)), [savedItems]);

    const toggleLike = (id) => {
        setLikedItems(prev => prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]);
    };

    const toggleSave = (id) => {
        setSavedItems(prev => prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]);
    };

    // Filter Items
    const filteredCakes = MENU_DATA.filter(cake =>
        activeCategory === "All" ? true : cake.category === activeCategory
    );

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">

                {/* ════════════════════════════════════
            1. HERO SECTION
            ════════════════════════════════════ */}
                <section className="text-center mb-12 relative">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-0 right-[20%] text-4xl hidden md:block opacity-60 pointer-events-none">🧁</motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-4 left-[20%] text-4xl hidden md:block opacity-60 pointer-events-none">✨</motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-[#1a1a2e] mb-4 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Menu</span> 🍰
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg md:text-xl font-medium"
                    >
                        Freshly baked, eggless, and crafted with love.
                    </motion.p>
                </section>

                {/* ════════════════════════════════════
            2. CATEGORY TABS
            ════════════════════════════════════ */}
                <section className="mb-14 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-2"
                    >
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                        ? "bg-pink-500 text-white shadow-[0_8px_20px_rgba(214,51,108,0.3)] scale-105 border border-pink-400"
                                        : "bg-white/60 text-gray-600 hover:bg-white hover:text-pink-500 border border-white/80 shadow-[0_4px_12px_rgba(214,51,108,0.03)]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </section>

                {/* ════════════════════════════════════
            3. MENU GRID
            ════════════════════════════════════ */}
                <section>
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredCakes.length > 0 ? (
                                filteredCakes.map((cake, index) => (
                                    <motion.div
                                        key={cake.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group relative bg-white/60 backdrop-blur-xl rounded-[28px] border border-white/80 shadow-[0_4px_24px_rgba(214,51,108,0.06)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_20px_40px_rgba(214,51,108,0.12)] cursor-pointer"
                                    >
                                        {/* Top Actions overlay */}
                                        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start pointer-events-none">
                                            {/* Tag */}
                                            <div className="flex flex-col gap-2">
                                                {cake.tag && (
                                                    <span className="bg-pink-500 text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-lg pointer-events-auto">
                                                        {cake.tag}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Interaction Buttons (Like & Save) */}
                                            <div className="flex flex-col gap-2 pointer-events-auto">
                                                <motion.button
                                                    whileHover={{ scale: 1.15 }}
                                                    whileTap={{ scale: 0.85 }}
                                                    onClick={(e) => { e.stopPropagation(); toggleLike(cake.id); }}
                                                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-pink-500 hover:bg-white transition-colors"
                                                >
                                                    {likedItems.includes(cake.id) ? <FaHeart className="text-[20px]" /> : <FaRegHeart className="text-[20px]" />}
                                                </motion.button>

                                                <motion.button
                                                    whileHover={{ scale: 1.15 }}
                                                    whileTap={{ scale: 0.85 }}
                                                    onClick={(e) => { e.stopPropagation(); toggleSave(cake.id); }}
                                                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-indigo-500 hover:bg-white transition-colors"
                                                >
                                                    {savedItems.includes(cake.id) ? <FaBookmark className="text-[18px]" /> : <FaRegBookmark className="text-[18px]" />}
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Image wrap with Zoom effect */}
                                        <div className="relative h-64 sm:h-[280px] overflow-hidden bg-pink-100/50 rounded-t-[28px] md:m-1 md:rounded-[24px]">
                                            <img
                                                src={cake.image}
                                                alt={cake.name}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            {/* Gradient overlay inside image to ensure text is visible if image is bright */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                                        </div>

                                        {/* Content Body */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="text-xs font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                                {cake.category}
                                            </div>

                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-[18px] font-bold text-[#1a1a2e] leading-snug flex-1 pr-3">
                                                    {cake.name}
                                                </h3>
                                                <span className="font-extrabold text-[22px] text-pink-500 leading-none">
                                                    {cake.price}
                                                </span>
                                            </div>

                                            {/* Action Button */}
                                            <div className="mt-auto">
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={(e) => { e.stopPropagation(); navigate("/customize"); }}
                                                    className="w-full py-3.5 rounded-xl border-2 border-pink-200 text-pink-500 font-bold text-[15px] bg-white hover:bg-pink-50 hover:border-pink-300 transition-colors shadow-sm"
                                                >
                                                    Customize
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                /* Empty State */
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full py-20 text-center flex flex-col items-center"
                                >
                                    <div className="text-6xl mb-4">🥲</div>
                                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">No cakes found</h3>
                                    <p className="text-gray-500">Try changing your category filters.</p>
                                    <button
                                        onClick={() => setActiveCategory("All")}
                                        className="mt-6 px-6 py-2 bg-white rounded-full font-bold text-pink-500 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        View All Cakes
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
