import React from "react";
import { SpriteImageProps } from "../../types/spriteImage";
import "./spriteImage.css"

interface SpriteImagesProps {
  spriteImages: SpriteImageProps[];
}

export default function SpriteImage({  spriteImages }: SpriteImagesProps): JSX.Element {
  function renderSpriteImage(list: SpriteImageProps[]) {
    return list.map((item) =>
      <a title={item.title} href="javascript:void(0)">
        <i className={`sprite sprite--${item.className}`} key={item.key}></i>
      </a>
    );
  }
  return (
    <ul className = "socials">
      <li className = "socials__item">
        {renderSpriteImage(spriteImages)}
      </li>
    </ul>
  );
}