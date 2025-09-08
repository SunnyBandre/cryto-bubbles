import { useState } from "react";
import "./App.css";
import TopNotification from "./components/TopNotification";
import HeaderMain from "./components/HeaderMain";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import TradingTools from "./components/TradingTools";
import StayAhead from "./components/StayAhead";
import { Footer } from "./components/Footer";
import PriceTicker from "./components/PriceTicker";
import AccountTypes from "./components/AccountTypes";
import Testimonials from "./components/Testimonials";
import CryptoBubbles from "./pages/CryptoBubbles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <header className="page-header">
        <TopNotification />
        <HeaderMain />
      </header>
      <PriceTicker />
      <Hero />
      <ChooseUs />
      <TradingTools />
      <Testimonials />
      <AccountTypes />
      <StayAhead />
      <Footer /> */}
      <CryptoBubbles />
    </>
  );
}

export default App;
