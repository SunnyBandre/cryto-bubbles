import React from "react";
import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";
// bg-[#0d1b2a]
const OpenAccount = () => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <div className="mt-12 lg:mx-10 flex  justify-between   border-2 border-[#4575FF] shadow-xl/30  rounded-xl p-4 items-center gap-4">
      <div className=" text-white text-sm lg:text-xl font-bold  rounded-md ">
        Start Trading Now
      </div>
      <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
        <button className="bg-white text-sm lg:text-base text-black px-6 py-3 border-2 border-[#fff] rounded-xl cursor-pointer">
          Open Account Now
        </button>
      </Link>
    </div>
  );
  // return (
  //   <section className="py-10">
  //     <div className="max-w-screen-xl mx-auto px-4 start-trading">
  //       <div className="mt-3">
  //         <div className="flex">
  //           <div className="bg-gradient-to-b from-[#4575FF] to-[#92AEFF]  p-0.5 rounded-xl w-full">
  //             <div className="w-full border bg-[#030B20]  rounded-xl p-3 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center md:gap-6 ">
  //               {/* Left Column */}
  //               <div className="w-full md:w-1/2 box-left">
  //                 <h3 className="text-white text-2xl font-bold">
  //                   Start Trading Now
  //                 </h3>
  //               </div>

  //               {/* Right Column */}
  //               <div className="w-full md:w-1/2 box-right flex justify-center md::justify-end">
  //                 <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
  //                   <button className="inner-img">
  //                     <a
  //                       href="/account-comparison"
  //                       className="bg-white text-sm rounded-lg py-2 px-5 "
  //                     >
  //                       Open Account Now
  //                     </a>
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  // return (
  //   <section>
  //     <div className="container start-trading">
  //       <div className="row mt-3">
  //         <div className="col-md-12 d-flex">
  //           <div className="box-card card-shrink card-2  bgt-primary half">
  //             <div className="row d-flex">
  //               <div className="col-md-6 box-left">
  //                 <h3>Start Trading Now</h3>
  //               </div>
  //               <div className="col-md-6 box-right">
  //                 <div className="inner-img">
  //                   <a
  //                     href="/account-comparison"
  //                     className="btn-one rounded-btn white-btn"
  //                   >
  //                     Open Account Now
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default OpenAccount;
