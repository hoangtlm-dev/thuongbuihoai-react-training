import React from "react";
import { FormProps } from "../../types/form";
import { InputProps } from "../../types/input";
import Button from "../button/Button";
import { Description } from "../description/Description";
import { Input } from "../input/Input";
import { Link } from "../link/Link";
import "./form.css"

export default function Form({ inputList }: FormProps): JSX.Element {
  const renderInputList = (list: InputProps[]) => list.map((item) => (
    <Input className="info" type={item.type} placeholder={item.placeholder} />
  ));

  return (
    <form className="form">
      <Description className="signup"><p>Sign up</p></Description>
      {renderInputList(inputList)}
      <Link title="Already Have an account?" href="javascript:void(0)" />
      <Button type="submit" className="signUp">Sign Up</Button>
    </form>
  );
}