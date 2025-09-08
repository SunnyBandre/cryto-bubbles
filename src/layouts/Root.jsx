import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";
import CookieBanner from "../components/CookieBanner";
import WhatsAppButton from "../components/WhatsAppButton";

function Root() {
  return (
    <div className="root-container">
      <div className="above-header">
        <PriceTicker />
      </div>
      <Outlet />
      {/* <WhatsAppButton />
      <Footer />
      <CookieBanner /> */}
    </div>
  );
}

export default Root;
