import React from "react";
import "./FeaturesGrid.css";

const FeaturesGrid = ({ advantages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 md:px-20 xl:px-32 py-6">
      {advantages.map((adv, index) => (
        <>
          <div
            key={index}
            // className="flex gap-4 "
            className="flex flex-col rounded-2xl justify-center items-center gap-4 border border-[#4575FF] p-2 "
          >
            <div>
              {" "}
              <img src={adv.icon} alt="" className="w-8 xl:w-12 " />
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              {adv.title && (
                <h3 className="text-white text-sm lg:text-base font-bold mb-3">
                  {adv.title}
                </h3>
              )}
              <p className="text-[#D1D1D1] text-xs lg:text-sm ">
                {/* <p className="text-[#B2B2B2] text-xs lg:text-sm line-clamp-4"> */}
                {adv.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FeaturesGrid;
