import React, { memo } from "react";
import { AvatarProps } from "../../types/avatar";
import "./avatar.css";

const Avatar: React.FC<AvatarProps> = ({ username, avatar }) => {
  return (
    <div className="active">
      <img src={avatar} alt="This is avatar" className="avatar" />
      <span className="username">{username}</span>
    </div>
  );
}

export default memo(Avatar);
