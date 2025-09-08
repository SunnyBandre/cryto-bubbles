import React from "react";
import "./TitleBgCenter.css"; // Assuming you are creating a separate CSS file for styles

const TitleBgCta = ({
  title,
  description,
  backgroundImage,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div
      className={`relative  text-center border-t border-white `}
      // className={`relative text-white text-center border-t border-white ${
      //   backgroundImage ? "bg-cover bg-center bg-no-repeat" : ""
      // }`}
      // style={
      //   backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      // }
    >
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {description && <p className="text-lg">{description}</p>}
          {buttonText && buttonUrl && (
            <a
              href={buttonUrl}
              className="inline-block text-center font-medium  bg-primary hover:opacity-90 px-6 py-3 rounded-[0.625rem] text-[1.125rem] min-w-[12rem] max-w-[14rem]"
            >
              {buttonText}
            </a>
          )}
        </div>
        <div>
          <img src={backgroundImage} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className={`page-title-area title-bg-cta ${
  //       backgroundImage ? "with-bg" : ""
  //     }`}

  //   >
  //     <div className="overlay"></div>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-6">
  //           {title && <h1>{title}</h1>}
  //           {description && <p>{description}</p>}
  //           {buttonText && buttonUrl && (
  //             <a href={buttonUrl} className="btn btn-one btn-primary">
  //               {buttonText}
  //             </a>
  //           )}
  //         </div>
  //         <div className="col-md-6">
  //           <img src={backgroundImage} alt="" className="cta-img-1" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TitleBgCta;
