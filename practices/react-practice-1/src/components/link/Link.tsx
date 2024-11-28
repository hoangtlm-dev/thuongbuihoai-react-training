import React from "react";
import { LinkProps } from "../../types/link";
import "./link.css"

export function Link({ title, href }: LinkProps): JSX.Element {
  return (
    <a title={title} className="link" href={href}>Already Have an account?</a>
  )
}