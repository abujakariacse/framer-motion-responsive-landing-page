import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "2 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  return (
    <motion.div
      className="bg-gray h-[415px] rounded-xl col-span-12"
      ref={containerRef}
      style={{
        scale: scaleValues,
        opacity: opacityValues,
        x: xValues,
      }}
    ></motion.div>
  );
};

export default BatteryReplacement;
