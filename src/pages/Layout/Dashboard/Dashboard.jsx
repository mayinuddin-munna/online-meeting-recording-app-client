import "./Dashboard.css";
import React, { useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import UserReviews from "../../Shared/UserReviews/UserReviews";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import usePremiumMember from "../../../hooks/usePremiumMember";

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
  const { user } = useAuth();
  const containerRef = useRef(null);
  const [rollData, setRollData] = useState([]);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [isAdmin] = useAdmin();
  const [isPremiumMember] = usePremiumMember();

  const adminBar = (
    <>
      {/* ----------Admin------------ */}
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user?.displayName}</div>
      {/* <li>
        <NavLink to="/dashboard/manageClass">Manage Classes</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
      </li> */}
    </>
  );

  const premiumMember = (
    <>
      {/* ----------Instructor------------ */}
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user?.displayName}</div>
      {/* <li>
        <NavLink to="/dashboard/addAClass">Add a Class</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myClasses">My classes</NavLink>
      </li> */}
    </>
  );

  const users = (
    <>
      <div className="avatar my-4">
        <div className="mx-auto w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mb-4">Welcome, {user?.displayName}</div>
      {/* <li>
        <Link to="/dashboard/selectedClass">Selected Class</Link>
      </li>
      <li>
        <Link to="/dashboard/enrolledClass">Enrolled Class</Link>
      </li>
      <li>
        <Link to="/dashboard/payment">Payment History</Link>
      </li> */}
    </>
  );

  useEffect(() => {
    fetch(`https://galaxy-meeting.onrender.com`)
      .then((res) => res.json())
      .then((data) => {
        setRollData(data);
      });
  }, [user?.email]);

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
          {isAdmin ? adminBar : isPremiumMember ? premiumMember : users}
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </section>
  );
};

export default Dashboard;
