import { motion } from "framer-motion";

export default function CreamSelector({ value, onChange }) {
    const creams = [
        { id: "white", label: "Classic White", color: "#FFFDF7", border: "#E8E4DC" },
        { id: "pink", label: "Rose Pink", color: "#FFD6E0", border: "#FFB8CA" },
        { id: "chocolate", label: "Choco", color: "#8B5E3C", border: "#6B4226" },
        { id: "lavender", label: "Lavender", color: "#E8D5F5", border: "#D4B8E8" },
    ];

    return (
        <div id="cream-selector">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Cream Color
            </label>
            <div className="flex gap-3">
                {creams.map((cream) => (
                    <motion.button
                        key={cream.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onChange(cream.id)}
                        className={`relative flex flex-col items-center gap-1.5 group`}
                    >
                        <div
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 shadow-sm
                ${value === cream.id
                                    ? "ring-2 ring-rose-400 ring-offset-2 scale-110"
                                    : "hover:ring-2 hover:ring-rose-200 hover:ring-offset-1"
                                }`}
                            style={{
                                backgroundColor: cream.color,
                                borderColor: cream.border,
                            }}
                        />
                        <span
                            className={`text-[10px] font-medium transition-colors ${value === cream.id ? "text-rose-600" : "text-gray-400"
                                }`}
                        >
                            {cream.label}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
