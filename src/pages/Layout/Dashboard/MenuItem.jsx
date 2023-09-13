import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item }) => {
  const style = { border: `2px solid ${colors[item]}` };
  return (
    <motion.li
      style={{
        margin: "0",
        listStyle: "none",
        marginBottom: "20px",
        cursor: "pointer",
      }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={`/dashboard/${item}`}
        className="icon-placeholder"
        style={style}
      >
        {item}
      </Link>
    </motion.li>
  );
};
