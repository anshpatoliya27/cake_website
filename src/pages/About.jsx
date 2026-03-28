import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Cream Drip SVG (Frosting separator) ───
function CreamDrip({ fromColor = "#fff5f7", toColor = "#ffffff", className = "" }) {
    return (
        <div className={`relative w-full leading-none z-10 ${className}`} style={{ marginTop: '-2px', marginBottom: '-2px' }}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <rect width="1440" height="60" fill={fromColor} />
                <path d="M0,60 C60,60 90,60 120,62 C150,65 160,90 180,95 C200,100 210,80 240,60 C280,60 320,60 360,60 C380,60 390,60 420,65 C450,80 460,110 480,115 C500,110 510,75 540,60 C600,60 660,60 720,60 C740,60 750,62 770,70 C790,85 800,100 820,100 C840,100 850,78 870,60 C930,60 990,60 1020,60 C1040,60 1050,65 1070,75 C1090,90 1100,105 1120,105 C1140,105 1150,85 1170,60 C1230,60 1290,60 1350,60 C1370,60 1380,62 1400,68 C1420,80 1430,90 1440,85 L1440,0 L0,0 Z" fill={fromColor} />
                <path d="M0,60 C60,60 90,60 120,62 C150,65 160,90 180,95 C200,100 210,80 240,60 C280,60 320,60 360,60 C380,60 390,60 420,65 C450,80 460,110 480,115 C500,110 510,75 540,60 C600,60 660,60 720,60 C740,60 750,62 770,70 C790,85 800,100 820,100 C840,100 850,78 870,60 C930,60 990,60 1020,60 C1040,60 1050,65 1070,75 C1090,90 1100,105 1120,105 C1140,105 1150,85 1170,60 C1230,60 1290,60 1350,60 C1370,60 1380,62 1400,68 C1420,80 1430,90 1440,85 L1440,120 L0,120 Z" fill={toColor} />
            </svg>
        </div>
    );
}

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// Data
const FEATURES = [
    { icon: "🥚", title: "100% Eggless", desc: "Pure vegetarian joy in every single bite without compromising on texture." },
    { icon: "🧁", title: "Freshly Baked", desc: "Baked to order in small batches so your cake is always perfectly fresh." },
    { icon: "✨", title: "Premium Ingredients", desc: "We use only high-end imported cocoa, real fruit, and rich butter." },
    { icon: "🏡", title: "Made in Ahmedabad", desc: "A proud homegrown local brand, bringing smiles to our neighborhood." }
];

const PROCESS = [
    { step: "01", title: "Choose Your Cake", icon: "🍰" },
    { step: "02", title: "Customize It", icon: "🎨" },
    { step: "03", title: "We Bake Fresh", icon: "👩‍🍳" },
    { step: "04", title: "Pickup & Enjoy", icon: "🎉" }
];

const PHILOSOPHIES = [
    "We don't cut corners. A truly premium cake isn't just about how it looks on the outside—it's about the impeccable hygiene, the finest ingredients, and the exact science of baking it to absolute perfection. Quality is our ultimate recipe.",
    "Every creation tells a story. From the selection of perfectly ripe fruits to the careful tempering of rich Belgian cocoa, we believe that the soul of our baking lives in the tiny details. Your joy is our motivation.",
    "Baking is our language of love. Our exclusive eggless recipes are born from countless hours of passionate refinement to ensure every slice is just as light, fluffy, and decadent as you deserve."
];

