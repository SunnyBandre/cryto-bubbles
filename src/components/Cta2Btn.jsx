import React from "react";
import "./Cta2Btn.css";
import { handleRedirect } from "../lib/redirectLocationHandler";

const Cta2Btn = ({ title, description, button1, button2, buttonLinks }) => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };
  return (
    <div className="!bg-[#1368A6]/20 flex justify-center text-center my-8 md:my-20  py-8 border border-[#4575FF] rounded-2xl">
      <div className="">
        <h2 className="text-xl leading-relaxed md:text-2xl lg:text-3xl text-white lg:leading-tight ">
          {title}
        </h2>
        <p>{description}</p>
        <div>
          <a
            href={buttonLinks[0]}
            onClick={(e) => handleLinkClick(e, false)}
            className="inline-block text-center font-medium  md:text-lg px-6 py-2 md:px-5  md:py-4 rounded-xl text-black hover:opacity-90 bg-white m-4"
            // className="btn-one m-4 rounded-btn white-btn"
          >
            {button1}
          </a>
          <a
            href={buttonLinks[1]}
            onClick={(e) => handleLinkClick(e, false)}
            className="inline-block text-center font-medium  md:text-lg px-4 py-2 md:px-4 md:py-4 rounded-xl text-black hover:opacity-90 bg-white m-4"
            // className="btn-one rounded-btn white-btn"
          >
            {button2}
          </a>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="row cta2btn">
  //     <div className="col-12">
  //       <h2>{title}</h2>
  //       <p>{description}</p>
  //       <div>
  //         <a href={buttonLinks[0]} onClick={(e) => handleLinkClick(e, false)} className="btn-one rounded-btn white-btn">
  //           {button1}
  //         </a>
  //         <a href={buttonLinks[1]} onClick={(e) => handleLinkClick(e, false)} className="btn-one rounded-btn white-btn ms-2">
  //           {button2}
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Cta2Btn;
