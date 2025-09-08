import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AboutAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const data = await import("./fastone-about.json"); 
      setAnimationData(data.default); 
    };

    loadAnimation();
  }, []);

 
  if (!animationData) {
    return <div>Loading animation...</div>;
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

export default AboutAnimation;
