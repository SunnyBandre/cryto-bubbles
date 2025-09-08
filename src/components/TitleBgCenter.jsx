import React from "react";
import "./TitleBgCenter.css"; // Assuming you are creating a separate CSS file for styles
import Breadcrumbs from "./Breadcrumbs";

const TitleBgCenter = ({
  title,
  description,
  backgroundImage,
  breadcrumbPaths,
}) => {
  return (
    <div
      className={`page-title-area title-bg-center ${
        backgroundImage ? "with-bg" : ""
      }`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="overlay"></div>
      <div className="container ">
        <div className="pta-width pt-24">
          {/* <div className="pta-width pt-24"> */}
          {breadcrumbPaths && (
            <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
          )}
          {title && (
            <h1 className="text-xl lg:!text-6xl font-bold lg:mt-16 uppercase !text-transparent !bg-clip-text !bg-gradient-to-r !from-[#4575FF] !to-[#92AEFF]">
              {title}
            </h1>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TitleBgCenter;
