import React from "react";
import "./CtaBox1.css";
const CtaBox = ({
  heading,
  description,
  buttonText,
  buttonImage,
  sectionColor,
  opacity,
}) => {
  return (
    <section
      className={`border border-[#4575FF] bg-[${sectionColor}]/${opacity} rounded-2xl  `}
    >
      <div className="lg:container relative lg:mx-auto">
        <div className="flex justify-center items-center text-center">
          <div className="max-w-2xl p-3">
            {/* <div className="max-w-2xl p-8 lg:p-3"> */}
            <h2 className="font-bold text-xl lg:text-3xl my-2 text-[#fff]">
              {heading}
            </h2>
            <p className="font-light text-sm  lg:text-lg my-2">{description}</p>
            <button className="my-3">
              <a
                href="https://wa.me/+971521651531?text=Hello, I would like to chat with you!"
                className="py-2 px-3 flex justify-center items-center text-center hover:opacity-90 rounded-xl bg-[#fff] text-[#000] "
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  {buttonImage && (
                    <img
                      src={buttonImage}
                      alt="Chat Icon"
                      className="imgbtn-2"
                    />
                  )}
                </div>
                <p>{buttonText}</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className={`ctabox-1 ${sectionColor}`}>
  //     <div className="container">
  //       <div className="row justify-content-center text-center">
  //         <div className="col-md-12">
  //           <h2 className="display-4">{heading}</h2>
  //           <p className="lead px-lg-12">{description}</p>
  //           <div className="d-grid justify-content-center">
  //             <a href="https://wa.me/+971521651531?text=Hello, I would like to chat with you!" className="btn-one rounded-btn white-btn" target="_blank" rel="noopener noreferrer">
  //               {buttonImage && <img src={buttonImage} alt="Chat Icon" className="imgbtn-2" />}
  //               {buttonText}
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default CtaBox;
