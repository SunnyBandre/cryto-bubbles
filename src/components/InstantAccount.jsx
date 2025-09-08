import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";

function InstantAccount() {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <div className="bg-[#041329]">
      <div className="flex justify-center md:justify-around items-center py-6 text-center px-2 md:px-0 relative">
        <div>
          <p className="text-white font-semibold text-sm lg:text-lg ">
            Instant Account - Trade Within Minutes!
          </p>
        </div>
        <div>
          <Link to="#" onClick={(e) => handleLinkClick(e, false)}>
            <button className="text-xs lg:text-base bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md font-medium cursor-pointer transition-all duration-300 hover:bg-[#f0f4ff] hover:shadow-md hover:scale-105 hover:text-[#1e3a8a]">
              Start Live Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstantAccount;
