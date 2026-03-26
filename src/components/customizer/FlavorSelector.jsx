import { motion } from "framer-motion";

export default function FlavorSelector({ value, onChange }) {
    const flavors = [
        {
            id: "chocolate",
            label: "Chocolate",
            color: "#5C3317",
            gradient: "linear-gradient(135deg, #6B3A1F, #4A2612)",
            emoji: "🍫",
        },
        {
            id: "vanilla",
            label: "Vanilla",
            color: "#F5E6C8",
            gradient: "linear-gradient(135deg, #FFF3DC, #E8D5B0)",
            emoji: "🍦",
        },
        {
            id: "strawberry",
            label: "Strawberry",
            color: "#FFB6C1",
            gradient: "linear-gradient(135deg, #FFC8D6, #FF9DB5)",
            emoji: "🍓",
        },
    ];

    return (
        <div id="flavor-selector">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Flavor
            </label>
            <div className="flex gap-3">
                {flavors.map((flavor) => (
                    <motion.button
                        key={flavor.id}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onChange(flavor.id)}
                        className={`flex-1 py-3 px-3 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-1.5
              ${value === flavor.id
                                ? "border-rose-400 shadow-glass"
                                : "border-gray-100 hover:border-rose-200"
                            }`}
                        style={{
                            background:
                                value === flavor.id
                                    ? `${flavor.gradient}, rgba(255,255,255,0.85)`
                                    : "rgba(255,255,255,0.6)",
                        }}
                    >
                        <span className="text-xl">{flavor.emoji}</span>
                        <span
                            className={`text-xs font-medium ${value === flavor.id
                                    ? flavor.id === "chocolate"
                                        ? "text-white"
                                        : "text-rose-700"
                                    : "text-gray-500"
                                }`}
                        >
                            {flavor.label}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
