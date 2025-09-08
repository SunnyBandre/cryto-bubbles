import React, { useState } from "react";
import "./AccountTypes.css";
const AccountTypes = () => {
  const [activeTab, setActiveTab] = useState("standard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="account-types">
      <div className="container">
        <div className="text-center">
          <h2>Account Types</h2>
          <p className="p-175">
            At FASTONE, we understand that every trader has unique needs and
            preferences. That's why we offer a range of trading accounts
            designed to suit different trading styles and experience levels.
            Explore our account types and choose the one that best fits your
            trading goals.
          </p>
        </div>

        <div className="text-center mb-4 d-md-block">
          <ul className="nav nav-pills account-switcher">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "standard" ? "active" : ""
                }`}
                onClick={() => handleTabClick("standard")}
              >
                Standard Account
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "gold" ? "active" : ""}`}
                onClick={() => handleTabClick("gold")}
              >
                Gold Account
              </a>
            </li>
          </ul>
        </div>

        <div className="row d-md-flex account-boxes">
          <div
            className={`col-md-4 account-box  ${
              activeTab === "standard" ? "expanded" : "collapsed"
            }`}
            onMouseEnter={() => handleTabClick("standard")}
          >
            <div className="standard-acc acc-watermark"></div>
            <div className="vertical-text">
              <h3>
                Standard <p>Account</p>{" "}
              </h3>
            </div>
            <div className="h-content">
              <h3>Standard Account</h3>
              <p>
                An excellent option for all types of traders, featuring tight
                spreads.
              </p>
              <a
                href="/account-comparison"
                className="btn-one rounded-btn blue-btn"
              >
                Open Account
              </a>
            </div>
          </div>
          <div
            className={`col-md-4 account-box ${
              activeTab === "gold" ? "expanded" : "collapsed"
            }`}
            onMouseEnter={() => handleTabClick("gold")}
          >
            <div className="gold-acc acc-watermark"></div>
            <div className="vertical-text">
              <h3>
                Gold <p>Account</p>{" "}
              </h3>
            </div>
            <div className="h-content">
              <h3>Gold Account</h3>
              <p>
                Similar to Standard account, you’ll enjoy ZERO spreads for over
                90% of the trading day, low commissions capped at 3.5 USD per
                lot per side and opportunity to earn excing rebates of up to
                21% of your commissions. MINIMUM deposit $1,000.
              </p>
              <a
                href="/account-comparison"
                onClick={(e) => handleLinkClick(e, false)}
                className="btn-one rounded-btn blue-btn"
              >
                Open Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
