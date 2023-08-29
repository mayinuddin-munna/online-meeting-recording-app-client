// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import SolutionsDropdown from './SolutionsDropdown';
// import Logo from '../../../assets/Logo.png';

// const Navbar1 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img className="h-12 w-15" src={Logo} alt="Logo" />
//               </Link>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <FaTimes className="block h-6 w-6" />
//               ) : (
//                 <FaBars className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4 justify-end">
//               <Link
//                 to="/"
//                 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/features"
//                 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Feature
//               </Link>
//               <SolutionsDropdown />
//               <Link
//                 to="/online-meeting"
//                 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 New Meeting
//               </Link>
//               <Link
//                 to="/login"
//                 className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/features"
//               className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Feature
//             </Link>
//             <SolutionsDropdown mobile />
//             <Link
//               to="/online-meeting"
//               className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               New Meeting
//             </Link>
//             <Link
//               to="/login"
//               className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar1;
