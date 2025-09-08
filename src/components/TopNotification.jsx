import React from "react";
import styles from "./TopNotification.module.css";
import TradingViewWidget from "./PriceTicker";
const TopNotification = () => {
  return (
    <>
      <div className={styles.riskWarning}>
        <p className={styles.message}>
          CFDs are complex instruments and come with a high risk of losing money
          rapidly due to leverage.
          <strong>
            81.76% of retail investor accounts lose money when trading CFDs.
          </strong>
          You should consider whether you understand how CFDs work and whether
          you can afford to take the high risk of losing your money.
        </p>
      </div>
      <div className={styles.clearTop}></div>
    </>
  );
};

export default TopNotification;
