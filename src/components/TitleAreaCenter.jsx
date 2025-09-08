import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const TitleAreaCenter = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className={`text-center py-8`}>
      {/* <div className={`title-area-center`}> */}
      <div className="container mx-auto ">
        <div className="pta-width pt-20">
          {breadcrumbPaths && (
            <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
          )}
          <div className="pt-8 lg:pt-12 space-y-5">
            {title && (
              <h1 className="text-2xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                {/* <h1 className="text-2xl lg:text-7xl  font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text"> */}
                {title}
              </h1>
            )}
            {description && (
              <p className=" text-base lg:leading-[24px] text-white">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className={`title-area-center bg-${bgColor}`}>
  //     <div className="container">
  //       <div className="pta-width">
  //         {breadcrumbPaths && (
  //           <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
  //         )}
  //         {title && <h1 className={`${titleSize} ${fontColor}`}>{title}</h1>}
  //         {description && <p>{description}</p>}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TitleAreaCenter;
