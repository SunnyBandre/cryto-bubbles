import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";

const menuItems = [
  {
    title: "Trading",
    href: null,
    submenu: [
      { title: "Pricing Model", href: "/pricing-model" },
      { title: "Account Comparison", href: "/account-comparison" },
      {
        title: "Open Live Account",
        href: "#",
        onClick: (e) => handleLinkClick(e, false),
      },
      {
        title: "Open Demo Account",
        href: "#",
        onClick: (e) => handleLinkClick(e, false),
      },
    ],
  },
  {
    title: "Markets",
    href: null,
    submenu: [
      { title: "Currencies", href: "/currencies" },
      { title: "Metals", href: "/metals" },
      { title: "Energy", href: "/energy" },
      { title: "Indices", href: "/indices" },
      { title: "CFD", href: "/cfd" },
    ],
  },
  {
    title: "Platforms",
    href: null,
    submenu: [
      { title: "MetaTrader 4", href: "/metatrader4" },
      { title: "MetaTrader 5", href: "/metatrader5" },
      // {
      //   title: "Desktop",
      //   href: null,
      //   subsubmenu: [
      //     { title: "MetaTrader 4", href: "/desktop/metatrader4" },
      //     { title: "MetaTrader 5", href: "/desktop/metatrader5" },
      //   ],
      // },
      // {
      //   title: "Mobile",
      //   href: null,
      //   subsubmenu: [
      //     { title: "FastOne MetaTrader 4", href: "/mobile/metatrader4" },
      //     { title: "FastOne MetaTrader 5", href: "/mobile/metatrader5" },
      //   ],
      // },
      // {
      //   title: "Web",
      //   href: null,
      //   subsubmenu: [
      //     { title: "WebTerminal - MetaTrader 4", href: "/web/metatrader4" },
      //     { title: "WebTerminal - MetaTrader 5", href: "/web/metatrader5" },
      //   ],
      // },
    ],
    orientation: "fo-horizontal",
  },
  {
    title: "News",
    href: null,
    submenu: [{ title: "Market Updates", href: "/market-updates" }],
  },
  {
    title: "Company",
    href: null,
    submenu: [
      { title: "About FastOne", href: "/about" },
      { title: "Why choose FastOne?", href: "/why-choose-us" },
      { title: "Contact Us", href: "/contact" },
      { title: "Regulation", href: "/regulation" },
      { title: "KYC AML", href: "/kyc-aml" },
      { title: "Legal", href: "/legal" },
      { title: "Data Protection", href: "/data-protection" },
      { title: "Complaints", href: "/complaints" },
    ],
  },
  {
    title: "Partners",
    href: "/introducing-broker", // Direct link
    submenu: [], // No submenu
  },
];

