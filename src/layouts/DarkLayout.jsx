import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";
import CookieBanner from "../components/CookieBanner";
import WhatsAppButton from "../components/WhatsAppButton";

function DarkLayout() {
  return (
    <div className="dark-mode">
      <header className="page-header">
        <HeaderMain mode="dark" />
      </header>
      <PriceTicker />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default DarkLayout;
