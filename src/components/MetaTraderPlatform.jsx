import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

function MetaTraderPlatform({
  imagepath,
  title,
  description,
  button,
  animation,
}) {
  console.log(button);

  const { ref: ref, inView: inView } = useInView({
    triggerOnce: false, // play once
    threshold: 0.5, // 50% of element should be visible
  });

  return (
    <div ref={ref} className="bg-[#030B20]">
      <div className="container mx-auto  lg:pt-10  md:pb-5 relative">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0  mb-10 lg:justify-center lg:items-center">
          <div className="flex-1 space-y-6">
            {title && (
              <h2 className="text-white text-4xl lg:text-4xl">{title}</h2>
            )}
            {description && <p className="text-white/60">{description}</p>}
            {button && (
              <div className="flex flex-col items-start md:flex-row relative md:justify-start md:items-center gap-4">
                {button.map((buttonitem, index) => (
                  <button
                    className="text-white border border-[#4575FF] capitalize font-medium cursor-pointer rounded-sm"
                    key={index}
                  >
                    {" "}
                    <a href={buttonitem.href}>
                      <div
                        className={`flex items-center bg-[#000A73]/50 rounded-sm ${
                          index === 1 ? "px-12" : "px-10"
                        }   py-1 gap-3`}
                      >
                        {buttonitem.imgpath && (
                          <div>
                            <img src={buttonitem.imgpath} alt="mt5" />
                          </div>
                        )}
                        {buttonitem?.icon}
                        {buttonitem.firstname && buttonitem.lastname && (
                          <div>
                            <p className="text-sm">{buttonitem.firstname}</p>
                            <h3 className="text-lg">{buttonitem.lastname}</h3>
                          </div>
                        )}
                      </div>
                    </a>
                  </button>
                ))}
              </div>

              //   <div className="flex justify-start items-center gap-4 flex-wrap">
              //     {button.map((buttonitem, index) => (
              //       <a
              //         key={index}
              //         href={buttonitem.href}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="flex items-center gap-3 px-6 py-3 bg-[#000A73]/50 text-white border border-[#4575FF] rounded capitalize font-medium hover:bg-[#000A73]/70 transition-all duration-200"
              //       >
              //         {buttonitem.imgpath && (
              //           <img
              //             src={buttonitem.imgpath}
              //             alt="icon"
              //             className="w-6 h-6 object-contain"
              //           />
              //         )}

              //         {buttonitem?.icon && (
              //           <span className="text-white">{buttonitem.icon}</span>
              //         )}

              //         <div className="leading-tight text-left">
              //           {buttonitem.firstname && (
              //             <p className="text-sm">{buttonitem.firstname}</p>
              //           )}
              //           {buttonitem.lastname && (
              //             <h3 className="text-lg font-semibold">
              //               {buttonitem.lastname}
              //             </h3>
              //           )}
              //         </div>
              //       </a>
              //     ))}
              //   </div>
            )}
          </div>
          {/* {!inView && imagepath && (
            <div className="flex-1 flex justify-center ">
              <div className="relative">
                <img src={imagepath} alt="dummy image" />
              </div>
            </div>
          )}
          {inView && animation && (
            <div className="flex-1 flex justify-center ">
              <div className="relative ">
                <Lottie animationData={animation} />
              </div>
            </div>
          )} */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-[350px] sm:h-[450px]">
              {" "}
              {/* Same size for both */}
              {inView && animation ? (
                <Lottie
                  animationData={animation}
                  loop={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              ) : (
                <img
                  src={imagepath}
                  alt="dummy image"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetaTraderPlatform;
