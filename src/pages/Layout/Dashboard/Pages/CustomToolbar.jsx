import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomToolbar = ({ label, onNavigate }) => (
  <div className="rbc-toolbar p-5">
    <span className="rbc-btn-group">
      <button
        type="button"
        onClick={() => onNavigate("PREV")}
        className=" p-2 hover:bg-gray-200"
      >
        <FaChevronLeft />
      </button>
      <span className="rbc-toolbar-label">{label}</span>
      <button
        type="button"
        onClick={() => onNavigate("NEXT")}
        className=" p-2 hover:bg-gray-200 focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </span>
  </div>
);

export default CustomToolbar;
