import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingCTA() {
  return (
    <motion.a
      href="tel:+33784860715"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{ backgroundColor: '#B59A5D' }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <Phone size={24} color="#0A0A0B" />
    </motion.a>
  );
}
