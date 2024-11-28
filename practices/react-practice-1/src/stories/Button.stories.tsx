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
  return <Button className="primary">Explore</Button>;
}

function Subscribe() {
  return <Button className="dark">Subscribe</Button>;
}

export { Primary, Subscribe }