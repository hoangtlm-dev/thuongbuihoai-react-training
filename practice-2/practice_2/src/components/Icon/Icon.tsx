import React from "react";
import { IconProps } from "../../types/icon";
import "./icon.css"

const Icon: React.FC<IconProps> = ({ username, avatar }) => {
  return (
    <div className="user__active">
      <img src={avatar.src} alt={avatar.alt} className="user__avatar" />
      <span className="username">{username}</span>
    </div>
  );
}

export default Icon;
