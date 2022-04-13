import React from "react";
import "./link.css"

interface LinkProps {
  value: string;
}

function Link({ value }: LinkProps): JSX.Element {
  return (
    <a title="Already Have an account?" className = "link" href="javascript:void(0)">{value}</a>
    )
  }
export { Link };