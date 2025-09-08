import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function TestCompont() {
  return (
    <div className="bg-[#030B20] ">
      <div className="container mx-auto lg:pt-10  md:pb-5 px-4">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 mb-10 lg:justify-center lg:items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-white text-3xl lg:text-4xl capitalize">
              MetaTrader 4 mobile application
            </h2>
            <p className="text-sm lg:text-base text-white/20">
              MetaTrader 4 portable application will allow you to trade from
              anywhere in the world. Designed specifically for smartphones and
              tablets, this mobile terminal offers traders a familiar interface
              with slight modifications and the same set of tools and features
              as the desktop terminal. Download the portable version of the
              MetaTrader 4 to your mobile device and try trading from any
              convenient place - the terminal will always be with you!
            </p>
            <div className="flex flex-col md:flex-row justify-start items-start lg:items-center gap-4">
              <a
                href="https://download.mql5.com/cdn/mobile/mt4/ios?server=FastOneGlobal-Demo,FastOneGlobal-Main"
                className="text-white border border-[#4575FF] capitalize font-medium"
              >
                <div className="flex items-center bg-[#000A73]/50 px-10 py-1 gap-3">
                  <FaApple size={30} color="white" />
                  <div>
                    <p className="text-sm">Download on the</p>
                    <h3 className="text-lg">App Store</h3>
                  </div>
                </div>
              </a>
              <a
                href="https://download.mql5.com/cdn/mobile/mt4/android?server=FastOneGlobal-Demo,FastOneGlobal-Main"
                className="text-white border border-[#4575FF] capitalize font-medium"
              >
                <div className="flex items-center bg-[#000A73]/50 px-12 lg:px-10 py-1 gap-3">
                  <IoLogoGooglePlaystore size={30} color="white" />
                  <div>
                    <p className="text-sm">Get it on</p>
                    <h3 className="text-lg">Google Play</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex ">
            <div className="">
              <img src="/images/metatradermobile4.png" alt="mobile app" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCompont;
