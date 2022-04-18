import React from "react";
import { AccountProps } from "../../../types/account";
import Form from "../../form/Form";
import SectionTitle from "../../title/SectionTitle";
import "./account.css"

export default function Account({ list }: AccountProps): JSX.Element {
  return (
    <section className="account">
      <div className="container">
       <SectionTitle className="account__heading">Create An Account</SectionTitle>
       <Form inputList={list}></Form>
      </div>
    </section>
  );
}