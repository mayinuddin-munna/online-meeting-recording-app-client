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

const usersItems = ["Profile", "Reviews", "Webinars", "Recording", "Settings"];
const adminItems = [
  "UserManagement",
  "RoomManagement",
  "AccountManagement",
  "Advanced",
  "Profile",
  "Reviews",
  "Webinars",
  "Recording",
  "Settings",
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
      zIndex: "100",
    }}
  >
    {isAdmin
      ? adminItems.map((item) => <MenuItem item={item} key={item} />)
      : usersItems.map((item) => <MenuItem item={item} key={item} />)}
  </motion.ul>
);
