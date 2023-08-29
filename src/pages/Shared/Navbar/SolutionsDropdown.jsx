import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SolutionsDropdown = () => {
  const [solutions, setSolutions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("solutions.json")
      .then((res) => res.json())
      .then((data) => {
        setSolutions(data);
      });
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="group inline-block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex'>
      <Link
        to='/solutions'
        className="px-3 py-2 rounded-md font-medium group-hover:text-red"
      >
        Solutions
        
      </Link>
      <p className='mt-3 ms-[-16px]'><FaCaretDown /> </p>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-20 left-0 top-full w-40 mt-2 bg-white shadow-lg rounded sm:w-auto">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              // to={solution._id}
              className="block px-4 text-gray-800 whitespace-wrap pe-4"
            >
              {solution.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsDropdown;
