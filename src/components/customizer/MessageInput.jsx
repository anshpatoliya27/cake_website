import { motion } from "framer-motion";

export default function MessageInput({ value, onChange }) {
    const maxLength = 30;

    return (
        <div id="message-input">
            <label className="block text-sm font-semibold text-gray-700 mb-3 font-display">
                Message on Cake
            </label>
            <div className="relative">
                <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
                    placeholder="e.g. Happy Birthday! 🎉"
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-100 bg-white/60 
            text-sm text-gray-700 placeholder-gray-300 
            focus:outline-none focus:border-rose-400 focus:bg-white focus:shadow-glass 
            transition-all duration-300 font-body"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-300">
                    {value.length}/{maxLength}
                </span>
            </div>
            {value && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs text-rose-400 italic"
                >
                    &ldquo;{value}&rdquo; will appear on your cake ✨
                </motion.p>
            )}
        </div>
    );
}
