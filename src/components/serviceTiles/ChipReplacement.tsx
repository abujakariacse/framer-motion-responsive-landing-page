import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
const ChipReplacement = () => {
  const { containerRef, styles } = useScrollGrow();
  return (
    <motion.div
      className="bg-gray h-[415px] rounded-xl col-span-6 lg:col-span-5"
      ref={containerRef}
      style={styles}
    ></motion.div>
  );
};

export default ChipReplacement;
