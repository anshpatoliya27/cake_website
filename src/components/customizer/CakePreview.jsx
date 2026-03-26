import { motion, AnimatePresence } from "framer-motion";

// Color maps for flavors and creams
const FLAVOR_COLORS = {
    chocolate: { base: "#5C3317", gradient: "linear-gradient(180deg, #6B3A1F 0%, #4A2612 100%)" },
    vanilla: { base: "#F5E6C8", gradient: "linear-gradient(180deg, #FFF3DC 0%, #E8D5B0 100%)" },
    strawberry: { base: "#FFB6C1", gradient: "linear-gradient(180deg, #FFC8D6 0%, #FF9DB5 100%)" },
};

const CREAM_COLORS = {
    white: { color: "#FFFDF7", border: "#F0EDE5" },
    pink: { color: "#FFD6E0", border: "#FFB8CA" },
    chocolate: { color: "#8B5E3C", border: "#6B4226" },
    lavender: { color: "#E8D5F5", border: "#D4B8E8" },
};

const SHAPE_STYLES = {
    round: "rounded-full",
    heart: "", // handled via clip-path
};

export default function CakePreview({ shape, flavor, cream, size, toppings, message }) {
    const flavorStyle = FLAVOR_COLORS[flavor] || FLAVOR_COLORS.chocolate;
    const creamStyle = CREAM_COLORS[cream] || CREAM_COLORS.white;

    // Scale based on size
    const sizeScale = size === "0.5" ? 0.75 : size === "1" ? 1 : 1.2;
    const cakeWidth = 220 * sizeScale;
    const cakeHeight = 160 * sizeScale;
    const layerHeight = cakeHeight / 3;

    const isHeart = shape === "heart";

    const heartClipPath = "polygon(50% 100%, 0% 35%, 3% 20%, 12% 8%, 25% 2%, 40% 0%, 50% 12%, 60% 0%, 75% 2%, 88% 8%, 97% 20%, 100% 35%)";

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[400px]">
            {/* Ambient glow */}
            <div
                className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ background: flavorStyle.base }}
            />

            {/* Plate / Shadow */}
            <motion.div
                className="absolute bottom-8 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 opacity-30"
                style={{ width: cakeWidth + 60, height: 20 }}
                animate={{ width: cakeWidth + 60 }}
                transition={{ type: "spring", stiffness: 200 }}
            />

            {/* Cake Container */}
            <motion.div
                className="relative"
                animate={{ scale: sizeScale }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ width: 220, transformOrigin: "bottom center" }}
            >
                {/* === CAKE BODY === */}
                <div
                    className="relative mx-auto overflow-hidden"
                    style={{
                        width: 220,
                        height: 160,
                        clipPath: isHeart ? heartClipPath : undefined,
                        borderRadius: isHeart ? 0 : "16px 16px 24px 24px",
                    }}
                >
                    {/* Bottom layer */}
                    <motion.div
                        className="absolute bottom-0 w-full"
                        style={{
                            height: layerHeight,
                            background: flavorStyle.gradient,
                        }}
                        animate={{ background: flavorStyle.gradient }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Cream layer (middle) */}
                    <motion.div
                        className="absolute w-full"
                        style={{
                            bottom: layerHeight,
                            height: 12,
                            background: creamStyle.color,
                            boxShadow: `0 2px 8px ${creamStyle.border}`,
                        }}
                        animate={{ background: creamStyle.color }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Middle cake layer */}
                    <motion.div
                        className="absolute w-full"
                        style={{
                            bottom: layerHeight + 12,
                            height: layerHeight,
                            background: flavorStyle.gradient,
                        }}
                        animate={{ background: flavorStyle.gradient }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Top cream layer */}
                    <motion.div
                        className="absolute w-full"
                        style={{
                            bottom: layerHeight * 2 + 12,
                            height: 12,
                            background: creamStyle.color,
                            boxShadow: `0 2px 8px ${creamStyle.border}`,
                        }}
                        animate={{ background: creamStyle.color }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Top frosting */}
                    <motion.div
                        className="absolute top-0 w-full"
                        style={{
                            height: layerHeight - 12,
                            background: creamStyle.color,
                            borderBottom: `3px solid ${creamStyle.border}`,
                        }}
                        animate={{ background: creamStyle.color }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Drip effect on top */}
                    <div className="absolute top-0 w-full flex justify-around">
                        {[...Array(7)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="rounded-b-full"
                                style={{
                                    width: 14 + Math.random() * 8,
                                    height: 18 + Math.random() * 16,
                                    background: creamStyle.color,
                                    marginTop: layerHeight - 14,
                                }}
                                animate={{ height: 18 + Math.sin(i * 1.5) * 12 }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                            />
                        ))}
                    </div>

                    {/* Shine effect */}
                    <div
                        className="absolute top-2 left-4 w-8 h-20 bg-white/10 rounded-full"
                        style={{ transform: "rotate(-15deg)" }}
                    />
                </div>

                {/* === TOPPINGS === */}
                <AnimatePresence>
                    {toppings.includes("fruits") && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1"
                        >
                            <span className="text-lg drop-shadow-md">🍓</span>
                            <span className="text-lg drop-shadow-md">🫐</span>
                            <span className="text-lg drop-shadow-md">🍓</span>
                            <span className="text-lg drop-shadow-md">🍇</span>
                            <span className="text-lg drop-shadow-md">🫐</span>
                        </motion.div>
                    )}

                    {toppings.includes("sprinkles") && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 w-44 h-8 flex flex-wrap justify-center gap-[2px] pointer-events-none"
                        >
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-full"
                                    style={{
                                        width: 3,
                                        height: 3,
                                        background: ["#FF6B9D", "#FFD700", "#7BC8F6", "#FF69B4", "#98FB98", "#DDA0DD"][i % 6],
                                        transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 6}px)`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}

                    {toppings.includes("chocochips") && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-3 left-1/2 -translate-x-1/2 w-40 h-6 flex flex-wrap justify-center gap-1 pointer-events-none"
                        >
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-sm"
                                    style={{
                                        width: 6,
                                        height: 4,
                                        background: "#3D1C02",
                                        transform: `rotate(${Math.random() * 90}deg) translate(${Math.random() * 8 - 4}px, ${Math.random() * 4}px)`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* === MESSAGE ON CAKE === */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none"
                            style={{
                                top: "30%",
                                maxWidth: 160,
                            }}
                        >
                            <p
                                className="text-xs font-semibold italic leading-tight"
                                style={{
                                    color: flavor === "chocolate" ? "#FFE4C4" : "#C2185B",
                                    textShadow: "0 1px 3px rgba(0,0,0,0.15)",
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                {message.length > 30 ? message.slice(0, 30) + "..." : message}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* === CAKE BOARD === */}
                <div
                    className="mx-auto mt-1 rounded-lg"
                    style={{
                        width: 240,
                        height: 10,
                        background: "linear-gradient(90deg, #D4A574 0%, #C4955A 50%, #D4A574 100%)",
                        marginLeft: -10,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                />
            </motion.div>

            {/* Size label */}
            <motion.div
                className="mt-6 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow-soft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={size}
            >
                <span className="text-xs font-medium text-rose-500">{size} kg</span>
            </motion.div>
        </div>
    );
}
