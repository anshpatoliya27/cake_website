import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaBoxOpen } from "react-icons/fa";
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
        transition: { staggerChildren: 0.15 }
    }
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            console.log("Form Submitted:", formData);
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", phone: "", message: "" });

            // Reset success message after 4s
            setTimeout(() => setSubmitted(false), 4000);
        }, 1200);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="min-h-screen bg-[#ffeef3] font-['Outfit'] selection:bg-pink-200 text-[#1a1a2e] overflow-x-hidden">
            <Navbar />

            <main className="pt-28 pb-0">

                {/* ════════════════════════════════════
            1. HERO SECTION
            ════════════════════════════════════ */}
                <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
                    {/* Decorative floating blurred blobs */}
                    <div className="absolute -top-10 left-10 w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-10 w-64 h-64 bg-rose-300/30 rounded-full blur-3xl pointer-events-none" />

                    {/* Floating elements for style */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-[15%] text-4xl opacity-50 hidden md:block pointer-events-none">💌</motion.div>
                    <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-10 left-[15%] text-4xl opacity-50 hidden md:block pointer-events-none">✨</motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="relative z-10 max-w-2xl mx-auto"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/60 border border-white font-semibold text-rose-500 text-sm mb-6 backdrop-blur-md shadow-sm">
                            We're Here For You
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Get in Touch</span> 💬
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                            We’d love to bake something truly special for you. Reach out for custom tier cakes, event orders, or just to say hi!
                        </p>
                    </motion.div>
                </section>

                {/* ════════════════════════════════════
            2. Split Section: Form & Details
            ════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">

                        {/* ── LEFT: CONTACT FORM ── */}
                        <motion.div
                            className="flex-1 w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <div className="bg-white/50 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[30px] shadow-[0_8px_32px_rgba(214,51,108,0.06)] relative overflow-hidden">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Drop us a line ✨</h2>

                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                            className="w-full bg-white/70 border-2 border-white focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100/50 rounded-2xl px-5 py-3.5 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-white/70 border-2 border-white focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100/50 rounded-2xl px-5 py-3.5 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Message / Cake Requirement</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="I am looking for a beautiful chocolate truffle birthday cake..."
                                            className="w-full bg-white/70 border-2 border-white focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100/50 rounded-2xl px-5 py-3.5 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700 resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-lg shadow-[0_8px_20px_rgba(214,51,108,0.25)] hover:shadow-[0_12px_25px_rgba(214,51,108,0.35)] transition-all flex justify-center items-center"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : "Send Message"}
                                    </motion.button>

                                    <AnimatePresence>
                                        {submitted && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="text-green-600 font-bold bg-green-50 p-3 rounded-xl text-center border border-green-200"
                                            >
                                                Message sent successfully! We'll get back to you soon.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </div>
                        </motion.div>

                        {/* ── RIGHT: CONTACT DETAILS & WA ── */}
                        <motion.div
                            className="flex-1 w-full flex flex-col justify-center space-y-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Info blocks */}
                            <div className="space-y-8">
                                <motion.div variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm border border-white group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">Location</h4>
                                        <p className="text-gray-500 font-medium">Ahmedabad, Gujarat, India</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm border border-white group-hover:scale-110 transition-transform">
                                        <FaPhoneAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">Phone</h4>
                                        <p className="text-gray-500 font-medium">+91 98765 43210</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm border border-white group-hover:scale-110 transition-transform">
                                        <FaClock className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">Working Hours</h4>
                                        <p className="text-gray-500 font-medium">Mon - Sun: 10:00 AM - 8:00 PM</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shadow-sm border border-white group-hover:scale-110 transition-transform">
                                        <FaBoxOpen className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">Pickup Only</h4>
                                        <p className="text-gray-500 font-medium">Currently, we only accept local pickup orders to ensure cake safety and quality.</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Action Buttons (WA & Insta) */}
                            <motion.div variants={fadeUp} className="pt-6 border-t border-pink-200/60 space-y-4">
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-6 rounded-2xl bg-[#25D366] text-white font-bold text-lg shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <FaWhatsapp className="text-3xl relative z-10" />
                                        <span className="relative z-10">Chat on WhatsApp</span>
                                    </motion.div>
                                </a>

                                <a
                                    href="https://instagram.com/cakebykhushi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white font-bold text-lg shadow-[0_8px_20px_rgba(220,39,67,0.3)] hover:shadow-[0_12px_25px_rgba(220,39,67,0.4)] transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <FaInstagram className="text-3xl relative z-10" />
                                        <span className="relative z-10">DM on Instagram</span>
                                    </motion.div>
                                </a>

                                <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mt-6">Fastest ways to reach us</p>
                            </motion.div>

                        </motion.div>
                    </div>
                </section>

                {/* ════════════════════════════════════
            3. MAP SECTION (BOTTOM FULL WIDTH)
            ════════════════════════════════════ */}
                <section className="py-12 pb-24 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="w-full h-[400px] rounded-[30px] overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(214,51,108,0.1)] relative"
                    >
                        {/* Embedded Google Map iframe - Ahmedabad generic location for visual */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.69791572445!2d72.5411!3d23.0338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f50f28e67f%3A0xc6cb5a2b0c9e0d95!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ahmedabad Location"
                        ></iframe>

                        {/* Subtle overlay gradient to style the map slightly pinkish to match theme */}
                        <div className="absolute inset-0 bg-pink-500/10 pointer-events-none mix-blend-color"></div>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
