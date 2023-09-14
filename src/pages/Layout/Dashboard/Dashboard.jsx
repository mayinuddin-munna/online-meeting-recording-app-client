import "./Dashboard.css";
import { useRef } from "react";
import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useAdmin from "../../../hooks/useAdmin";
import { Outlet } from "react-router-dom";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Dashboard = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [isAdmin] = useAdmin();

  return (
    <section className="dashboard-body bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation isAdmin={isAdmin} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <Outlet />
    </section>
  );
};

export default Dashboard;
