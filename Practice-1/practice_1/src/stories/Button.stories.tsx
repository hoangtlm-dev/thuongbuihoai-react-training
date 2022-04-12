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
  return <Button type="light">TAKE A TOUR</Button>;
}

function Primary() {
  return <Button type="primary">EXPLORE</Button>;
}

const Hover = () => <Button type = "hover btn__hover">GET STARTED</Button>
Hover.parameters = { pseudo: { hover: true } }

function Outline() {
  return <Button type="outline">GET STARTED</Button>;
}

export { Light, Primary, Hover , Outline }