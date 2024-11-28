import React, { memo } from "react";
import "./loader.css";

const Loader: React.FC = memo(() => {
  return <div data-testid="loading-page" className="loader" />;
});

export default Loader;
