import React, { useEffect } from "react";

const PriceTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "in",
    });

    const container = document.querySelector(".tradingview-widget-container");
    container.innerHTML = ""; // Clear any existing content
    container.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative sm:h-[45px] overflow-hidden">
      <div className="tradingview-widget-container h-full">
        <div className="tradingview-widget-container__widget h-full"></div>
        <div className="tradingview-widget-copyright hidden">
          <a
            href="https://in.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            {/* <span className="blue-text">Track all markets on TradingView</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
