import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Dummy Data ───
const CAKES_DATA = [
    {
        id: 1,
        name: "Belgian Chocolate Dream",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
        tag: "Best Seller",
        flavor: "Chocolate",
        type: "Birthday"
    },
    {
        id: 2,
        name: "Classic Vanilla Bean",
        price: "₹500",
        image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=600&fit=crop",
        tag: "New",
        flavor: "Vanilla",
        type: "Birthday"
    },
    {
        id: 3,
        name: "Strawberry Bliss",
        price: "₹550",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
        tag: "Popular",
        flavor: "Strawberry",
        type: "Theme"
    },
    {
        id: 4,
        name: "Dark Truffle Indulgence",
        price: "₹700",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
        tag: "Premium",
        flavor: "Chocolate",
        type: "Theme"
    },
    {
        id: 5,
        name: "Vanilla Raspberry Swirl",
        price: "₹580",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&h=600&fit=crop",
        tag: null,
        flavor: "Vanilla",
        type: "Photo"
    },
    {
        id: 6,
        name: "Fresh Fruit Exotica",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop",
        tag: "Fresh",
        flavor: "Strawberry",
        type: "Birthday"
    },
    {
        id: 7,
        name: "Chocolate Hazelnut Crunch",
        price: "₹750",
        image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=600&h=600&fit=crop",
        tag: "Signature",
        flavor: "Chocolate",
        type: "Birthday"
    },
    {
        id: 8,
        name: "Elegant Floral Vanilla",
        price: "₹800",
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop",
        tag: "Wedding",
        flavor: "Vanilla",
        type: "Theme"
    }
];

const FLAVORS = ["All", "Chocolate", "Vanilla", "Strawberry"];
const TYPES = ["All", "Birthday", "Theme", "Photo"];

import { useNavigate } from "react-router-dom";

export default function Cakes() {
    const navigate = useNavigate();
    // ─── Local State ───
    const [activeFlavor, setActiveFlavor] = useState("All");
    const [activeType, setActiveType] = useState("All");
    const [likedCakes, setLikedCakes] = useState(() => {
        const saved = localStorage.getItem("likedCakes");
        return saved ? JSON.parse(saved) : [];
    });
    const [savedCakes, setSavedCakes] = useState(() => {
        const saved = localStorage.getItem("savedCakes");
        return saved ? JSON.parse(saved) : [];
    });

    // Keep localStorage in sync
    useEffect(() => {
        localStorage.setItem("likedCakes", JSON.stringify(likedCakes));
    }, [likedCakes]);

    useEffect(() => {
        localStorage.setItem("savedCakes", JSON.stringify(savedCakes));
    }, [savedCakes]);

    // Handlers
    const toggleLike = (id) => {
        setLikedCakes(prev => prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]);
    };

    const toggleSave = (id) => {
        setSavedCakes(prev => prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]);
    };

    // Filter Logic
    const filteredCakes = CAKES_DATA.filter((cake) => {
        const matchFlavor = activeFlavor === "All" || cake.flavor === activeFlavor;
        const matchType = activeType === "All" || cake.type === activeType;
        return matchFlavor && matchType;
    });

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">

                {/* ─── Page Intro ─── */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-[#1a1a2e] mb-4 tracking-tight"
                    >
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Cakes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg md:text-xl font-medium"
                    >
                        Freshly baked, eggless, and made with love
                    </motion.p>
                </div>

                {/* ─── Filter Bar ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 bg-white/40 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(214,51,108,0.05)]"
                >
                    {/* Flavor Filter */}
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider pl-2">Flavor</span>
                        <div className="flex gap-2">
                            {FLAVORS.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFlavor(f)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeFlavor === f
                                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105"
                                        : "bg-white/60 text-gray-600 hover:bg-white hover:text-pink-500"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider visible only on md+ */}
                    <div className="hidden md:block w-px h-10 bg-pink-500/20"></div>

                    {/* Type Filter */}
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider pl-2">Type</span>
                        <div className="flex gap-2">
                            {TYPES.map(t => (
                                <button
                                    key={t}
                                    onClick={() => setActiveType(t)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeType === t
                                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105"
                                        : "bg-white/60 text-gray-600 hover:bg-white hover:text-pink-500"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ─── Cake Grid ─── */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredCakes.length > 0 ? (
                            filteredCakes.map((cake, index) => (
                                <motion.div
                                    key={cake.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-white/60 backdrop-blur-xl rounded-[24px] border border-white/80 shadow-[0_4px_24px_rgba(214,51,108,0.06)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_20px_40px_rgba(214,51,108,0.12)] cursor-pointer"
                                >
                                    {/* Top Badges & Actions overlay */}
                                    <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start pointer-events-none">
                                        {/* Tag */}
                                        <div className="flex flex-col gap-2">
                                            {cake.tag && (
                                                <span className="bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg pointer-events-auto">
                                                    {cake.tag}
                                                </span>
                                            )}
                                        </div>

                                        {/* Actions (Like & Save) */}
                                        <div className="flex flex-col gap-2 pointer-events-auto">
                                            <motion.button
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => { e.stopPropagation(); toggleLike(cake.id); }}
                                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-pink-500 hover:bg-white transition-colors"
                                            >
                                                {likedCakes.includes(cake.id) ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => { e.stopPropagation(); toggleSave(cake.id); }}
                                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-indigo-500 hover:bg-white transition-colors"
                                            >
                                                {savedCakes.includes(cake.id) ? <FaBookmark className="text-xl" /> : <FaRegBookmark className="text-xl" />}
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Image wrap */}
                                    <div className="relative h-64 sm:h-72 overflow-hidden bg-pink-100/50">
                                        <img
                                            src={cake.image}
                                            alt={cake.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Gradient overlay to ensure text/badges are visible */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none"></div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-[17px] font-bold text-[#1a1a2e] leading-snug flex-1 pr-2">
                                                {cake.name}
                                            </h3>
                                            <span className="font-extrabold text-xl text-pink-500">
                                                {cake.price}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 mt-auto pt-4">
                                            <span className="text-xs font-semibold text-gray-400 bg-white/80 px-3 py-1 rounded-md border border-gray-100">
                                                {cake.flavor}
                                            </span>
                                            <span className="text-xs font-semibold text-gray-400 bg-white/80 px-3 py-1 rounded-md border border-gray-100">
                                                {cake.type}
                                            </span>
                                        </div>

                                        {/* Order Button that reveals on hover */}
                                        <motion.button
                                            whileTap={{ scale: 0.97 }}
                                            className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-sm shadow-md hover:shadow-xl hover:shadow-pink-500/20 transition-all opacity-100 lg:opacity-0 lg:-translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 duration-300"
                                            onClick={(e) => { e.stopPropagation(); navigate("/customize"); }}
                                        >
                                            Order Now
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Empty State
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center flex flex-col items-center"
                            >
                                <div className="text-6xl mb-4">🥲</div>
                                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">No cakes found</h3>
                                <p className="text-gray-500">Try changing your filters to see more delicious options.</p>
                                <button
                                    onClick={() => { setActiveFlavor("All"); setActiveType("All"); }}
                                    className="mt-6 px-6 py-2 bg-white rounded-full font-bold text-pink-500 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    Clear Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </main>

            <Footer />
        </div>
    );
}
