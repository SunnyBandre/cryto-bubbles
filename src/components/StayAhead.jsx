import React from "react";

const StayAhead = () => {
  return (
    <section className="sp-5">
      <div className="container">
        <div className="text-center">
          <h2>Stay ahead of the curve</h2>
          <p>
            Grow in a community of traders – with guidance from professionals.
          </p>
        </div>

        <div className="row">
          <div className="col-md-12 d-flex">
            <div className="box-card  bgt-white half">
              <div className="row d-flex">
                <div className="col-lg-6 box-left">
                  <div className="fg-1">
                    <h3>Partner with FASTONE</h3>
                    <p>
                      At FASTONE, we value the power of partnerships and
                      recognize the critical role Introductory Brokers (IBs)
                      play in connecting traders with reliable trading
                      resources. We invite you to join our growing network and
                      enjoy unparalleled support and lucrative opportunities as
                      an IB.
                    </p>
                    <ul className="mt-2">
                      <li>Competitive Commission Structure</li>
                      <li>Comprehensive Support</li>
                      <li>Cutting-Edge Trading Platform</li>
                      <li>Educational Resources</li>
                      <li>Transparent Reporting</li>
                      <li>Global Reach</li>
                    </ul>
                  </div>
                  <a href="/introducing-broker" className="btn-one rounded-btn btn-primary">
                    Become an IB Now
                  </a>
                </div>
                <div className="col-lg-6 box-right">
                  <div className="inner-img">
                    <img src="/images/home-img/partner-db.png" alt="" />
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

export default StayAhead;
