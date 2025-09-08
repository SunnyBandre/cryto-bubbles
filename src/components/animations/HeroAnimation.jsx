import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const HeroAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const data = await import("./hero-1-new.json"); 
      setAnimationData(data.default);
    };

    loadAnimation();
  }, []);

  if (!animationData) {
    return null; 
  }

  return (
    <div className="lottie-animation">
      <Lottie
        animationData={animationData}
        loop
        autoplay 
      />
    </div>
  );
};

export default HeroAnimation;