function HeaderMain() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to toggle dropdowns
  const toggleMenu = (menu) => {
    setExpandedMenu((prev) => (prev === menu ? null : menu));
  };
  return (
    // <header
    //   className={`fixed left-0 w-full z-50 bg-[#0b132e]/50 backdrop-blur-md text-white shadow-md transition-all duration-300 ${
    //     scrolled ? "top-0" : "lg:top-12"
    //   }`}
    // >
    <header
      id="main-navbar"
      className={`fixed left-0 w-full z-50 bg-[#0b132e]/50 backdrop-blur-md text-white shadow-md transition-all duration-300 ${
        scrolled ? "top-0" : "top-20 sm:top-14 md:top-12"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2 py-6 padding-4k">
            <img
              src="./fastone-logo-text2.png"
              alt="FastOne"
              className="h-8 img-4k"
            />
          </div>
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex text-sm font-semibold">
          <ul className="flex space-x-1.5 xl:space-x-6">
            {menuItems.map((items) => (
              <li
                className="relative group hover:text-blue-600"
                key={items.title}
              >
                <div className="px-4 hover:text-blue-600 cursor-pointer py-6">
                  <a href={items.href} className="title-4k2">
                    {" "}
                    {items.title}
                  </a>
                </div>
                {items.submenu && (
                  <ul className="absolute top-full -translate-y-2 left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-b-md min-w-[250px]  z-10 space-y-1">
                    {items.submenu.map((submenuitem) => (
                      <Link
                        key={submenuitem.title}
                        to={submenuitem.href}
                        onClick={(e) =>
                          submenuitem.onClick && handleLinkClick(e, false)
                        }
                      >
                        <li
                          className="block px-4 py-4 my-1 hover:bg-gray-200 hover:text-blue-600 text-black hover:rounded-md"
                          key={submenuitem.title}
                        >
                          {submenuitem.title}
                        </li>
                      </Link>
                      // <li
                      //   className="block px-4 py-2 hover:bg-gray-200 text-black hover:rounded-md"
                      //   key={submenuitem.title}
                      // >
                      //   <a href={submenuitem.href}>{submenuitem.title}</a>
                      // </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition title-4k2">
            <Link to="#" onClick={(e) => handleLinkClick(e, true)}>
              Log in
            </Link>
          </button>
          <button className="border border-white bg-white text-black px-4 py-1.5 rounded-md hover:bg-gray-200 transition title-4k2">
            <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
              Create Account
            </Link>
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {menuOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-4 pt-2 bg-blue transform transition-all duration-500 ease-in-out"
          style={{
            background: "linear-gradient(to bottom, #0b132e 0%, #1c2740 100%)", // linear-gradient(to bottom, #0b132e 0%, #1a2340 50%, #314e91 100%)
          }}
        >
          {" "}
          <nav className="flex flex-col space-y-7 text-sm font-semibold">
            {menuItems.map((items) => (
              <div key={items.title}>
                <div
                  onClick={() => toggleMenu(items.title)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span>
                    <a href={items.href}>{items.title}</a>
                  </span>
                  {items.submenu.length > 0 && (
                    <span>{expandedMenu === items.title ? "▲" : "▼"}</span>
                  )}
                </div>
                {items.submenu && (
                  <ul className="mt-2 ml-4 text-white space-y-3">
                    {expandedMenu === items.title &&
                      items.submenu.map((submenuitem) => (
                        <li className="hover:underline" key={submenuitem.title}>
                          {/* <a href={submenuitem.href}>{submenuitem.title}</a>{" "} */}
                          <Link
                            to={submenuitem.href}
                            onClick={(e) =>
                              submenuitem.onClick && handleLinkClick(e, false)
                            }
                          >
                            {submenuitem.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col space-y-3">
            <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
              <Link to="#" onClick={(e) => handleLinkClick(e, true)}>
                Log in
              </Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
              <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
                Create Account
              </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderMain;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { handleRedirect } from "../lib/redirectLocationHandler";
// const HeaderMain = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openSubmenus, setOpenSubmenus] = useState({});

//   useEffect(() => {
//     const header = document.querySelector("#main-header");
//     const toggleClass = "sticky-header";

//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset;
//       if (currentScroll > 150) {
//         header.classList.add(toggleClass);
//       } else {
//         header.classList.remove(toggleClass);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSubmenu = (index) => {
//     setOpenSubmenus((prevOpenSubmenus) => ({
//       ...prevOpenSubmenus,
//       [index]: !prevOpenSubmenus[index], // Toggle the current submenu
//       // Close other submenus
//       ...Object.keys(prevOpenSubmenus).reduce((acc, key) => {
//         if (key !== index.toString()) {
//           acc[key] = false;
//         }
//         return acc;
//       }, {}),
//     }));
//   };

//   const menuItems = [
//     {
//       title: "Trading",
//       href: null,
//       submenu: [
//         { title: "Pricing Model", href: "/pricing-model" },
//         { title: "Account Comparison", href: "/account-comparison" },
//         {
//           title: "Open Live Account",
//           href: "#",
//           onClick: (e) => handleLinkClick(e, false),
//         },
//         {
//           title: "Open Demo Account",
//           href: "#",
//           onClick: (e) => handleLinkClick(e, false),
//         },
//       ],
//     },
//     {
//       title: "Markets",
//       href: null,
//       submenu: [
//         { title: "Currencies", href: "/currencies" },
//         { title: "Metals", href: "/metals" },
//         { title: "Energy", href: "/energy" },
//         { title: "Indices", href: "/indices" },
//         { title: "CFD", href: "/cfd" },
//       ],
//     },
//     {
//       title: "Platforms",
//       href: null,
//       submenu: [
//         {
//           title: "Desktop",
//           href: null,
//           subsubmenu: [
//             { title: "MetaTrader 4", href: "/desktop/metatrader4" },
//             { title: "MetaTrader 5", href: "/desktop/metatrader5" },
//           ],
//         },
//         {
//           title: "Mobile",
//           href: null,
//           subsubmenu: [
//             { title: "FastOne MetaTrader 4", href: "/mobile/metatrader4" },
//             { title: "FastOne MetaTrader 5", href: "/mobile/metatrader5" },
//           ],
//         },
//         {
//           title: "Web",
//           href: null,
//           subsubmenu: [
//             { title: "WebTerminal - MetaTrader 4", href: "/web/metatrader4" },
//             { title: "WebTerminal - MetaTrader 5", href: "/web/metatrader5" },
//           ],
//         },
//       ],
//       orientation: "fo-horizontal",
//     },
//     {
//       title: "News",
//       href: null,
//       submenu: [{ title: "Market Updates", href: "/market-updates" }],
//     },
//     {
//       title: "Company",
//       href: null,
//       submenu: [
//         { title: "About FastOne", href: "/about" },
//         { title: "Why choose FastOne?", href: "/why-choose-us" },
//         { title: "Contact Us", href: "/contact" },
//         { title: "Regulation", href: "/regulation" },
//         { title: "KYC AML", href: "/kyc-aml" },
//         { title: "Legal", href: "/legal" },
//         { title: "Data Protection", href: "/data-protection" },
//         { title: "Complaints", href: "/complaints" },
//       ],
//     },
//     {
//       title: "Partners",
//       href: "/introducing-broker", // Direct link
//       submenu: [], // No submenu
//     },
//   ];

//   const handleLinkClick = (event, isLogin) => {
//     event.preventDefault();
//     handleRedirect(isLogin);
//   };
//   return (
//     <div
//       id="main-header"
//       className={`main-header ${isMenuOpen ? "menu-open" : ""}`}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-8 col-xl-2 col-lg-2">
//             <Link to="/">
//               <span className="logo"></span>
//             </Link>
//           </div>
//           <div className="menu-toggle col-4" onClick={handleToggleMenu}>
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </div>
//           <div
//             className={`menu-and-search col-md-6 ${isMenuOpen ? "open" : ""}`}
//           >
//             <nav className="main-menu">
//               <ul className="l1-ul">
//                 {menuItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className={item.submenu.length ? "has-submenu" : ""}
//                   >
//                     {item.href ? (
//                       <Link to={item.href} className="menu-link menu-title">
//                         {item.title}
//                       </Link>
//                     ) : (
//                       <span className="menu-title">
//                         {item.title}
//                         {item.submenu.length > 0 && (
//                           <button
//                             className="submenu-toggle"
//                             onClick={() => toggleSubmenu(index)}
//                           >
//                             {openSubmenus[index] ? "-" : "+"}
//                           </button>
//                         )}
//                       </span>
//                     )}
//                     {item.submenu.length > 0 && (
//                       <ul
//                         className={`submenu ${
//                           openSubmenus[index] ? "open" : ""
//                         } ${item.orientation || "fo-vertical"}`}
//                       >
//                         {item.submenu.map((subItem, subIndex) => (
//                           <li
//                             key={subIndex}
//                             className={
//                               subItem.subsubmenu ? "has-subsubmenu" : ""
//                             }
//                           >
//                             {subItem.href ? (
//                               <Link
//                                 to={subItem.href}
//                                 onClick={(e) =>
//                                   subItem.onClick && subItem.onClick(e)
//                                 }
//                                 className="submenu-link"
//                               >
//                                 {subItem.title}
//                               </Link>
//                             ) : (
//                               <span className="menu-subtitle">
//                                 {subItem.title}
//                               </span>
//                             )}
//                             {subItem.subsubmenu && (
//                               <ul
//                                 className={`subsubmenu ${
//                                   openSubmenus[`${index}-${subIndex}`]
//                                     ? "open"
//                                     : ""
//                                 } ${subItem.orientation || "fo-vertical"}`}
//                               >
//                                 {subItem.subsubmenu.map(
//                                   (subSubItem, subSubIndex) => (
//                                     <li key={subSubIndex}>
//                                       <Link
//                                         to={subSubItem.href}
//                                         className="subsubmenu-link"
//                                       >
//                                         {subSubItem.title}
//                                       </Link>
//                                     </li>
//                                   )
//                                 )}
//                               </ul>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           <div
//             className={`auth-nav col-12 col-xl-4 col-lg-10 col-md-9 col-sm-8 ${
//               isMenuOpen ? "open" : ""
//             }`}
//           >
//             <Link
//               to="#"
//               onClick={(e) => handleLinkClick(e, true)}
//               className="btn login-btn"
//             >
//               Log in
//             </Link>
//             <Link
//               to="#"
//               onClick={(e) => handleLinkClick(e, false)}
//               className="btn create-account"
//             >
//               Create Account
//             </Link>
//             {/* <span className="lang-switch">
//               <GlobeIcon />
//             </span> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMain;
