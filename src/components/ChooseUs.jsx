import React from "react";
import FeaturesGrid from "./FeaturesGrid";

const advantages = [
  
  {
    icon: '/images/icons/security-system.png',
    description: 'Trusted Trading Platforms.',
  },
  {
    icon: '/images/icons/verified.png',
    description: 'Trusted Regulations.',
  },
  {
    icon: '/images/icons/transparency.png',
    description: 'No Dealing Desk (NDD) Execution, ensuring transparency and fairness.',
  },
  {
    icon: '/images/icons/data-integration.png',
    description: 'We utilize STP technologies, ensuring our commitment to order execution integrity.',
  },
];

const ChooseUs = () => {
  return (
    <section className="sp-5">
      <div className="container">
        <div className="text-center">
          <h2> Experience Fastone Markets</h2>
          <p>
            FASTONE provides a comprehensive suite of tools and resources
            designed to empower traders of all levels. Our commitment to
            excellence is reflected in our extensive educational library,
            in-depth market analysis, and powerful trading tools.
          </p>
        </div>
        <h3>Advantages with Fastone</h3>
        <FeaturesGrid advantages={advantages} />
      </div>
    </section>
  );
};

export default ChooseUs;
