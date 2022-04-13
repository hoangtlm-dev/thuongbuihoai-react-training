import React from "react";
import Button from "../components/button/Button";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Button",
  component: Button,
};

function Light() {
  return <Button className="light">Take a tour</Button>;
}

function Primary() {
  return <Button className="primary">Explore</Button>;
}

const Hover = () => <Button className = "hover btn__hover">Get started</Button>
Hover.parameters = { pseudo: { hover: true } }

function Outline() {
  return <Button className="outline">Get started</Button>;
}

function SignUp() {
  return <Button className="signUp">Sign up</Button>;
}

export { Light, Primary, Hover , Outline, SignUp }