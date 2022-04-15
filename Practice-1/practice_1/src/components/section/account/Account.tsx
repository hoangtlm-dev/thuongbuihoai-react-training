import React from "react";
import { InputProps } from "../../../types/input";
import Form from "../../form/Form";
import SectionTitle from "../../title/SectionTitle";
import "./account.css"

export interface AccountProps {
  list: InputProps[];
}

export default function Account({
  list
}: AccountProps): JSX.Element {
  return (
    <section className = "account">
      <div className = "container">
       <SectionTitle className="account__heading"><p>Create An Account</p></SectionTitle>
       <Form inputList={list}></Form>
      </div>
    </section>
  );
}