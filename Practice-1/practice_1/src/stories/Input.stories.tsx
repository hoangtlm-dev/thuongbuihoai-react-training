import React from "react";
import { Input } from "../components/input/Input";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Input",
  component: Input,
};

export function Email() {
  return (
    <Input className="info" type="email" placeholder="Email" />
  );
}

export function Password() {
  return (
    <Input className="info" type="password" placeholder="Password" />
  );
}

export function ConfirmPassword() {
  return (
    <Input className="info" type="password" placeholder="Confirm password" />
  );
}