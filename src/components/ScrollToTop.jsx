import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Use window.scrollTo to scroll to the top of the page on route change
    window.scrollTo(0, 0);
    // console.log("worked")
  }, [location.pathname]); // Only depend on pathname

  return null; // No UI rendered
};

export default ScrollToTop;
