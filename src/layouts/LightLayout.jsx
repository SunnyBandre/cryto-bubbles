import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";
import WhatsAppButton from "../components/WhatsAppButton";

function LightLayout() {
  return (
    <div className="light-mode">
      <header className="page-header">
        <HeaderMain mode="light" />
      </header>
      <PriceTicker />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default LightLayout;
