import { motion } from "framer-motion";

const BASE_PRICE = 500;

const SIZE_PRICES = {
    "0.5": 0,
    "1": 200,
    "2": 500,
};

const TOPPING_PRICES = {
    fruits: 80,
    sprinkles: 40,
    chocochips: 60,
};

export function calculatePrice(size, toppings) {
    const sizePrice = SIZE_PRICES[size] || 0;
    const toppingsPrice = toppings.reduce(
        (sum, t) => sum + (TOPPING_PRICES[t] || 0),
        0
    );
    return BASE_PRICE + sizePrice + toppingsPrice;
}

export default function PriceDisplay({ size, toppings, onAddToCart }) {
    const total = calculatePrice(size, toppings);
    const sizePrice = SIZE_PRICES[size] || 0;
    const toppingsPrice = toppings.reduce(
        (sum, t) => sum + (TOPPING_PRICES[t] || 0),
        0
    );

    return (
        <div id="price-display" className="space-y-4">
            {/* Price Breakdown */}
            <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50">
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-500">
                        <span>Base Price</span>
                        <span>₹{BASE_PRICE}</span>
                    </div>
                    {sizePrice > 0 && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex justify-between text-gray-500"
                        >
                            <span>Size ({size} kg)</span>
                            <span>+₹{sizePrice}</span>
                        </motion.div>
                    )}
                    {toppings.map((t) => (
                        <motion.div
                            key={t}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex justify-between text-gray-500"
                        >
                            <span className="capitalize">{t}</span>
                            <span>+₹{TOPPING_PRICES[t]}</span>
                        </motion.div>
                    ))}
                    <div className="border-t border-rose-100 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">Total</span>
                            <motion.span
                                key={total}
                                initial={{ scale: 1.3, color: "#f43f7a" }}
                                animate={{ scale: 1, color: "#1f2937" }}
                                className="text-2xl font-bold font-display"
                            >
                                ₹{total}
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
                id="add-to-cart-button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAddToCart}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 
          text-white font-semibold text-base shadow-cake 
          hover:shadow-glass-lg transition-all duration-300
          flex items-center justify-center gap-2 font-display"
            >
                <span>🛒</span>
                <span>Add to Cart — ₹{total}</span>
            </motion.button>

            <p className="text-center text-xs text-gray-400">
                Free pickup from Ahmedabad • Order 1 day in advance
            </p>
        </div>
    );
}
