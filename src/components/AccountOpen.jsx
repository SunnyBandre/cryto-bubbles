import React from "react";

const AccountOpen = () => {
  return (
    <section className="sp-5">
      <div className="container">
        <div className="text-center">
          <h2>Open an account today</h2>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="box-card bgt-blue half">
              <h3>Create an account</h3>
              <p>
                At FASTONE, we understand that every trader has unique needs and
                preferences. That's why we offer a range of trading accounts
                designed to suit different trading styles and experience levels.
                <ul>
                  <li>
                    <strong>Spread Account</strong>: Perfect for traders who
                    prefer to pay a spread rather than a commission on their
                    trades
                  </li>
                  <li class="mt-2">
                    <strong>Standard Account</strong>: Ideal for experienced
                    traders seeking tight spreads and low commissions
                  </li>
                  <li class="mt-2">
                    <strong> Pro Account</strong>:Designed for high-volume
                    traders with advanced trading tools and dedicated support
                  </li>
                </ul>
              </p>
              <div className="row d-flex align-items-end">
                <div className="col-lg-6">
                  <a href="" className="btn-one rounded-btn white-btn">
                    Open an account
                  </a>
                </div>
                <div className="col-lg-6 position-relative">
                  <div className="outer">
                    <img src="/images/home-img/open-an-account.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="box-card bgt-white half">
              <h3>Not sure?</h3>
              <p>
                Take our demo account for a spin in a risk-free environment.
              </p>
              <div className="row d-flex align-items-end">
                <div className="col-lg-6">
                  <a href="" className="btn-one rounded-btn black-btn">
                    Try a demo
                  </a>
                </div>
                <div className="col-lg-6 position-relative">
                  <div className="outer">
                    <img src="/images/home-img/demo-account.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOpen;