export default function About() {
    const navigate = useNavigate();
    const [activePhilosophy, setActivePhilosophy] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setActivePhilosophy((prev) => (prev + 1) % PHILOSOPHIES.length);
        }, 5000); // changes every 5 seconds
        return () => clearInterval(interval);
    }, [autoPlay]);

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200 text-[#1a1a2e] overflow-x-hidden">
            <Navbar />

            <main className="pt-24 pb-0">

                {/* ════════════════════════════════════
            1. HERO SECTION
            ════════════════════════════════════ */}
                <section className="relative w-full max-w-[1400px] mx-auto px-6 pt-8 pb-20 md:pt-10 md:pb-24 text-center overflow-hidden min-h-[60vh] flex flex-col justify-center items-center">

                    {/* --- BACKGROUND ENHANCEMENTS --- */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
                    <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-white/60 rounded-full blur-[70px] pointer-events-none z-0" />

                    {/* --- BACKGROUND BLOBS FOR DEPTH --- */}
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-rose-200/20 rounded-[40%] blur-[60px] pointer-events-none z-0"
                    />
                    <motion.div
                        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-pink-300/20 rounded-[30%] blur-[80px] pointer-events-none z-0"
                    />

                    {/* --- FLOATING ELEMENTS --- */}
                    {/* Left side floaters */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute hidden md:flex items-center justify-center top-[15%] left-[5%] xl:left-[12%] w-24 h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(214,51,108,0.15)] border border-white/80 z-10 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <span className="text-5xl drop-shadow-md">🍰</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute hidden md:flex items-center justify-center bottom-[20%] left-[2%] xl:left-[8%] w-20 h-20 bg-white/50 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(214,51,108,0.1)] border border-white/60 z-10 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <span className="text-4xl drop-shadow-md">🍓</span>
                    </motion.div>

                    {/* Right side floaters */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, -12, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute hidden md:flex items-center justify-center top-[12%] right-[5%] xl:right-[12%] w-28 h-28 bg-white/60 backdrop-blur-md rounded-[32px] shadow-[0_8px_30px_rgba(214,51,108,0.15)] border border-white/80 z-10 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <span className="text-6xl drop-shadow-md">🧁</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, 20, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute hidden md:flex items-center justify-center bottom-[25%] right-[2%] xl:right-[8%] w-[72px] h-[72px] bg-white/50 backdrop-blur-md rounded-[20px] shadow-[0_8px_30px_rgba(214,51,108,0.1)] border border-white/60 z-10 hover:scale-110 transition-transform cursor-pointer"
                    >
                        <span className="text-3xl drop-shadow-md">🍫</span>
                    </motion.div>

                    {/* Small accent sparkles */}
                    <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[35%] left-[20%] xl:left-[25%] text-pink-400 text-2xl z-0">✨</motion.div>
                    <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-[30%] right-[22%] xl:right-[28%] text-rose-400 text-3xl z-0">✦</motion.div>


                    {/* --- MAIN CONTENT --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative z-20 max-w-[900px] mx-auto p-6 md:p-12 rounded-[40px] bg-white/10 backdrop-blur-sm shadow-[0_0_80px_rgba(214,51,108,0.08)] border border-white/20"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/80 border border-white/80 font-bold text-rose-500 text-sm mb-8 backdrop-blur-lg shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            Premium Homemade Bakery
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-[84px] font-black mb-8 leading-[1.1] tracking-tight text-[#1a1a2e]"
                        >
                            Made with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                                Love
                            </span>,<br />
                            Baked with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A54] to-[#FF9B00] drop-shadow-[0_2px_10px_rgba(255,42,84,0.3)] italic pr-2">
                                Passion
                            </span> 💖
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-[22px] text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto"
                        >
                            We believe every celebration deserves a centerpiece that looks spectacular and tastes unforgettable. Welcome to our world of premium homemade eggless baking.
                        </motion.p>
                    </motion.div>
                </section>

                <CreamDrip fromColor="#ffeef3" toColor="#ffffff" />

                <div className="bg-white">
                    {/* ════════════════════════════════════
                2. OUR STORY SECTION
                ════════════════════════════════════ */}
                    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
                            {/* Text Side */}
                            <motion.div
                                className="flex-1 space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold">The Story of <br /><span className="text-pink-500">Cake by Khushi</span></h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full my-6"></div>
                                <p className="text-gray-600 leading-relaxed text-[17px]">
                                    What started as a simple passion for baking in a home kitchen has blossomed into a beloved local brand. I wanted to solve a problem I saw too often: finding high-quality, 100% eggless cakes that didn't compromise on that light, fluffy, melt-in-your-mouth texture.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-[17px]">
                                    Every single cake that leaves our kitchen in Ahmedabad is crafted entirely by hand. No mass production. No artificial preservatives. Just honest, premium ingredients and a genuine love for the art of pastry.
                                </p>
                                <div className="pt-4 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-2xl shadow-sm border border-white">
                                        👩‍🍳
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Khushi</h4>
                                        <p className="text-sm text-gray-500 font-medium tracking-wide">FOUNDER & BAKER</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                className="flex-1 w-full"
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative">
                                    {/* Decorative border/backdrop */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-rose-200 rounded-[32px] transform rotate-3 scale-105 opacity-50 blur-sm"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?w=800&h=900&fit=crop"
                                        alt="Baker preparing cake"
                                        className="relative rounded-[32px] object-cover w-full h-[500px] shadow-2xl border-4 border-white/80"
                                    />

                                    {/* Floating badge */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgba(214,51,108,0.15)] border border-white"
                                    >
                                        <p className="text-3xl font-black text-pink-500 mb-1">100%</p>
                                        <p className="text-sm font-bold text-gray-600 tracking-wider">HOMEMADE</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>

                <CreamDrip fromColor="#ffffff" toColor="#ffeef3" />

                {/* ════════════════════════════════════
            3. WHY CHOOSE US
            ════════════════════════════════════ */}
                <section className="py-20 bg-white/40 backdrop-blur-md border-y border-white/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We don't just bake cakes; we craft experiences. Here is what makes our bakery special.</p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {FEATURES.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white shadow-[0_4px_20px_rgba(214,51,108,0.05)] hover:shadow-[0_12px_30px_rgba(214,51,108,0.1)] transition-all group"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            4. PROCESS SECTION (HOW IT WORKS)
            ════════════════════════════════════ */}
                <section className="py-20 max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    </motion.div>

                    {/* Steps Timeline Layout */}
                    <div className="relative">
                        {/* The connector line (hidden on mobile) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 -translate-y-1/2 z-0"></div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {PROCESS.map((p, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(214,51,108,0.12)] flex flex-col items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                        <span className="text-3xl mb-1">{p.icon}</span>
                                    </div>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[100px] font-black text-pink-500/5 -z-10 leading-none select-none">
                                        {p.step}
                                    </div>
                                    <h3 className="text-xl font-bold">{p.title}</h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            5. PRODUCT PHILOSOPHY
            ════════════════════════════════════ */}
                <section className="py-24 bg-[#1a1a2e] text-white relative overflow-hidden mt-10 rounded-t-[40px] md:rounded-t-[80px]">
                    {/* Subtle background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pink-500/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Philosophy</h2>

                            <div className="h-[220px] md:h-[140px] relative flex items-center justify-center w-full">
                                <AnimatePresence mode="wait">
                                    <motion.blockquote
                                        key={activePhilosophy}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute text-xl md:text-2xl font-light italic text-gray-300 leading-relaxed w-full px-4"
                                    >
                                        "{PHILOSOPHIES[activePhilosophy]}"
                                    </motion.blockquote>
                                </AnimatePresence>
                            </div>

                            <div className="mt-8 flex justify-center gap-4 text-2xl">
                                {PHILOSOPHIES.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setActivePhilosophy(idx);
                                            setAutoPlay(false);
                                        }}
                                        className={`transition-all duration-300 hover:scale-125 focus:outline-none ${activePhilosophy === idx
                                            ? "text-pink-500 scale-125 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]"
                                            : "text-gray-600 hover:text-pink-400"
                                            }`}
                                        aria-label={`Go to philosophy slide ${idx + 1}`}
                                    >
                                        ✦
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            6. CTA SECTION
            ════════════════════════════════════ */}
                <section className="bg-white/80 backdrop-blur-sm py-20 px-6 text-center">
                    <motion.div
                        className="max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let us make your moments sweeter 🎉</h2>
                        <p className="text-gray-500 mb-10 text-lg">Whether it's a grand birthday or a quiet sweet craving, we have the perfect cake waiting for you.</p>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/customize")}
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-lg shadow-[0_10px_30px_rgba(214,51,108,0.3)] hover:shadow-[0_15px_40px_rgba(214,51,108,0.4)] transition-shadow"
                        >
                            ✨ Initialize Your Order
                        </motion.button>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
