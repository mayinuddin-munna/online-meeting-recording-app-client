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

const usersItems = ["Profile", "Reviews", "PersonalMeet", "Reports"];
const adminItems = [
  "Profile", "Reviews", "PersonalMeet", "Reports",
  "UserManagement",
  "MeetingData"
];

export const Navigation = ({ isAdmin }) => (
  <motion.ul
    variants={variants}
    style={{
      margin: "0",
      padding: "25px",
      position: "absolute",
      top: "100px",
      width: "230px",
    }}
  >
    {isAdmin
      ? adminItems.map((item) => <MenuItem item={item} key={item} />)
      : usersItems.map((item) => <MenuItem item={item} key={item} />)}
  </motion.ul>
);
