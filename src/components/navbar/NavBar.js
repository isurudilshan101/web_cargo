// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between  py-4">
//           {/* Left side logo */}
//           <div>
//             <Link to="/" className="text-black font-bold text-xl">
//               <img src="/assets/logo.PNG" alt="logo" />
//             </Link>
//           </div>

//           {/* Navbar links with dropdown */}
//           <ul className="flex nav_links">
//             <li className="mr-6">
//               <Link to="/" className="text-black hover:text-gray-600 nav_home">
//                 Home
//               </Link>
//             </li>
//             <li className="mr-6">
//               <Link to="/pages" className="text-black hover:text-gray-600">
//                 Pages
//               </Link>
//             </li>
//             <li className="relative mr-6">
//               <button
//                 className="text-black focus:outline-none"
//                 onClick={toggleDropdown}
//               >
//                 Services
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute bg-white shadow mt-2 py-2 rounded">
//                   <Link
//                     to="/services"
//                     className="block px-4 py-2 text-black hover:text-gray-600"
//                   >
//                     Service 1
//                   </Link>
//                   <Link
//                     to="/services"
//                     className="block px-4 py-2 text-black hover:text-gray-600"
//                   >
//                     Service 2
//                   </Link>
//                   <Link
//                     to="/services"
//                     className="block px-4 py-2 text-black hover:text-gray-600"
//                   >
//                     Service 3
//                   </Link>
//                 </div>
//               )}
//             </li>
//             <li className="mr-6">
//               <Link to="/tracking" className="text-black hover:text-gray-600">
//                 Tracking
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="text-black hover:text-gray-600">
//                 Blog
//               </Link>
//             </li>
//           </ul>

//           {/* Right side buttons */}
//           <div className="flex ">
//             <button className="mr-4 bg-yellow-500 text-white py-2 px-4 rounded button_get">
//               GET A QUOTE
//             </button>
//             <button className="bg-black text-white py-2 px-4 rounded">
//               SIGN IN
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-4">
          {/* Logo */}
          <div>
            <Link to="/" className="text-black font-bold text-xl">
              <img
                src="/assets/logo.PNG"
                alt="logo"
                className="block lg:inline"
              />
            </Link>
          </div>

          {/* Navbar links */}
          <div className="nav_link_items">
            <ul
              className={`lg:flex ${
                isMobileMenuOpen ? "block" : "hidden"
              } nav_links`}
            >
              <li className="mr-6">
                <Link
                  to="/"
                  className="text-black hover:text-gray-600 nav_home"
                >
                  Home <FontAwesomeIcon icon={faCaretDown} />
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/pages" className="text-black hover:text-gray-600">
                  Pages <FontAwesomeIcon icon={faCaretDown} />
                </Link>
              </li>
              <li className="mr-6">
                <Link to="/tracking" className="text-black hover:text-gray-600">
                  Tracking
                </Link>
              </li>
              <li className="relative mr-6">
                <button
                  className="text-black focus:outline-none"
                  onClick={toggleDropdown}
                >
                  Services <FontAwesomeIcon icon={faCaretDown} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-white shadow mt-2 py-2 rounded w-56 sm:w-56">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-black hover:text-gray-600"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-black hover:text-gray-600"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-black hover:text-gray-600"
                    >
                      Service 3
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/blog" className="text-black hover:text-gray-600">
                  Blog <FontAwesomeIcon icon={faCaretDown} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex ">
            <button className="mr-4 bg-yellow-500 text-white py-2 px-4 rounded button_get">
              GET A QUOTE
            </button>
            <button className="bg-black text-white py-2 px-4 rounded">
              SIGN IN
            </button>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
