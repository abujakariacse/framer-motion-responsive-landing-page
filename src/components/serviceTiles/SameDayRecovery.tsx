import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
const SameDayRecovery = () => {
  const { containerRef, styles } = useScrollGrow();
  return (
    <motion.div
      ref={containerRef}
      style={styles}
      className="bg-gray h-[415px] rounded-xl col-span-12 md:col-span-6 lg:col-span-4"
    ></motion.div>
  );
};

export default SameDayRecovery;
