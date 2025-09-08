import React from "react";
import { Link } from "react-router-dom";

const Cta3 = ({ title, link, linkText }) => {
  return (
    <section>
      <div className="container start-trading">
        <div className="row mt-3">
          <div className="col-md-12 d-flex">
            <div className="box-card card-shrink card-2 bgt-primary half">
              <div className="row d-flex  align-items-center">
                <div className="col-md-6 box-left">
                  <p className="m-0">{title}</p>
                </div>
                <div className="col-md-6 box-right">
                  <div className="inner-img">
                    <Link to={link} className="btn-one rounded-btn white-btn">
                      {linkText}
                    </Link>
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

export default Cta3;
