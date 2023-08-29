import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="relative inline-block">
      <button className="text-emerald-500 hover:text-emerald-700">
        Solutions
      </button>
      <div className="hidden absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
        <Link
          to="/solutions/option1"
          className="block px-4 py-2 text-sm text-emerald-500 hover:bg-emerald-100"
        >
          Option 1
        </Link>
        <Link
          to="/solutions/option2"
          className="block px-4 py-2 text-sm text-emerald-500 hover:bg-emerald-100"
        >
          Option 2
        </Link>
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default DropdownMenu;
