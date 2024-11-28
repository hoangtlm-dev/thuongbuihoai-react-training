import React from "react";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <div data-testid="loading-page" className="loading-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loading;
