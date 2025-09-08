import React from "react";
import "./WhyTrade.css";
import Cta2Btn from "./Cta2Btn";
const WhyTrade = ({ title, benefits }) => {
  return (
    <section className=" text-center flex justify-center bg-[#030B20] lg:py-10 ">
      <div className="container  mx-auto relative">
        {/* <div className="container px-4 mx-auto relative"> */}
        <h2 className="text-lg md:text-nowrap sm:text-wrap md:text-3xl font-bold py-8 md:py-20 text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
          {title}
        </h2>
        <ul className="flex flex-col py-12 md:py-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-8 p-0 m-0">
          {benefits.map((benefit, index) => (
            <div
              className="border border-[#92AEFF] p-2 rounded-xl flex  items-center  "
              key={index}
            >
              <li className="text-left border-l-2 border-[#4575FF] px-4 py-4 flex  text-[#B2B2B2]">
                <p>{benefit}</p>
              </li>
            </div>
          ))}
        </ul>

        <Cta2Btn
          title="Start trading now or open a demo account to explore our platforms."
          description=""
          button1="Open Live Account"
          button2="Open Demo Account"
          buttonLinks={["#", "#"]}
        />
      </div>
    </section>
  );
  // return (
  //   <section className="why-trade text-center">
  //     <div className="container">
  //       <h2 className="wt-top-title">{title}</h2>
  //       <ul className="why-trade-grid">
  //         {benefits.map((benefit, index) => (
  //           <li key={index} className="card">
  //             <p>{benefit}</p>
  //           </li>
  //         ))}
  //       </ul>

  //       <Cta2Btn
  //         title="Start trading now or open a demo account to explore our platforms."
  //         description=""
  //         button1="Open Live Account"
  //         button2="Open Demo Account"
  //         buttonLinks={["#", "#"]}
  //       />
  //     </div>
  //   </section>
  // );
};

export default WhyTrade;
