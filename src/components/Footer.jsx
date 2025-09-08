import React from "react";
import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";
export const Footer = () => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };
  return (
    <>
      {/* <section className="start-la">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h3 className="text-white font-weight-bold">
                Instant Account - Trade Within Minutes!
              </h3>
            </div>
            <div className="col-12 col-md-6 text-center">
              <Link
                to="#"
                onClick={(e) => handleLinkClick(e, false)}
                className="btn-one rounded-btn white-btn"
              >
                Start Live Account
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="bg-[#030B20] !pb-5">
        <section>
          <div className="container mx-auto text-[#B2B2B2] [&_h2]:text-[#FFFFFF]">
            <div className=" grid grid-cols-2  lg:flex  lg:justify-between [&_h2]:font-bold [&_h2]:text-2xl [&_li]:hover:bg-gradient-to-r [&_li]:hover:from-[#4575FF] [&_li]:hover:to-[#92AEFF] [&_li]:hover:text-transparent [&_li]:hover:bg-clip-text [&_li]:hover:scale-103 [&_li]:transition-all [&_li]:duration-500 [&_li]:ease-in-out [&_ul]:space-y-1.5">
              <div className="">
                <div className="footer-menu-title">
                  <h2>Compare</h2>
                  <p>Trade with FastOne</p>
                </div>
                <ul>
                  <li>
                    <Link to="/pricing-model">Trading Costs</Link>
                  </li>
                  <li>
                    <Link to="/account-comparison">Accounts</Link>
                  </li>

                  <li>
                    <Link to="/deposits-and-withdrawls">
                      Deposits and Withdrawals
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/introducing-broker">Partner with Fastone</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="footer-menu-title">
                  <h2>Trading</h2>
                  <p>Market & Tools</p>
                </div>
                <ul>
                  <li>
                    <Link to="/currencies">Trading Currencies CFDs</Link>
                  </li>
                  <li>
                    <Link to="/metals">Trading Metal CFDs</Link>
                  </li>

                  <li>
                    <Link to="/energy">Trading Energy CFDs</Link>
                  </li>
                  <li>
                    <Link to="/indices">Trading Index CFDs</Link>
                  </li>
                  <li>
                    <Link to="/cfd">Trading CFD</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="footer-menu-title">
                  <h2>Insights</h2>
                  <p>Educational Materials</p>
                </div>
                <ul>
                  <li>
                    <Link to="">Events & Webinars</Link>
                  </li>
                  <li>
                    <Link to="/market-updates">News & Media</Link>
                  </li>
                </ul>
                <div className="footer-menu-title">
                  <p>Trader Tools</p>
                </div>
                <ul>
                  <li>
                    <Link to="/metatrader4"> MetaTrader 4</Link>
                  </li>
                  <li>
                    <Link to="/metatrader5">MetaTrader 5</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="footer-menu-title">
                  <h2>More</h2>
                  <p>Legal Information</p>
                </div>
                <ul>
                  <li>
                    <Link to="/contact">Talk to us</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <a href="/docs/fastone-client-agreement.pdf">
                      Legal Documents & Disclosures
                    </a>
                  </li>
                </ul>
                <div className="border-b-1 border-b-[#adadad] border-dashed pb-1 lg:mt-3">
                  {/* <h2>Follow Us</h2> */}
                  <p>Social Media</p>
                </div>
                <div className="mt-3">
                  <div className="footer-social ">
                    <ul className="flex">
                      <li className="relative group">
                        <a
                          href="https://www.facebook.com/Vibhsmu/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="social-icon hover:scale-105"
                          >
                            <defs>
                              <linearGradient
                                id="socialGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#4575FF" />
                                <stop offset="100%" stopColor="#92AEFF" />
                              </linearGradient>
                            </defs>
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                          </svg>
                        </a>
                        {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-blue-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          Facebook
                        </span> */}
                      </li>
                      <li className="relative group">
                        <a
                          href="https://www.instagram.com/fastone_global/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="social-icon hover:scale-105"
                          >
                            <defs>
                              <linearGradient
                                id="socialGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#4575FF" />
                                <stop offset="100%" stopColor="#92AEFF" />
                              </linearGradient>
                            </defs>
                            <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                          </svg>
                        </a>
                        {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-pink-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          Instagram
                        </span> */}
                      </li>
                      <li className="relative group">
                        <a
                          href="https://twitter.com/fastone_global"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="104"
                            height="104"
                            viewBox="0 0 104 104"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="social-icon hover:scale-105"
                          >
                            <defs>
                              <linearGradient
                                id="socialGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#4575FF" />
                                <stop offset="100%" stopColor="#92AEFF" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M52.002 0.799805C66.0988 0.799805 78.8921 6.54547 88.1748 15.8281C93.9732 21.6531 98.4158 28.861 100.916 36.8936C102.006 40.431 102.724 44.1019 103.017 47.9053C103.043 48.1712 103.07 48.4636 103.07 48.7295C103.177 49.82 103.203 50.8839 103.203 52.001C103.203 53.3839 103.15 54.7403 103.017 56.0967C102.032 68.5445 96.5266 79.7955 88.1748 88.1738C78.8921 97.4565 66.0989 103.202 52.002 103.202C48.1985 103.202 44.5014 102.776 40.9639 101.979C38.4638 101.447 36.07 100.728 33.7295 99.8242C14.5258 92.43 0.800781 73.7315 0.800781 52.001C0.800792 37.9307 6.57303 25.1108 15.8291 15.8281C25.1118 6.54546 37.9051 0.799816 52.002 0.799805ZM22.7549 23.2744L45.2305 55.9902L22.4092 82.5088H30.4951L48.8213 61.2031L63.4502 82.5088H82.9727L59.6729 48.623L81.4834 23.2744H73.3975L56.082 43.4092L42.252 23.2744H22.7549ZM40.9482 25.6416L55.8428 47.3193L74.4883 25.6416H76.2168L56.6143 48.4365L78.3711 80.0879H64.7266L49.0342 57.2402L29.3779 80.0879H27.6494L48.2627 56.123L27.3037 25.6416H40.9482ZM29.3779 26.9453L65.7637 78.9707H76.2441L39.8574 26.9453H29.3779ZM38.6074 29.3662L71.6152 76.5771H67.0146L34.0059 29.3662H38.6074Z"
                              fill="#ADADAD"
                            />
                          </svg>
                        </a>
                        {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-blue-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          Twitter
                        </span> */}
                      </li>
                      <li className="relative group">
                        <a
                          href="https://www.linkedin.com/company/vibhs-financials-ltd-mauritius"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                            className="social-icon hover:scale-105"
                          >
                            <defs>
                              <linearGradient
                                id="socialGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#4575FF" />
                                <stop offset="100%" stopColor="#92AEFF" />
                              </linearGradient>
                            </defs>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-blue-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                          LinkedIn
                        </span> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-comapny-select [&_span]:text-white [&_span]:hover:bg-gradient-to-r [&_span]:hover:from-[#4575FF] [&_span]:hover:to-[#92AEFF] [&_span]:hover:text-transparent [&_span]:hover:bg-clip-text">
              <Link to="/faqs">
                <span>FAQs</span>
              </Link>
              <Link to="/legal">
                <span>Legal</span>
              </Link>
              <Link to="/data-protection">
                <span>Data Protection</span>
              </Link>
              <Link to="/complaints">
                <span>Complaints</span>
              </Link>
            </div>
            <div className="space-y-4 text-xs leading-4.5 lg:pb-6">
              {/* <div className="footer-bottom"> */}
              <div className="col-md-4">
                <p>
                  © FastOne Global Financial Markets Limited All rights
                  reserved.
                </p>
                <p>Regulated by the FSC Under License No. C113011860</p>
              </div>
              <div className="col-md-4">
                <p>
                  CFDs (contract for difference), forwards, options, other
                  derivatives, financial, commodities and leveraged
                  products/instruments/contracts on margin carry high risks, and
                  may not be suitable for all traders/clients and investors.
                  Before deciding to trade these products, financial and
                  commodity instruments including those offered by FastOne
                  Global Financial Markets Limited ("FastOne"), a client should
                  carefully consider his/her expertise, knowledge, objectives,
                  financial situation, needs and level of experience. FastOne is
                  a registered Global Business License company having investment
                  dealer license (full services) and regulated by FSC (Financial
                  Services Commission), Mauritius. FastOne either directly,
                  through its' associate company/companies and/or third party
                  may provide general advice, reports, news, data and other
                  materials that do not take into account specific objectives,
                  financial situation or needs of individual clients.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  The content of this website must not be construed as personal
                  advice or as an attempt by the FastOne to solicit business or
                  an attempt of persuasion for trading. The possibility exists
                  that a client could sustain a loss of some or all of his/her
                  deposited funds and therefore, client should not speculate
                  with capital that he/she cannot afford to lose. A client
                  should be very aware of all the risks associated with trading
                  on margin and associated financial risk. FastOne recommends
                  its' clients to seek advice from an independent financial
                  advisor and/or apply his/her own prudent decision.
                </p>
                <p>
                  FastOne Global Financial Markets Limited does not provide
                  services to FATF blacklist countries and any jurisdiction
                  where the licensee is restricted/prohibited to provide its
                  services
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
  // return (
  //   <>
  //     <section className="start-la">
  //       <div className="container py-3">
  //         <div className="row align-items-center">
  //           <div className="col-12 col-md-6">
  //             <h3 className="text-white font-weight-bold">
  //               Instant Account - Trade Within Minutes!
  //             </h3>
  //           </div>
  //           <div className="col-12 col-md-6 text-center">
  //             <Link
  //               to="#"
  //               onClick={(e) => handleLinkClick(e, false)}
  //               className="btn-one rounded-btn white-btn"
  //             >
  //               Start Live Account
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <footer>
  //       <section>
  //         <div className="container">
  //           <div className="footer-menu row">
  //             <div className="menu-wrapper col-md-3">
  //               <div className="footer-menu-title">
  //                 <h2>Compare</h2>
  //                 <p>Trade with FastOne</p>
  //               </div>
  //               <ul>
  //                 <li>
  //                   <Link to="/pricing-model">Trading Costs</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/account-comparison">Accounts</Link>
  //                 </li>

  //                 <li>
  //                   <Link to="/deposits-and-withdrawls">
  //                     Deposits and Withdrawals
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/about">About us</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/introducing-broker">Partner with Fastone</Link>
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="menu-wrapper col-md-3">
  //               <div className="footer-menu-title">
  //                 <h2>Trading</h2>
  //                 <p>Market & Tools</p>
  //               </div>
  //               <ul>
  //                 <li>
  //                   <Link to="/currencies">Trading Currencies CFDs</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/metals">Trading Metal CFDs</Link>
  //                 </li>

  //                 <li>
  //                   <Link to="/energy">Trading Energy CFDs</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/indices">Trading Index CFDs</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/cfd">Trading CFD</Link>
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="menu-wrapper col-md-3">
  //               <div className="footer-menu-title">
  //                 <h2>Insights</h2>
  //                 <p>Educational Materials</p>
  //               </div>
  //               <ul>
  //                 <li>
  //                   <Link to="">Events & Webinars</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/market-updates">News & Media</Link>
  //                 </li>
  //               </ul>
  //               <div className="footer-menu-title">
  //                 <p>Trader Tools</p>
  //               </div>
  //               <ul>
  //                 <li>
  //                   <Link to="/desktop/metatrader4"> MetaTrader 4</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/desktop/metatrader5">MetaTrader 5</Link>
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="menu-wrapper col-md-3">
  //               <div className="footer-menu-title">
  //                 <h2>More</h2>
  //                 <p>Legal Information</p>
  //               </div>
  //               <ul>
  //                 <li>
  //                   <Link to="/contact">Talk to us</Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/faqs">FAQs</Link>
  //                 </li>
  //                 <li>
  //                   <a href="/docs/fastone-client-agreement.pdf">
  //                     Legal Documents & Disclosures
  //                   </a>
  //                 </li>
  //               </ul>
  //               <div className="footer-menu-title">
  //                 <h2>Follow Us</h2>
  //                 <p>Social Media</p>
  //               </div>
  //               <div className="follow-us">
  //                 <div className="footer-social">
  //                   <ul className="d-flex">
  //                     <li>
  //                       <a
  //                         href="https://www.facebook.com/Vibhsmu/"
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         <svg
  //                           width="24"
  //                           height="24"
  //                           viewBox="0 0 24 24"
  //                           version="1.1"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           aria-hidden="true"
  //                           focusable="false"
  //                         >
  //                           <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
  //                         </svg>
  //                       </a>
  //                       <span className="screen-reader">Facebook</span>
  //                     </li>
  //                     <li>
  //                       <a
  //                         href="https://www.instagram.com/fastone_global/"
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         <svg
  //                           width="24"
  //                           height="24"
  //                           viewBox="0 0 24 24"
  //                           version="1.1"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           aria-hidden="true"
  //                           focusable="false"
  //                         >
  //                           <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
  //                         </svg>
  //                       </a>
  //                       <span className="screen-reader">Instagram</span>
  //                     </li>
  //                     <li>
  //                       <a
  //                         href="https://twitter.com/fastone_global"
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         <svg
  //                           width="24"
  //                           height="24"
  //                           viewBox="0 0 24 24"
  //                           version="1.1"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           aria-hidden="true"
  //                           focusable="false"
  //                         >
  //                           <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
  //                         </svg>
  //                       </a>
  //                       <span className="screen-reader">Twitter</span>
  //                     </li>
  //                     <li>
  //                       <a
  //                         href="https://www.linkedin.com/company/vibhs-financials-ltd-mauritius"
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         <svg
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           width="24"
  //                           height="24"
  //                           viewBox="0 0 24 24"
  //                           aria-hidden="true"
  //                           focusable="false"
  //                         >
  //                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  //                         </svg>
  //                       </a>
  //                       <span className="screen-reader">LinkedIn</span>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="footer-comapny-select">
  //             <Link to="/faqs">FAQs</Link>
  //             <Link to="/legal">Legal</Link>
  //             <Link to="/data-protection">Data Protection</Link>
  //             <Link to="/complaints">Complaints</Link>
  //           </div>
  //           <div className="footer-bottom row">
  //             <div className="col-md-4">
  //               <p>
  //                 © FastOne Global Financial Markets Limited All rights
  //                 reserved.
  //               </p>
  //               <p>Regulated by the FSC Under License No. C113011860</p>
  //             </div>
  //             <div className="col-md-4">
  //               <p>
  //                 CFDs (contract for difference), forwards, options, other
  //                 derivatives, financial, commodities and leveraged
  //                 products/instruments/contracts on margin carry high risks, and
  //                 may not be suitable for all traders/clients and investors.
  //                 Before deciding to trade these products, financial and
  //                 commodity instruments including those offered by FastOne
  //                 Global Financial Markets Limited ("FastOne"), a client should
  //                 carefully consider his/her expertise, knowledge, objectives,
  //                 financial situation, needs and level of experience. FastOne is
  //                 a registered Global Business License company having investment
  //                 dealer license (full services) and regulated by FSC (Financial
  //                 Services Commission), Mauritius. FastOne either directly,
  //                 through its' associate company/companies and/or third party
  //                 may provide general advice, reports, news, data and other
  //                 materials that do not take into account specific objectives,
  //                 financial situation or needs of individual clients.
  //               </p>
  //             </div>
  //             <div className="col-md-4">
  //               <p>
  //                 The content of this website must not be construed as personal
  //                 advice or as an attempt by the FastOne to solicit business or
  //                 an attempt of persuasion for trading. The possibility exists
  //                 that a client could sustain a loss of some or all of his/her
  //                 deposited funds and therefore, client should not speculate
  //                 with capital that he/she cannot afford to lose. A client
  //                 should be very aware of all the risks associated with trading
  //                 on margin and associated financial risk. FastOne recommends
  //                 its' clients to seek advice from an independent financial
  //                 advisor and/or apply his/her own prudent decision.
  //               </p>
  //               <p>
  //                 FastOne Global Financial Markets Limited does not provide
  //                 services to FATF blacklist countries and any jurisdiction
  //                 where the licensee is restricted/prohibited to provide its
  //                 services
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </footer>
  //   </>
  // );
};
