import React from "react";
import HeroAnimation from "./animations/HeroAnimation";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero py-5 d-flex align-items-center overflow-hidden">
      <div className="container ">
        <div className="hero-content">
          <div className="align-items-start text-start justify-content-start">
            <h1 className="text-white">
              Empower Your Trades,
              <span className="">Master the Markets</span>
            </h1>
            {/* <h1 className="hero-title">
                  Empower Your Trades,
                  <span className="hero-title-dark">Master the Markets</span>
                </h1> */}
            {/* <p className="hero-desc">
                  A leading liquidity provider is now directly accessible to
                  you, the customer—offering Direct-to-Consumer (D2C) services
                  for the first time in the industry.
                </p> */}

            <div className="mt-3 hero-btn-grp">
              <a href="/about" className="btn-one white-btn">
                About Us
              </a>
              <Link to="/account-comparison" className="btn-one white-btn">
                Open Account
              </Link>
            </div>
          </div>
          <div className="icons-grid">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
