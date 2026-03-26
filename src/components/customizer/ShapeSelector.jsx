import { motion } from "framer-motion";

export default function ShapeSelector({ value, onChange }) {
    const shapes = [
        { id: "round", label: "Round", icon: "⭕" },
        { id: "heart", label: "Heart", icon: "💖" },
    ];

    return (
        <div id="shape-selector">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Cake Shape
            </label>
            <div className="flex gap-3">
                {shapes.map((shape) => (
                    <motion.button
                        key={shape.id}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onChange(shape.id)}
                        className={`flex-1 py-3 px-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center gap-2
              ${value === shape.id
                                ? "border-rose-400 bg-rose-50 shadow-glass text-rose-600"
                                : "border-gray-100 bg-white/60 hover:border-rose-200 text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        <span className="text-xl">{shape.icon}</span>
                        <span className="text-sm font-medium">{shape.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
