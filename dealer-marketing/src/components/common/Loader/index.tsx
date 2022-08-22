import React, { memo } from "react";
import styleLoader from "./loader.module.css";

const LoadingPage: React.FC = () => <div className={styleLoader.loader} />;

export default memo(LoadingPage);
