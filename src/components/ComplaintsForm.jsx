import React from "react";
// import "./ContactForm.css";
const ComplaintsForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-0 justify-around  [&_h4]:text-white [&_h5]:text-white [&_label]:text-white py-10 lg:py-20">
      <div className=" bg-[#126CAB]/20 max-w-sm lg:max-w-lg w-full  rounded-2xl p-4">
        <div className="font-Poppins font-semibold py-3">
          <p className="text-sm text-[#4575FF]">Complaint Form</p>
          <h4 className="">
            If you have any complaint, please fill below form. We will respond
            to your complaints within 1 day.
          </h4>
          {/* <h5 className="text-xl">Get in Touch!</h5> */}
        </div>
        <div className="font-Poppins pl-2">
          <form action="" className="font-semibold ">
            <div className="mb-2 flex flex-col gap-1.5">
              <label className="font-semibold text-sm">Name*</label>
              <input
                type="text"
                name="name"
                className="font-medium w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] capitalize text-sm"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-2 flex flex-col gap-1.5">
              <label className="mt-2 text-sm">Email id*</label>
              <input
                type="email"
                name="email"
                className="font-medium w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] text-sm"
                placeholder="example@gmail.com"
                required
              />
            </div>
            {/* <div className="mb-2 flex flex-col gap-1.5">
            <label className="mt-2 text-sm">Company Name*</label>
            <input
              type="text"
              name="companyName"
              className="w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] font-medium text-sm"
              required
            />
          </div> */}
            <div className="mb-2 flex flex-col gap-1.5">
              <label className="font-semibold mt-2 text-sm">
                Mobile Number*
              </label>
              <input
                type="Number"
                name="mobileNo"
                className="w-full rounded-lg p-2 mb-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#D1D5DB] bg-[#F8F8F8] placeholder:text-[#CCC] font-medium text-sm"
                placeholder="Enter Mobile No"
                required
              />
            </div>
            <div className="mb-2 flex flex-col gap-1.5">
              <label className=" mt-2 text-sm">Message*</label>
              <textarea
                rows="4"
                name="message"
                className="w-full rounded-lg p-2 mb-1 border-2 border-[#D1D5DB] bg-[#F8F8F8] focus:outline-none placeholder:text-[#CCC] font-medium text-sm"
                placeholder="your message..."
              >
                {" "}
              </textarea>
            </div>
            <button
              className="px-10 py-2 font-bold rounded-lg bg-[#13275C] border-white   border-1 mb-2 text-white"
              // onClick={handleformsubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className=" flex  ">
        <div className="lg:max-w-lg">
          {" "}
          <img src="/images/contactimg.png" alt="form image" />
        </div>
      </div>
    </div>
  );
  // return (
  //   <section className="contact-form">
  //     <div className="container">
  //       <div className="row cf-bg">
  //         <div className="col-md-6 contact-img-bg">
  //           <img src="/images/tp/contact-img.png" alt="" />
  //         </div>
  //         <div className="col-md-6">
  //         <form>
  //       <h4 className="mb-5 cf-title">Complaint Form</h4>
  //       <p>If you have any complaint, please fill below form. We will respond to your complaints within 1 day.</p>
  //         <div className="row mb-3 mt-5">
  //           <div className="col-md-6">
  //             <label for="firstName" className="form-label">
  //               First Name
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="firstName"
  //               placeholder="First Name"
  //             />
  //           </div>
  //           <div className="col-md-6">
  //             <label for="lastName" className="form-label">
  //               Last Name
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="lastName"
  //               placeholder="Last Name"
  //             />
  //           </div>
  //         </div>
  //         <div className="row mb-3">
  //           <div className="col-md-6">
  //             <label for="email" className="form-label">
  //               Email
  //             </label>
  //             <input
  //               type="email"
  //               className="form-control"
  //               id="email"
  //               placeholder="name@example.com"
  //             />
  //           </div>
  //           <div className="col-md-6">
  //             <label for="contact" className="form-label">
  //               Contact
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="contact"
  //               placeholder="(123) 456-7890"
  //             />
  //           </div>
  //         </div>
  //         <div className="mb-3">
  //           <label for="message" className="form-label">
  //             Message
  //           </label>
  //           <textarea
  //             className="form-control"
  //             id="message"
  //             rows="5"
  //             placeholder="Your message"
  //           ></textarea>
  //         </div>

  //         <button type="submit" className="btn btn-primary">
  //           Submit
  //         </button>
  //       </form>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default ComplaintsForm;
