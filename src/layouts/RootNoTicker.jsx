import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieBanner from "../components/CookieBanner";

function RootNoTicker() {
  return (
    <div className="root-container">
      <Outlet />
      <WhatsAppButton />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default RootNoTicker;
