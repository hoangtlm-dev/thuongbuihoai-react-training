import React from "react";
import { AboutProps } from "../../types/about";

interface AboutUsProps {
  aboutUs: AboutProps[];
}

export default function About({ aboutUs }: AboutUsProps): JSX.Element {
  function renderMenuList(list: AboutProps[]) {
    return list.map((item) =>
      <li className = "footer__item">
        <a title={item.title} key={item.key} href="javascript:void(0)">{item.value}</a>
      </li>
    );
  }

  return (
    <div className = "footer__info--about">
      <ul className = "footer__list">
        {renderMenuList(aboutUs)}
      </ul>
    </div>
  );
}