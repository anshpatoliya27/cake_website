import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// Dummy Blog Data
const BLOG_POSTS = [
    {
        id: 1,
        title: "5 Secrets to the Perfect Fluffy Vanilla Sponge",
        excerpt: "Discover the essential techniques to achieve a melt-in-your-mouth sponge cake without eggs.",
        category: "Baking Guide",
        date: "Mar 12, 2026",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Top 10 Birthday Cake Trends for This Year",
        excerpt: "From vintage piping to minimalist Korean cakes, see what's dominating celebrations right now.",
        category: "Trends",
        date: "Mar 05, 2026",
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        title: "How to Keep Your Cakes Moist for Days",
        excerpt: "No one likes a dry slice. Here are our bakery secrets for locking in moisture safely.",
        category: "Cake Tips",
        date: "Feb 28, 2026",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Amazing Kids Birthday Theme Ideas",
        excerpt: "Planning a party? Combine these magical cake designs with matching party decors.",
        category: "Birthday Ideas",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Understanding Chocolate: Cocoa vs Compound",
        excerpt: "Why premium chocolate makes a world of difference in your ganache and cake batters.",
        category: "Baking Guide",
        date: "Feb 02, 2026",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Beautiful Buttercream Flowing Techniques",
        excerpt: "Elevate your aesthetic with piping techniques that look effortlessly elegant and chic.",
        category: "Trends",
        date: "Jan 18, 2026",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop"
    }
];

const CATEGORIES = ["All", "Cake Tips", "Birthday Ideas", "Baking Guide", "Trends"];

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter Logic
    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchCategory = activeCategory === "All" || post.category === activeCategory;
        const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200 text-[#1a1a2e] overflow-x-hidden">
            <Navbar />

            <main className="pt-28 pb-20">

                {/* ════════════════════════════════════
            1. HERO SECTION
            ════════════════════════════════════ */}
                <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
                    {/* Decorative softly blurred background blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-pink-300/30 to-transparent rounded-full blur-[80px] pointer-events-none" />

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="relative z-10 max-w-2xl mx-auto"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 border border-white font-semibold text-rose-500 text-sm mb-6 backdrop-blur-md shadow-sm">
                            Discover & Learn
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Blog</span> 🍰
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                            Tips, ideas & beautiful stories straight from our kitchen.
                        </p>
                    </motion.div>
                </section>

                {/* ════════════════════════════════════
            2. SEARCH & CATEGORY FILTER
            ════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-6 mb-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/40 backdrop-blur-xl p-4 md:p-5 rounded-[24px] border border-white/60 shadow-[0_8px_32px_rgba(214,51,108,0.05)]"
                    >
                        {/* Search Input */}
                        <div className="relative w-full md:w-1/3">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/70 border border-white focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100/50 rounded-full pl-11 pr-4 py-3 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                            />
                        </div>

                        {/* Category Chips - Scrollable on mobile */}
                        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                            ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105 border border-pink-400"
                                            : "bg-white/60 text-gray-600 hover:bg-white hover:text-pink-500 border border-transparent"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ════════════════════════════════════
            3. BLOG GRID
            ════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-6 min-h-[500px]">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <motion.article
                                        key={post.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
                                        transition={{ duration: 0.4 }}
                                        whileHover={{ y: -8 }}
                                        className="group bg-white/60 backdrop-blur-xl rounded-[28px] border border-white/80 shadow-[0_4px_24px_rgba(214,51,108,0.06)] overflow-hidden flex flex-col transition-shadow hover:shadow-[0_20px_40px_rgba(214,51,108,0.12)] cursor-pointer"
                                    >
                                        {/* Image Area with Zoom effect */}
                                        <div className="relative h-56 overflow-hidden bg-pink-100/50">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            {/* Category Badge overlay */}
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="bg-white/90 backdrop-blur-md text-pink-600 text-[11px] font-black uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-7 flex flex-col flex-1">
                                            <div className="text-xs font-bold text-gray-400 mb-3 tracking-widest uppercase">
                                                {post.date}
                                            </div>

                                            <h3 className="text-[20px] font-bold text-[#1a1a2e] leading-snug mb-3 group-hover:text-pink-500 transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-2">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-pink-100/50">
                                                <span className="inline-flex items-center gap-2 font-bold text-sm text-pink-500 group-hover:text-rose-600 transition-colors">
                                                    Read Article
                                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))
                            ) : (
                                /* Empty State / No Results */
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full py-20 text-center flex flex-col items-center"
                                >
                                    <div className="text-6xl mb-4 opacity-70">🔍</div>
                                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">No articles found</h3>
                                    <p className="text-gray-500 mb-6">We couldn't find any posts matching "{searchTerm}".</p>
                                    <button
                                        onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                                        className="px-6 py-2 bg-white rounded-full font-bold text-pink-500 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        Clear Filter
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
