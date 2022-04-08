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

function Primary() {
  return <Button type="primary">TAKE A TOUR</Button>;
}

function Secondary() {
  return <Button type="secondary">EXPLORE</Button>;
}

const Hover = () => <Button type = "hover btn__hover">GET STARTED</Button>
Hover.parameters = { pseudo: { hover: true } }

function Third() {
  return <Button type="third">GET STARTED</Button>;
}

export { Primary, Secondary, Hover, Third }