import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1">
      {questions.map((item, index) => (
        <div key={index} className="mb-4 text-[#D1D1D1]">
          <div
            className={`text-sm lg:text-base flex justify-between items-center p-3 border cursor-pointer font-bold transition-colors duration-300 border-[#4575FF] ${
              activeIndex === index ? "bg-[#000]/30" : "bg-[#000]/30"
            }`}
            // className={`flex justify-between items-center p-3 border cursor-pointer font-bold transition-colors duration-300 ${
            //   activeIndex === index ? "bg-gray-200" : "bg-gray-100"
            // }`}
            onClick={() => toggleQuestion(index)}
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="p-3   border border-t-0 border-[#4575FF] bg-[#000]/30 text-left">
              {/* <div className="p-3 border border-t-0 bg-white text-left"> */}
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
  // return (
  //   <div className="faq row">
  //     {questions.map((item, index) => (
  //       <div key={index} className="faq-item col-md-12 mb-4">
  //         <div
  //           className={`faq-question d-flex justify-content-between  p-3 ${activeIndex === index ? 'active' : ''}`}
  //           onClick={() => toggleQuestion(index)}
  //         >
  //           <span>{item.question}</span>
  //           <span>{activeIndex === index ? '-' : '+'}</span>
  //         </div>
  //         {activeIndex === index && (
  //           <div className="faq-answer p-3">
  //             <div dangerouslySetInnerHTML={{ __html: item.answer }} />
  //           </div>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Faq;
