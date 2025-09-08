import React from "react";
import HeaderMain from "./HeaderMain";
import ScrollToTop from "./ScrollToTop";
const Header = ({ mode }) => {
  return (
    <header className={`page-header ${mode}-mode`}>
      <ScrollToTop />
      <HeaderMain />
    </header>
  );
};

export default Header;
