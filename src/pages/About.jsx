import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200 text-[#1a1a2e] overflow-x-hidden">
            <Navbar />

            <main className="pt-28 pb-0">

                {/* ════════════════════════════════════
            1. HERO SECTION
            ════════════════════════════════════ */}
                <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:py-24 text-center">
                    {/* Decorative floating blurred blobs */}
                    <div className="absolute top-10 left-10 w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-300/30 rounded-full blur-3xl pointer-events-none" />

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 border border-white font-semibold text-rose-500 text-sm mb-6 backdrop-blur-md shadow-sm">
                            Our Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                            Made with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Love</span>,<br />
                            Baked with Passion 💖
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
                            We believe every celebration deserves a centerpiece that looks spectacular and tastes unforgettable. Welcome to our world of premium homemade eggless baking.
                        </p>
                    </motion.div>
                </section>

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
                            <blockquote className="text-xl md:text-2xl font-light italic text-gray-300 leading-relaxed">
                                "We don't cut corners. A truly premium cake isn't just about how it looks on the outside—it's about the impeccable hygiene, the finest ingredients, and the exact science of baking it to absolute perfection. Quality is our ultimate recipe."
                            </blockquote>
                            <div className="mt-10 flex justify-center gap-2 text-pink-400">
                                <span>✦</span><span>✦</span><span>✦</span>
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
