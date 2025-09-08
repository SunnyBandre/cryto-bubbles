import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const InfluencerAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const data = await import("./influencer.json");
      setAnimationData(data.default); 
    };

    loadAnimation();
  }, []);


  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  return (
    <div className="lottie-animation partner-am">
      <Lottie
        animationData={animationData}
        loop
        autoplay 
      />
    </div>
  );
};

export default InfluencerAnimation;
