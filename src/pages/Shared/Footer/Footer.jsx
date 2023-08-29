// import React from "react";
// import { BsInfoCircle } from "react-icons/bs";
// import { FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
// import Logo from "../../../assets/Logo.png";
// import { FaTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer class=" bg-[#1D2E42]">


//       <div class=" px-4 py-5 sm:px-6 lg:px-8">
//         <div class="lg:flex lg:items-start lg:gap-8">
//         <img src={Logo} className="w-[70px]" alt="" />

//           <div
//             class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 "
//           >
//             <div class="col-span-2">
//               <div>
//                 <h2 class="text-2xl font-bold text-gray-900">
//                   Connect with us!
//                 </h2>
//               </div>
//             </div>
//             {/* subscribe */}
//             <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
//               <form class="w-full">
//                 <label for="UserEmail"> Email </label>

//                 <div
//                   class="border border-gray-100 p-2 sm:flex sm:items-center sm:gap-4"
//                 >
//                   <input
//                     type="email"
//                     id="UserEmail"
//                     placeholder="john@gmail.com"
//                     class="w-full sm:text-sm"
//                   />

//                   <button
//                     class="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
//                   >
//                     Subscribe
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div>
//               {/* helpful link */}
//             <div class=" grid sm:grid-col-2">
//               <p class="font-medium text-gray-900">Helpful Links</p>

//               <ul class="mt-6 space-y-4 text-sm">
//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     Contact
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     FAQs
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     Live Chat
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* company */}
//             <div class="col-span-2 sm:col-span-1">
//               <p class="font-medium text-gray-900">Company</p>

//               <ul class="mt-6 space-y-4 text-sm">
//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     About
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     Meet the Team
//                   </a>
//                 </li>

//                 <li>
//                   <a href="#" class="text-gray-700 transition hover:opacity-75">
//                     Accounts Review
//                   </a>
//                 </li>
//               </ul>
//             </div>

            
//             {/* icons */}
//             <ul
//               class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end"
//             >
//               <li>
//                 <FaFacebook/>
//               </li>

//               <li>
//                 <FaInstagram/>
//               </li>

//               <li>
//                <FaTwitter/>
//               </li>

//               <li>
//                 <FaGithub/>
//               </li>

//               <li>
//                <FaDribbble/>
//               </li>
//             </ul>
//             </div>

//           </div>
//         </div>
//         {/* footer */}
//         <div class="mt-8 border-t border-gray-100 pt-8">
//           <div class="sm:flex sm:justify-between">
//             <p class="text-xs text-gray-500">
//               &copy; 2022. Company Name. All rights reserved.
//             </p>

//             <ul
//               class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
//             >
//               <li>
//                 <a href="#" class="text-gray-500 transition hover:opacity-75">
//                   Terms & Conditions
//                 </a>
//               </li>

//               <li>
//                 <a href="#" class="text-gray-500 transition hover:opacity-75">
//                   Privacy Policy
//                 </a>
//               </li>

//               <li>
//                 <a href="#" class="text-gray-500 transition hover:opacity-75">
//                   Cookies
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaDribbble, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../../assets/Logo.png";
import { FaTwitter as FaTwitterAlt } from "react-icons/fa"; // Using FaTwitterAlt to avoid naming conflict
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D2E42] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <img src={Logo} className="w-[70px]" alt="" />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-5">
            <div className="col-span-3 lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Connect with us!
              </h2>
            </div>

            <div className="col-span-3 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="text-white">
                  Email
                </label>

                <div className="border border-gray-100 p-2 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@gmail.com"
                    className="w-full sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className=" text-gray-900 font-bold">Helpful Links</div>

              <ul className=" flex flex-col mt-6 space-y-4 text-sm">
                <Link className="text-gray-300 transition hover:opacity-75">About Us</Link>
                <Link className="text-gray-300 transition hover:opacity-75"> FAQs</Link>
                <Link className="text-gray-300 transition hover:opacity-75">Reviews</Link>
              </ul>
            </div>

            <div className="col-span-3 lg:col-span-5 lg:justify-start lg:flex">
              <ul className="flex justify-start gap-6">
                <li>
                  <FaFacebook className="text-white text-2xl" />
                </li>

                <li>
                  <FaInstagram className="text-white text-2xl" />
                </li>

                <li>
                  <FaTwitterAlt className="text-white text-2xl" />
                </li>

                <li>
                  <FaGithub className="text-white text-2xl" />
                </li>

                <li>
                  <FaDribbble className="text-white text-2xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-300">
              &copy; 2023. Galaxy Meet. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-300 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

