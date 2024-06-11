import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <motion.div
        className="loadingBox"
        animate={{
          scale: [1, 2, 3, 2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
      </motion.div>
    </div>
  );
}
