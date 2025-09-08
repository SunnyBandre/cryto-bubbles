import { Outlet } from "react-router-dom";
import PriceTicker from "../components/PriceTicker";

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
