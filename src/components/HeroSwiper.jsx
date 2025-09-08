import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
  return (
    <section className="hero py-5 d-flex align-items-center overflow-hidden">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="container">
            <div className="hero-content">
              <div className="align-items-start text-start justify-content-start">
                <h1 className="hero-title">
                  Empower Your Trades,
                  <span className="hero-title-dark">Master the Markets</span>
                </h1>
                <p className="hero-desc">
                  A leading liquidity provider is now directly accessible to
                  you, the customer—offering Direct-to-Consumer (D2C) services
                  for the first time in the industry.
                </p>

                <div className="mt-3">
                  <a href="" className="btn-one white-btn">
                    About Us
                  </a>
                </div>
              </div>
              <div className="icons-grid">
                <div className="hero-icons-grid icons">
                  <a href="">
                    <img src="/images/hero-icons/mt5.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/hero-icons/trustpilot.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img
                      src="/images/hero-icons/google-review.png.webp"
                      alt=""
                    />
                  </a>

                  <a href="">
                    <img src="/images/hero-icons/webinars.png.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="hero-content">
              <div className="align-items-start text-start justify-content-start">
                <h1 className="hero-title hero-title-dark">
                  Start Trading now
                </h1>
                <ul className="hero-desc-list">
                  <li>Zero spreads for your first 10 Trades</li>
                  <li>Zero Latency in Execution</li>
                  <li>Trusted Trading Platforms </li>
                  <li>Trusted Regulations in St. Lucia and Mauritius</li>
                </ul>

                <div className="mt-3">
                  <a href="" className="btn-one white-btn">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="icons-grid">
                <div className="hero-icons-grid icons">
                  <a href="">
                    <img src="/images/hero-icons/mt5.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/hero-icons/trustpilot.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img
                      src="/images/hero-icons/google-review.png.webp"
                      alt=""
                    />
                  </a>

                  <a href="">
                    <img src="/images/hero-icons/webinars.png.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="hero-content">
              <div className="align-items-start text-start justify-content-start">
                <h1 className="hero-title hero-title-dark">
                  Join fastone traders !
                </h1>
                <p className="hero-desc">Testimonials we will display here</p>

                <div className="mt-3">
                  <a href="" className="btn-one white-btn">
                    Get Started Here
                  </a>
                </div>
              </div>
              <div className="icons-grid">
                <div className="hero-icons-grid icons">
                  <a href="">
                    <img src="/images/hero-icons/mt5.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img src="/images/hero-icons/trustpilot.png.webp" alt="" />
                  </a>
                  <a href="">
                    <img
                      src="/images/hero-icons/google-review.png.webp"
                      alt=""
                    />
                  </a>

                  <a href="">
                    <img src="/images/hero-icons/webinars.png.webp" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
