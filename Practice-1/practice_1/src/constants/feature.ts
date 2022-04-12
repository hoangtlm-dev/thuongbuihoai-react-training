import { FeatureListProps } from "../types/feature";
import iconResponsive from "../assets/images/icons/responsive.png";
import iconDiamond from "../assets/images/icons/diamond.png";
import iconLayers from "../assets/images/icons/layers.png";

const MAIN_TEXT = "As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the host to your journey; without Her we could not find the unfolding adventures that attract and feed our souls."

const FEATURE_RESPONSIVE = "The past few years have seen a dramatic change in the public perception of cosmetic surgery."

const FEATURE_DIAMOND = "About 64% of all on-line teens say that do things online that they wouldn't want their parents to know about."

const FEATURE_LAYERS = "Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone?"

const FEATURE: FeatureListProps[] = [
  {
    key: "responsive",
    className: "responsive",
    title: "Responsive layout",
    content: FEATURE_RESPONSIVE,
    icon: iconResponsive,
    alt: "image responsive"
  },
  {
    key: "diamond",
    className: "diamond",
    title: "Pixel perfect",
    content: FEATURE_DIAMOND,
    icon: iconDiamond,
    alt: "image diamond"
  },
  {
    key: "layers",
    className: "layers",
    title: "Organized layers",
    content: FEATURE_LAYERS,
    icon: iconLayers,
    alt: "image layers"
  }
]
export { MAIN_TEXT, FEATURE_RESPONSIVE, FEATURE_DIAMOND, FEATURE_LAYERS, FEATURE }