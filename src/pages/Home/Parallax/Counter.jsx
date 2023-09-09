import "./Counter.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ endValue }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, endValue, { duration: 10 });
    return animation.stop;
  }, [count, endValue]);

  return <motion.h1>{rounded}</motion.h1>;
};

export default Counter;
