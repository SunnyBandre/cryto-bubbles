import React from "react";
import "./TitleAreaVideo.css"; // Assuming you will add some CSS for styling
import Breadcrumbs from "./Breadcrumbs";

const TitleAreaVideo = ({ title, description, videoURL, breadcrumbPaths }) => {
  return (
    <div className="title-area-center video">
      {/* Video background */}
      <video className="video-background" autoPlay muted loop playsInline>
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title and description content */}
      <div className="content-overlay">
        <div className="container">
          <div className="pta-width">
            {breadcrumbPaths && (
              <Breadcrumbs
                paths={breadcrumbPaths}
                currentTitle="Pricing Model"
              />
            )}
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAreaVideo;
