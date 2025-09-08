import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const TitleArea = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className="pt-28  md:pt-16 relative z-10">
      <h2 className="text-xs md:text-base text-white lg:pb-10">
        {breadcrumbPaths && (
          <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
        )}
      </h2>
      {title && (
        <h1 className=" uppercase mt-4 text-3xl pt-6 pb-3 md:pt-0 md:pb-0 lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
          {/* <h1 className="text-xl lg:text-3xl xl:text-5xl font-bold text-blue-400 mt-4"> */}
          {title}
        </h1>
      )}
      {description && (
        <p className="text-gray-300 mt-2 lg:mt-4 text-sm md:text-sm lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
// const TitleArea = ({ title, description, breadcrumbPaths }) => {
//   return (
//     <div className="page-title-area">
//       <div className="container">
//         <div className="text-center">
//           {breadcrumbPaths && <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />}
//           {title && <h1>{title}</h1>}
//           {description && <p>{description}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

export default TitleArea;
