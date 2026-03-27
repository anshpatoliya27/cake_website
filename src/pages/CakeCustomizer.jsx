import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CakePreview from "../components/customizer/CakePreview";
import ShapeSelector from "../components/customizer/ShapeSelector";
import FlavorSelector from "../components/customizer/FlavorSelector";
import CreamSelector from "../components/customizer/CreamSelector";
import SizeSelector from "../components/customizer/SizeSelector";
import ToppingsSelector from "../components/customizer/ToppingsSelector";
import MessageInput from "../components/customizer/MessageInput";
import PriceDisplay from "../components/customizer/PriceDisplay";

import { useNavigate } from "react-router-dom";

export default function CakeCustomizer() {
    const navigate = useNavigate();
    const [shape, setShape] = useState("round");
    const [flavor, setFlavor] = useState("chocolate");
    const [cream, setCream] = useState("white");
    const [size, setSize] = useState("1");
    const [toppings, setToppings] = useState([]);
    const [message, setMessage] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleAddToCart = () => {
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 3000);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <div className="min-h-screen bg-[#fff1f5]">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-28 pb-4 px-6 text-center">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate("/")}
                    className="mb-4 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-rose-500 transition-colors"
                >
                    <span>←</span>
                    <span>Back to Home</span>
                </motion.button>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                        Design Your Dream Cake
                    </h1>
                    <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
                        Customize every detail and watch your creation come to life ✨
                    </p>
                </motion.div>
            </section>

            {/* Main Customizer Area */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* === LEFT: Controls Panel === */}
                    <motion.div
                        className="flex-1 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="sticky top-28">
                            <div
                                className="rounded-3xl p-6 md:p-8 space-y-6
                  bg-white/40 backdrop-blur-xl border border-white/50
                  shadow-glass"
                            >
                                {/* Section Title */}
                                <div className="flex items-center gap-2 pb-2 border-b border-rose-100/50">
                                    <span className="text-lg">🎨</span>
                                    <h2 className="text-lg font-semibold font-display text-gray-800">
                                        Customization
                                    </h2>
                                </div>

                                {/* Control Sections with staggered animation */}
                                <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                                    <ShapeSelector value={shape} onChange={setShape} />
                                </motion.div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.35 }}>
                                    <FlavorSelector value={flavor} onChange={setFlavor} />
                                </motion.div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                                    <CreamSelector value={cream} onChange={setCream} />
                                </motion.div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.45 }}>
                                    <SizeSelector value={size} onChange={setSize} />
                                </motion.div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
                                    <ToppingsSelector value={toppings} onChange={setToppings} />
                                </motion.div>

                                <motion.div {...fadeInUp} transition={{ delay: 0.55 }}>
                                    <MessageInput value={message} onChange={setMessage} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* === RIGHT: Preview + Price === */}
                    <motion.div
                        className="flex-1 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="sticky top-28 space-y-6">
                            {/* Preview Card */}
                            <div
                                className="rounded-3xl p-8 min-h-[420px] flex items-center justify-center
                  bg-white/30 backdrop-blur-xl border border-white/50
                  shadow-glass relative overflow-hidden"
                            >
                                {/* Decorative background circles */}
                                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-rose-100/30 blur-2xl" />
                                <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-pink-100/40 blur-2xl" />

                                <CakePreview
                                    shape={shape}
                                    flavor={flavor}
                                    cream={cream}
                                    size={size}
                                    toppings={toppings}
                                    message={message}
                                />

                                {/* Rotate hint */}
                                <div className="absolute bottom-4 right-4 text-xs text-gray-300 flex items-center gap-1">
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                    2D Preview
                                </div>
                            </div>

                            {/* Price Section */}
                            <PriceDisplay
                                size={size}
                                toppings={toppings}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Confirmation Toast */}
            <AnimatePresence>
                {showConfirmation && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
              px-8 py-4 rounded-2xl
              bg-gradient-to-r from-rose-500 to-pink-500
              text-white font-semibold shadow-cake
              flex items-center gap-3"
                    >
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="text-xl"
                        >
                            🎉
                        </motion.span>
                        <span>Added to cart successfully!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
