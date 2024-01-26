import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const StorageReplacement = () => {
  const { containerRef, styles } = useScrollGrow();

  return (
    <motion.div
      className="bg-gray h-[415px] rounded-xl col-span-12"
      ref={containerRef}
      style={styles}
    ></motion.div>
  );
};

export default StorageReplacement;
