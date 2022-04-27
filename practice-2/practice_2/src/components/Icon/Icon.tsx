import React from "react";
import { IconProps } from "../../types/icon";
import "./icon.css"

export default function Icon({
  username,
  avatar,
}: IconProps) {
  return (
    <div className="user__active">
      <img src={avatar.src} alt={avatar.alt} className="user__avatar" />
      <span className="username">{username}</span>
    </div>
  );
}