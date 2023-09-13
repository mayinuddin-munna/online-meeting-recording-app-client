import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const dashboardNavItems = ["Profile", "Reviews", "About", "Services"];

export const Navigation = () => (
  <motion.ul
    variants={variants}
    style={{
      margin: "0",
      padding: "25px",
      position: "absolute",
      top: "100px",
      width: "230px",
      zIndex: "100"
    }}
  >
    {
      dashboardNavItems.map((item) => (
        <MenuItem item={item} key={item} />
      ))
    }
  </motion.ul >
);
