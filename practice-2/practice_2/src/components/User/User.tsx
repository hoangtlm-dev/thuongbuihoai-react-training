import React from "react";
import { UserProps } from "../../types/user";
import "./user.css"

export default function User({
  username,
  avatar,
}: UserProps) {
  return (
    <div className="user__active">
      <img src={avatar.src} alt={avatar.alt} className="user__avatar" />
      <span className="username">{username}</span>
    </div>
  );
}