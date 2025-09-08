import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './Testimonials.css';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";



const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="testimonials-slider"
        >
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/images/icons/user.png" alt="John Doe" />
              </div>
              <div className="testimonial-content">
                <img src="/images/icons/quotes.png" alt="Quote Icon" className="quote-icon" />
                <p className="testimonial-text">
                  "The trading platform provided by this broker is incredibly reliable and user-friendly. I have seen consistent results and appreciate the advanced features that help me make informed trading decisions."
                </p>
                <p className="testimonial-author">- John Doe</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/images/icons/user.png" alt="Jane Smith" />
              </div>
              <div className="testimonial-content">
                <img src="/images/icons/quotes.png" alt="Quote Icon" className="quote-icon" />
                <p className="testimonial-text">
                  "I've been trading for years, and this broker's platform stands out for its speed and reliability. The customer support team is also exceptional, always ready to assist with any questions or issues."
                </p>
                <p className="testimonial-author">- Jane Smith</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial-image">
                <img src="/images/icons/user.png" alt="Michael Johnson" />
              </div>
              <div className="testimonial-content">
                <img src="/images/icons/quotes.png" alt="Quote Icon" className="quote-icon" />
                <p className="testimonial-text">
                  "The platform's intuitive interface and comprehensive tools have revolutionized my trading strategy. I especially value the real-time data and advanced analytics that are readily available."
                </p>
                <p className="testimonial-author">- Michael Johnson</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components here as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
