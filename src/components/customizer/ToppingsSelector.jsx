import { motion } from "framer-motion";

export default function ToppingsSelector({ value, onChange }) {
    const toppings = [
        { id: "fruits", label: "Fresh Fruits", emoji: "🍓", price: 80 },
        { id: "sprinkles", label: "Sprinkles", emoji: "✨", price: 40 },
        { id: "chocochips", label: "Choco Chips", emoji: "🍫", price: 60 },
    ];

    const toggleTopping = (id) => {
        if (value.includes(id)) {
            onChange(value.filter((t) => t !== id));
        } else {
            onChange([...value, id]);
        }
    };

    return (
        <div id="toppings-selector">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Toppings
            </label>
            <div className="flex flex-col gap-2">
                {toppings.map((topping) => {
                    const isSelected = value.includes(topping.id);
                    return (
                        <motion.button
                            key={topping.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleTopping(topping.id)}
                            className={`flex items-center gap-3 py-2.5 px-4 rounded-xl border-2 transition-all duration-300
                ${isSelected
                                    ? "border-rose-400 bg-rose-50/80 shadow-glass"
                                    : "border-gray-100 bg-white/50 hover:border-rose-200"
                                }`}
                        >
                            {/* Custom Checkbox */}
                            <div
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300
                  ${isSelected
                                        ? "bg-gradient-to-br from-rose-400 to-rose-500 border-rose-400"
                                        : "border-gray-300 bg-white"
                                    }`}
                            >
                                {isSelected && (
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </motion.svg>
                                )}
                            </div>

                            <span className="text-lg">{topping.emoji}</span>
                            <span
                                className={`text-sm font-medium flex-1 text-left ${isSelected ? "text-rose-700" : "text-gray-600"
                                    }`}
                            >
                                {topping.label}
                            </span>
                            <span className="text-xs text-gray-400">+₹{topping.price}</span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
