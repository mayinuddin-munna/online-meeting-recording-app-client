import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ endValue }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);


  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = animate(count, endValue, { duration: 5 });
          animation.start();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [count, endValue]);

  return <motion.h1 ref={ref}>{rounded}</motion.h1>;
};

export default Counter;
