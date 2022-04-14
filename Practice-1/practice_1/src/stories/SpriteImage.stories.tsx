import React from "react";
import SpriteImage from "../components/spriteImage/SpritesImage";
import { SPRITES_IMAGE } from "../constants/spriteImage";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/SpriteImage",
  component: SpriteImage,
};

export function SpriteImages() {
  return <SpriteImage spriteImages={SPRITES_IMAGE} />
}