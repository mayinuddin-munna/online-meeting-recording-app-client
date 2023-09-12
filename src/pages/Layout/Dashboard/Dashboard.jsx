import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { useSelector } from "react-redux";

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
  const [rollData, setRollData] = useState([]);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const user = useSelector((state) => state.data.user.user);

  const [isAdmin] = useAdmin();
  
  console.log(user);
  const admin = (
    <>
      {/* ----------Admin------------ */}
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user?.email}</div>
    </>
  );

  const users = (
    <>
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user?.email}</div>
    </>
  );

  return (
    <section className="dashboard-body">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <div className="font-bold ml-96 m-12">
          <h1 className="text-5xl text-white m-12">
            Welcome to Galaxy Meeting.
          </h1>
          {isAdmin ? admin : users}
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </section>
  );
};

export default Dashboard;
