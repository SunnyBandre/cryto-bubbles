import React from "react";
import "./PricingTable.css"; // Assuming you have a CSS file for styles
import { handleRedirect } from "../lib/redirectLocationHandler";

const PricingCard = ({
  title,
  initialDeposit,
  leverage,
  charges,
  tradeSize,
  platform,
  marginCall,
  stopoutLevel,
  rebate,
}) => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <div className=" text-white py-6 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl xl:min-w-sm mx-auto">
        <div className="border border-blue-500 rounded-xl p-6  shadow-lg flex flex-col justify-between ">
          <div className="">
            <h3 className="text-xl lg:text-3xl font-bold text-center  text-blue-400 mb-4">
              {title}
            </h3>
            <div
              className="h-0.5 w-full my-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #92AEFF 24%, #4575FF 77%, rgba(0, 0, 0, 0.2) 98%)",
              }}
            ></div>
            <div className="space-y-6  text-sm">
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className="flex-1 text-start text-[#B2B2B2]">
                  Initial Deposit
                </p>{" "}
                <p className="flex-1 flex justify-center items-center text-[#E3E3E3] text-lg lg:text-xl">
                  {" "}
                  {initialDeposit}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className="flex-1 text-start text-[#B2B2B2]">leverage</p>{" "}
                <p className="flex-1 flex justify-center items-center text-[#E3E3E3] text-lg lg:text-xl">
                  {" "}
                  {leverage}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className="flex-1 text-start text-[#B2B2B2] text-sm">
                  Charges
                </p>
                <div className="flex-1 flex justify-center items-center">
                  <ul className=" list-disc list-outside ml-2 space-y-1 text-xs lg:text-base text-[#CCD9FF]">
                    {charges.map((charge, index) => (
                      <li key={index}>{charge}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className="flex-1 text-start text-[#B2B2B2]">
                  Minimum Trade Size
                </p>{" "}
                <p className="flex-1 flex justify-center items-center text-lg lg:text-xl text-[#E3E3E3]">
                  {" "}
                  {tradeSize}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className="flex-1 text-start text-[#B2B2B2]">platform</p>{" "}
                <p className="flex-1 flex justify-center items-center text-lg lg:text-xl text-[#E3E3E3]">
                  {" "}
                  {platform}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <p className="flex-1 text-start text-[#B2B2B2]">
                  Margin Call/Stopout Level
                </p>{" "}
                <p className="flex-1 flex justify-center items-center text-lg lg:text-xl text-[#E3E3E3]">
                  {marginCall} / {stopoutLevel}
                </p>
              </div>
              {rebate && (
                <div className="pricing-feature">
                  <h6>Rebate</h6>
                  <p className="text-lg lg:text-xl">
                    {title === "Gold" ? <strong>{rebate}</strong> : rebate}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="h-0.5 w-full mt-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #92AEFF 24%, #4575FF 77%, rgba(0, 0, 0, 0.2) 98%)",
            }}
          ></div>
          <button className="gradient-button mt-5 my-5 w-full py-3 rounded-lg transition cursor-pointer">
            <a href="#" onClick={(e) => handleLinkClick(e, false)}>
              Open {title} Account
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingTable = () => {
  const pricingPlans = [
    {
      title: "Standard",
      initialDeposit: "$100",
      leverage: "Upto 1:500",
      charges: [
        "All inclusive spread",
        "Currency spread from 1.2",
        "Gold spread from 25 cents",
      ],
      tradeSize: "0.01 Lot",
      platform: "MT4/MT5",
      marginCall: "100%",
      stopoutLevel: "30%",
    },
    {
      title: "Gold",
      initialDeposit: "$1000",
      leverage: "Upto 1:500",
      charges: [
        "Raw + $3.5 per side",
        "Currency spread from 0",
        "Gold spread from 10 cents",
      ],
      tradeSize: "0.01 Lot",
      platform: "MT4/MT5",
      marginCall: "100%",
      stopoutLevel: "30%",
    },
  ];

  return (
    <section className="pricing-table">
      <div className=" my-2">
        <div className="flex flex-col md:flex-row justify-center  items-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
