import React from "react";
import Logo from "../../../assets/Logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter as FaTwitterAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${event.target.email.value} subscribe successful`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <footer className="bg-gray-800 text-white pb-5">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src={Logo} alt="Logo" className="w-17 h-16" />
          </div>
          <div className="flex gap-2 mb-5 space-x-2 mt-10">
            <a href="https://www.facebook.com/">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a href="https://tweetdeck.twitter.com/login">
              <FaTwitterAlt className="text-white text-2xl" />
            </a>
            {/* TODO: github link */}
            <a href="">
              <FaGithub className="text-white text-2xl" />
            </a>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 ms-5 lg:ms-28 ">
          <p className="font-semibold">Our Team</p>
          <p>FAQ</p>
          <p>Contact</p>
          <p>Reviews</p>
        </div>
        <div className="md:text-center  md:mt-3 ms-5 space-y-4">
          <p className="font-semibold text-2xl lg:-mt-4 text-start">Newsletter</p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-start"
          >
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="px-4 py-3 border text-gray-500 border-gray-400 rounded-l outline-none mb-2 md:mb-0 md:mr-2 w-full md:w-auto h-12"
                required
              />
              <button
                type="submit"
                className="p-3 md:w-[110px] rounded-l-none hover:bg-[#5EC38B] hover:text-white border shadow border-l-0 h-12"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-600" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-2 text-sm mb-0">
        <p>
          <Link to="/">Terms & Conditions</Link> | <Link to="/">Privacy Policy</Link> |{" "}
          <Link to="/">Cookies</Link>
        </p>
        <p>@ 2023. Galaxy Meet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import Logo from "../../../assets/Logo.png";
// import {  FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
// import { FaTwitter as FaTwitterAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const Footer = () => {

//   const handleSubscribe = (event) =>{
//     event.preventDefault();
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: `${event.target.email.value} subscribe successful`,
//       showConfirmButton: false,
//       timer: 1000
//     });
//   }
//   return (
//     <footer className="bg-gray-800 text-white  pb-5">
//       <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <div className="flex flex-col items-center">
//           <div className="mb-4">
//             <img src={Logo} alt="Logo" className="w-17 h-16" />
//           </div>
//           <div className="flex gap-2 mb-5 space-x-2 mt-10">
//             <Link to="#">
//               <FaFacebook className="text-white text-2xl" />
//             </Link>
//             <Link to="#">
//               <FaInstagram className="text-white text-2xl" />
//             </Link>
//             <Link to="#">
//               <FaTwitterAlt className="text-white text-2xl" />
//             </Link>
//             <Link to="#">
//               <FaGithub className="text-white text-2xl" />
//             </Link>
//           </div>
//         </div>
//         <div className="space-y-4 ms-28 ">
//           <p className="font-semibold">Our Team</p>
//           <p>FAQ</p>
//           <p>Contact</p>
//           <p>Reviews</p>
//         </div>
//         <div className="flex flex-col lg:ms-0 ms-28 md:text-center md:mt-3 space-y-4 ">
//           <p className="font-semibold text-2xl text-start">Newsletter</p>
//           <form onSubmit={handleSubscribe} className="flex">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               className="px-4 border text-gray-500 border-gray-400 rounded-l outline-none"
//               required
//             />
//             <button type='submit' className="p-3 w-[110px] rounded rounded-l-none hover:bg-[#5EC38B] hover:text-white border shadow border-l-0">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       <hr className="my-4 border-t border-gray-600" />
//       <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-2 text-sm mb-0">
//         <p>
//           <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | {" "}
//           <a href="#">Cookies</a>
//         </p>
//         <p>@ 2023. Galaxy Meet. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



