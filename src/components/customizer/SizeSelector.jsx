import { motion } from "framer-motion";

export default function SizeSelector({ value, onChange }) {
    const sizes = [
        { id: "0.5", label: "0.5 kg", subtitle: "Petit", icon: "🍰" },
        { id: "1", label: "1 kg", subtitle: "Classic", icon: "🎂" },
        { id: "2", label: "2 kg", subtitle: "Grand", icon: "🎪" },
    ];

    return (
        <div id="size-selector">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Size
            </label>
            <div className="flex gap-3">
                {sizes.map((size) => (
                    <motion.button
                        key={size.id}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onChange(size.id)}
                        className={`flex-1 py-3 px-3 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-1
              ${value === size.id
                                ? "border-rose-400 bg-rose-50 shadow-glass text-rose-600"
                                : "border-gray-100 bg-white/60 hover:border-rose-200 text-gray-500"
                            }`}
                    >
                        <span className="text-lg">{size.icon}</span>
                        <span className="text-sm font-semibold">{size.label}</span>
                        <span className="text-[10px] text-gray-400">{size.subtitle}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
