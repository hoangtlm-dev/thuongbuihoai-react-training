import React, { memo } from "react";
import "./loadingPage.css";

const LoadingPage: React.FC = memo(({}) => {
  return (
    <div data-testid="loading-page" className="loader" />
  );
});

export default LoadingPage;
