import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserReviews from "../../Shared/UserReviews/UserReviews";

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

export const MenuItem = ({ i }) => {
  const style = { border: `3px solid ${colors[i]} padding:"10px"` };
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
      <div className="text-placeholder" style={style}>
        {/* <Link className="text-5xl text-white m-12" to="/">
          Home
        </Link> */}
        <Link to="/dashboard/userReviews">Home</Link>
      </div>
    </motion.li>
  );
};
