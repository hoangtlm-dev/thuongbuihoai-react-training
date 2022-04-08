import React from "react";
import { Description } from "../components/description/Description";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Description",
  component: Description,
};
export const MAIN_TEXT = "As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the host to your journey; without Her we could not find the unfolding adventures that attract and feed our souls."
export function MainText() {
  return (
    <Description className="description">{MAIN_TEXT}</Description>
  );
}
