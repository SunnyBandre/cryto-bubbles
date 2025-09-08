import { handleRedirect } from "../lib/redirectLocationHandler";
import { Link } from "react-router-dom";

function Howtogetstarted() {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-white">
      {/* Left Side */}
      <div className="space-y-4">
        <h2 className="text-2xl xl:text-3xl text-[#1368A6] font-semibold">
          How to get Started
        </h2>
        <p className=" 2xl:text-lg text-[#D1D1D1]">
          Getting Started is as simple as 1 2 3! And the onboarding process is
          so smooth you won’t have to worry about a thing.
        </p>
        <div className="font-medium">
          <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
            <button className="gradient-button px-6 py-2 rounded-md">
              Start Trading
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[#1368A6]/20 rounded-xl p-8 space-y-6 shadow-md border border-[#4575FF]">
        <div className="flex items-center gap-4 lg:mt-6">
          <div className="text-5xl font-bold text-white">1</div>
          <div>
            <h3 className="font-bold text-2xl text-white">Open An Account</h3>
            <p className="text-sm ">
              Register using your full name, email and password
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-t border-blue-300 pt-6">
          <div className="text-5xl font-bold text-white">2</div>
          <div>
            <h3 className="font-semibold text-2xl text-white">Add Funds</h3>
            <p className="text-sm text-gray-200">
              Fund your account using any of the multiple methods.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-t border-blue-300 pt-6">
          <div className="text-5xl font-bold text-white">3</div>
          <div>
            <h3 className="font-semibold text-2xl text-white">Start Trading</h3>
            <p className="text-sm text-gray-200">
              Use the desktop or mobile platform to launch your trades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtogetstarted;
